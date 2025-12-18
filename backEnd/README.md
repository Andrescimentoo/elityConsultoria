# Back-end — Elity Consultoria

Este diretório contém a API responsável por integrar os fluxos de prospecção da Elity Consultoria. O serviço combina **Express**, **Prisma** e integrações externas (iFood e N8N) para buscar dados de potenciais clientes, persistir leads no MySQL e disponibilizar tudo para o front-end.

## Visão geral
- **Servidor HTTP**: `app.js` carrega variáveis de ambiente com `dotenv`, habilita CORS controlado por `cors.config.js` e publica as rotas expostas em `src/routes`.
- **Banco de dados**: Prisma (vide `prisma/schema.prisma`) conecta-se a um banco MySQL, gerando o cliente em `generated/prisma`. A tabela principal `dados_das_consultas` (model `datasOfConsults`) armazena os leads coletados.
- **Integrações externas**:
  - `/requestToIfoodAPI`: busca, via GraphQL do marketplace iFood, dados cadastrais de um restaurante a partir do `merchantId` fornecido.
  - `makeRequestToN8N.controller.js`: envia o telefone (`phoneIf`) para um webhook configurado no N8N, permitindo automações como disparos de mensagens.

## Estrutura de pastas
```
backEnd/
├── app.js                  # Inicialização do servidor Express
├── cors.config.js          # Lista de domínios autorizados para CORS
├── prisma/                 # Schema e configurações do Prisma
│   └── schema.prisma
├── generated/prisma/       # Cliente Prisma gerado (não editar manualmente)
├── src/
│   ├── prismaClient.js     # Instância compartilhada do Prisma
│   ├── controller/
│   │   ├── findManyLeadsGenerateads.controller.js
│   │   ├── makeRequestIfood.controller.js
│   │   ├── makeRequestToN8N.controller.js
│   │   └── saveLeads.controller.js
│   └── routes/
│       ├── routeRequestIfoodAPI.routes.js
│       └── routesToDatasOfLeads.routes.js
└── package.json
```

### Principais rotas
| Método | Caminho | Descrição | Controller |
|--------|---------|-----------|------------|
| `GET`  | `/requestToIfoodAPI?merchantId=<id>` | Consulta o GraphQL do iFood e retorna nome, telefone, CNPJ e endereço do restaurante. | `makeRequestIfood.controller.js` |
| `GET`  | `/findManyleads` | Retorna todos os registros de `datasOfConsults`. | `findManyLeadsGenerateads.controller.js` |
| `POST` | `/saveLeads` | Cria um novo lead após validar se CNPJ e telefone ainda não existem. | `saveLeads.controller.js` |
| `POST` | `/requestToN8N?phoneIf=<número>` | (Fluxo interno) Dispara webhook configurado no N8N com o telefone capturado. | `makeRequestToN8N.controller.js` |

> ⚠️ Os controladores podem ser reutilizados em novas rotas conforme necessário; mantenha os nomes das rotas consistentes com o front-end.

## Requisitos
- Node.js 18+ (necessário para `fetch` nativo no back-end).
- Banco de dados MySQL acessível via `DATABASE_URL`.

## Configuração e execução
1. **Instalação**
   ```bash
   cd backEnd
   npm install
   ```
2. **Variáveis de ambiente**
   Crie um arquivo `.env` baseado nas chaves abaixo:
   ```env
   PORT=3000                        # Porta onde a API vai escutar (opcional)
   DATABASE_URL="mysql://user:pass@host:3306/elity"
   WEB_HOOKN8N_URL="https://seu-n8n/webhook/endpoint"
   ```
3. **Banco de dados**
   - Ajuste o schema em `prisma/schema.prisma` se necessário.
   - Gere o cliente Prisma e sincronize o banco:
     ```bash
     npx prisma generate
     npx prisma db push   # ou prisma migrate dev --name <nome>
     ```
4. **Executar o servidor**
   - Desenvolvimento com recarregamento:
     ```bash
     npm run dev
     ```
   - Produção/local sem nodemon:
     ```bash
     npm start
     ```

## Boas práticas
- **Validações**: reutilize a checagem de duplicidade do `saveLeads` sempre que novos fluxos criarem leads.
- **CORS**: mantenha `cors.config.js` atualizado com os domínios oficiais para evitar bloqueios no front-end.
- **Segurança**: nunca commite arquivos `.env` ou credenciais sensíveis. Use variáveis de ambiente em produção (Vercel, Render, Railway etc.).
- **Logs e monitoramento**: `console.log` no `app.listen` é útil localmente, mas utilize ferramentas de observabilidade em produção.

## Próximos passos 
- Integrar um agente de IA que recebe os dados dos números de telefone e manda mensagens automatizadas para esses números.
- Adicionar testes automatizados para os controllers críticos.
- Centralizar mensagens de erro para respostas consistentes.
- Documentar o contrato da API (Swagger ou arquivos OpenAPI) para facilitar integrações de parceiros e que todos possam entender a 
responsábilidade de cada rota e cada controller.

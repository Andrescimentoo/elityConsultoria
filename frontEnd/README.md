                                                    Web Sistema Gerenciador de LeadsOl
Olá Dev! seja bem vindo a documentação desse projeto empolgante que pude desenvolver para a empresa Elity Consultoria. Nesse Readme você poderá entender um pouco de como funciona a Interface view de interação, que tecnologias foram usadas e qual é o fluxo do código

                                                      Mapa Fluxonal do proejeto
Contexto: A Empresa Elity consultoria necessitava automatizar o gerenciamento e a obtenção de leads, para alavancar a obtenção de novos clientes e  gerenciamento  de novos clientes. Para isso um gerador de leads automatizado foi desenvolvido:

Etapa inicial: O sistema tem um Input que recebe uma URL e dessa URl extrai o marchantId e envia para o back-end.

Passo 1:

Pasta: InputCapturarMerchantId,
Arquivo: extrairMarchantId:
  * Criei uma função onde ela extrai o merchantId da URL digitada.
 
Passo 2: 

Pasta InputCapturarMerchantId,
Arquivo: inputCapturaMarchantId.jsx
  * Criei um Input que recebrá por próps a URl e a função capturarMerchantId. arquivo InputCapturarMarchantId

Passo 3:

Pasta: gerarLeads
Arquivo: Usedados.js
  * Criei um hook personalidado que recebe o merchanId extraido pela Url digitada no Input, envio ele como queryString junto ao fetch feito a meu endpoint back-end que faz a requisição para a API que promete entregar os dados dos leads e retorno as funções e os dados recebidos para o meu componente que vai usar as funções e renderizar os dados que meu hook retorna.

Passo 4:

Pasta:renderingTable
Arquivo: renderingTable.jsx
  * Nesse arquivo após criar o hook que recebe esses dados como resposta da promessa feita pelo fetch, eu criei um componente para receber e renderizar os dados que eu quero vindos do JSON obtidos como resposta feita pela requisição. Mas este componente recebe os dados como callBack devido a Singularidade do projeto.   
 
 Passo 5:
 
 Pasta: gerarLeads
 Arquivo: gerarLeads.jsx
    * Nesse arquivo após criar tanto um hook que pede e recebe os dados como resposta e criar um componente que vai renderizar esses dados recebidos, crio um componente aonde irá de fato unificar essas 2 funcionalidades

   * Importo o hook useDados. Para que por meio das props eu aplique a função buscarDados e os objetos retornados a seus respectivos componentes: 
   * Importo o componente de Input.patra que este receba como argumento o objeto url e setUrl
   * logo após importo o componente de renderização de dados e passo como argumento o objeto Data, para que ele em fim consiga de fato executar sua função 
   * Por último escrevo um botão que recebe o hook OnClick que dispara a função buscarDados() toda vez que é clicado, assim dando start a todo esse processo de
     geração de Leads, finalizando a primeira etapa do sistema.  




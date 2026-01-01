
// Simulo a vinda do merchantId ;
// Simulo a reisição fetch;
// Simulo o á sa´da dos dados tratados


// tem um porém: Essa minha função é diferente da findMany, por que a dependencia dela não é um módulo(ORM e etc.) a dependenci dela é uma API 
// See tratando de API eu preciso usar o jest.mock? meu teste de unitario teem estrutura para testar uma chamada de API? ou segue a mesma lógica do findMany
// que a gente tem q mockar a dependencia devido a impossibilidade do teeste unitario num módulo?    
 
import { makeRequestIfoodAPI } from "../../src/controller/makeRequestIfood.controller.js";


test ('Testar requeisição e tratameento de dados da função makerequestIfoodAPI', async () => {
    const req = {
      query: {
          merchantId: '123' 
    }
}
  
global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => ({ data: { merchantExtra: {
        name:'McDonald' ,
        phoneIf: 11987,
        documents:{},
        address : {}

    } } })
})
 

 const res = {
      status: jest.fn().mockReturnThis(), /// AHHHHHHHHHHHHHHHHH aqui é o campo vazio pra guardaar o vaalor recebido 
      json: jest.fn() // a resposta vai ser armazenada aí, a função vai colocar o json aí. Mas não em cima de algo? 
}
   await makeRequestIfoodAPI(req,res) 
  
   
    
   
   expect(res.status).toHaveBeenCalledWith(200)// AQUIII é o lugar onde colocamos o valor para o jest comparar se o campo preenchido (dados recebidos do teste) é igual os dados que estão aqui 
   expect(res.json).toHaveBeenCalledWith({
    name:'McDonald',
    phoneIf: 11987,
    documents:{},
    address : {}

}) 

})
  

//lições: 
// depenendcias globais: Não interceptamos a URL de chamada
// Aquilo que o código opera fora: Mockamos (torna conceitual)
// Aquilo que o código recebe de fora: só simulamos o comportamento sem mockar. 
// global.fetch 'mocka o fetch' diz: agora o fetch quue a função chamarr vai cair aqui
// jest.fn().mockResolvedValue é a simulação da instancia e operação do fetch. fn é uma função fake ; mockresolved... é o que você define que a function retorn
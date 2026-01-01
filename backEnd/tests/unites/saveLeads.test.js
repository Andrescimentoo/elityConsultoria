
jest.mock('../../src/prismaClient.js', () => ({
    prisma: {
      dataOfConsults: {
        
        findFirst: jest.fn().mockResolvedValue(null),
        
         create: jest.fn().mockResolvedValue({
        
                nome: 'lewa',        
                cnpj: '',
                numeroDeTelefone:'',
                cidade: '',
                distrito: '',
                nomeDaRua: '',
                numeroDaRua: '',
                cep:''
      
     })
   }}
}))


import { saveLeads } from "../../src/controller/saveLeads.controller"




test ('testando função que salva leads gerados num banco de dados', async () => {
   const req = {
       body: {
       nome:'',
       cnpj: '',
       numeroDeTelefone:'',
       cidade: '',
       distrito: '',
       nomeDaRua: '',
       numeroDaRua: '',
       cep:''
      }
    }






   const res = {
    status: jest.fn().mockReturnThis(), 
    send: jest.fn(),
   }
   
   await saveLeads(req,res)
   
   expect(res.status).toHaveBeenCalledWith(201)
   expect(res.send).toHaveBeenCalledWith({
       nome: 'lewa',  
       cnpj: '',
       numeroDeTelefone:'',
       cidade: '',
       distrito: '',
       nomeDaRua: '',
       numeroDaRua: '',
       cep:''
 })

 // simular o recebimento dos dados vindos do front (igual no requestIfoodAPI)

})

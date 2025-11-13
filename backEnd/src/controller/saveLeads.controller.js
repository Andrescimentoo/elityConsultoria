import { prisma } from "../prismaClient";
// me parece que já existe um endPoint (este) que salva os leads, mas tenho q entender melhor

export const saveLeads = async (req,res) => {
    try {
        const {
            nome,
            cnpj,
            numeroDeTelefone,
            cidade,
            distrito,
            nomeDaRua,
            numeroDaRua,
            cep
        } = req.body
        
        const verifyLeadExistense = await prisma.dataOfConsults.findFirst({ // provavel que a verificação se faz pegando da tabela dataOfConsults um dado único
        //(poderia ser ID mas é cnpj) e aí faz  a validação atravez do if, se oo dado existe retorna status 409 (já existe) se não cria o novo lead.
          where: {
            cnpj ,
            numeroDeTelefone,
          }
        });
        if (verifyLeadExistense) {
          return res.status(409).send({
            message: "Lead já cadastrado no banco de dados!"
          });
        }
       
        const createLead = await prisma.dataOfConsults.create({
            data:{
            nome,
            cnpj,
            numeroDeTelefone,
            cidade,
            distrito,
            nomeDaRua,
            numeroDaRua,
            cep
        }
            
    })
        res.status(201).send(createLead)
    } catch (error) {
        res.status(500).send({
            error,
            message:'erro ao criar lead '
        })
    }
}
import { prisma } from "../prismaClient";

export const storeNewRestaurant = async (req,res) => {
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
        
        const existing = await prisma.dataOfConsults.findFirst({
          where: {
            cnpj,
            numeroDeTelefone,
          }
        });
        if (existing) {
          return res.status(409).send({
            message: "Restaurante já cadastrado no banco de dados!"
          });
        }
       
        const createNewRestaurant = await prisma.dataOfConsults.create({
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
        res.status(201).send(createNewRestaurant)
    } catch (error) {
        res.status(500).send({
            error,
            message:'erro ao adicionar reestaurante cadastrado '
        })
    }
}
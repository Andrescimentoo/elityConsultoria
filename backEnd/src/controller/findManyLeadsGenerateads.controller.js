import { prisma } from "../prismaClient.js"


export const findManyLeadsGenerateads = async (req,res) => {
    try {
        const consultedRestaurantsTables = await prisma.datasOfConsults.findMany()
        res.status(200).send(consultedRestaurantsTables)
    } catch (error) {
        res.status(500).send({
            error,
            message:'erro ao buscar todas as tabelas de restaurantes consultados'
        }) 
    }
}
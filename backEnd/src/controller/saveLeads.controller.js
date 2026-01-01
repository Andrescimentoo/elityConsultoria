import { prisma } from "../prismaClient.js";
// me parece que já existe um endPoint (este) que salva os leads, mas tenho q entender melhor

export const saveLeads = async (req, res) => {
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

    const verifyLeadExistense = await prisma.datasOfConsults.findFirst({ // provavel que a verificação se faz pegando da tabela dataOfConsults um dado único
      //(poderia ser ID mas é cnpj) e aí faz  a validação atravez do if, se oo dado existe retorna status 409 (já existe) se não cria o novo lead.
      where: {
        cnpj,
        numeroDeTelefone,
      }
    });
    if (verifyLeadExistense) {
      return res.status(409).send({
        message: "Lead já cadastrado no banco de dados!"
      });
    }

    const createLead = await prisma.datasOfConsults.create({
      data: {
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


    if (!createLead.nome) {
      return res.status(400).send({
        message: "Imposisvel criar o Lead devido a ausencia de um dado importantee"
      });
    }
    return res.status(201).send(createLead)

  } catch (error) {
    res.status(500).send({
      error,
      message: 'erro ao criar lead '
    })
  }
}
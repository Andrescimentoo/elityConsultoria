// precisamos consumir a API do ifood que traz os dados pra gente, ou seja o bater na api do IFOOD
// seria acredito eu fazer uma requisiçao para a API do IFOOD e trazer os dados para o nosso sistema 
// so vou precisar do link ou URl do fetch que retorna os dados do CNPJ e Numero de telefone do restaurante 
const URldaApi = "https://marketplace.ifood.com.br/v1/merchant-info/graphql?latitude=-23.517678&longitude=-46.475184&channel=IFOOD";
const urlTeste = "https://api.adviceslip.com/advice"

const consumirAPIGet = async (req, res) => {
       try {
           // Aprendi que quando é outro metodo http especificamos o metodo e o corpo da req
           const requestToFetch = await fetch(URldaApi, {
                method: 'POST',
                headers: {
                   'Content-Type': 'application/json' // tipo do conteudo que estou enviando
                },
                body: JSON.stringify({
                    // com o query, posso obter todos os dados com apenas uma requisçao
                    query: `
                        query {
                            merchantInfo {
                                cnpj
                                phoneNumber
                            }
                        }
                    `
                })
           });
            if(!requestToFetch.ok){
                return res.status(400).send("erro parametros invalidos")
            }
            const data = await requestToFetch.json()
            res.status(200).send(data) 
                           
        } catch (error) {
            return res.status(500).send({
               message: "Erro na requisição",
               error: error.message, // Enviar o erro de forma estruturada
         });
       }

   
}



export {consumirAPIGet}

//mas quando vamos fazer a requisição real aqui em codigo pra nos retornar os dados nos da um erro
// por conta do mercahnt ID

//precisamos do merchant id de todas as empresas, aí sim teriamos os addos que prercismaos nas nossas maos
// no entanto seria entao mais facil a mao pegar o cnpj, por que o trabalho de pegar todos os merchant id´s pra gerar o cpf
// é muito amior

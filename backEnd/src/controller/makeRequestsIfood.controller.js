
export const requestByMerchaintID = async (req, res) => {

    try {
      // Extrair o merchantId da requisição (pode vir como parte da URL ou do corpo da requisição)
      const { merchantId } = req.params; // ou req.body, dependendo de onde você manda o ID
  
      // Requisição para a API externa
      const response = await fetch("https://marketplace.ifood.com.br/v1/merchant-info/graphql?latitude=&longitude=&channel=IFOOD", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            query ($merchantId: String!) { 
              merchantExtra(merchantId: $merchantId, required: false) { 
                documents { 
                  CNPJ { 
                    type 
                    value 
                  } 
                } 
              } 
            }`,
          variables: {
            merchantId: merchantId // Aqui vai o ID dinâmico recebido na requisição
          }
        })
      });
     
      if (!response.ok) {
        return res.status(400).json({ message: 'Erro ao buscar dados da API externa' });
      }
  
      const data = await response.json();// Converte a resposta da API externa em objeto JavaScript
  
      // Retornar os dados necessários
      const cnpj = data.data.merchantExtra.documents.CNPJ.value;
      res.status(200).json({cnpj });
  
    } catch (error) {
      res.status(500).json({ message: 'Erro na requisição', error: error.message });
    }
  };
  
 
// A API requer autenticação e não está recebendo um token

// O formato da requisição (query GraphQL) está incorreto
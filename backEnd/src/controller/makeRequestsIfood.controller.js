
export const requestByMerchaintID = async (req, res) => {
  try {
    // Extrair o merchantId da requisição (garanta que está no corpo da requisição)
    const { merchantId } = req.body; // Certifique-se de que a requisição esteja enviando o merchantId corretamente

    // Requisição para a API externa
    const response = await fetch("https://marketplace.ifood.com.br/v1/merchant-info/graphql?latitude=&longitude=&channel=IFOOD", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Origin": "http://localhost:5173", // Ajuste o domínio conforme o seu front-end
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
          merchantId: merchantId, // ID do Merchant passado pelo front-end
        },
      }),
    });

    if (!response.ok) {
      return res.status(400).json({ message: 'Erro ao buscar dados da API externa' });
    }
    const text = await response.text(); // Obtém a resposta como texto
    
    let data;
    try {
      data = JSON.parse(text); // Tenta converter o texto para um objeto JSON
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao analisar a resposta JSON' });
    }

    // Agora que temos os dados, podemos acessar o CNPJ
    const cnpj = data.data.merchantExtra.documents.CNPJ.value;
       return res.status(200).json({ cnpj });

  } catch (error) {
    console.log('Erro no processamento da requisição:', error.message);
    return res.status(500).json({ message: 'Erro na requisição', error: error.message });
  }
};
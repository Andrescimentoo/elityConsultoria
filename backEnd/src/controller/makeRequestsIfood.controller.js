export const requestByMerchaintID = async (req, res) => {
  try {
    const merchantId = req.query.merchantId;

    if (!merchantId) {
      return res.status(400).json({ message: "Merchant ID é obrigatório" });
    }

    const response = await fetch(
      "https://marketplace.ifood.com.br/v1/merchant-info/graphql?latitude=&longitude=&channel=IFOOD",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
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
          variables: { merchantId },
        }),
      }
    );

    if (!response.ok) {
      return res.status(response.status).json({ message: "Erro ao buscar dados da API externa" });
    }

    const data = await response.json();
    
    if (!data.data?.merchantExtra?.documents?.CNPJ?.value) {
      return res.status(404).json({ message: "CNPJ não encontrado" });
    }

    return res.status(200).json({ cnpj: data.data.merchantExtra.documents.CNPJ.value });
  } catch (error) {
    console.error("Erro no processamento da requisição:", error.message);
    return res.status(500).json({ message: "Erro na requisição", error: error.message });
  }
};

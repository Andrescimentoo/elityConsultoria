
export const makeRequestIfoodAPI = async (req, res) => { 
  try {
    const merchantId = req.query.merchantId; // simulei  

    if (!merchantId) {
      return res.status(400).json({ message: "Merchant ID é obrigatório" });
    }

    const response = await fetch(
      "https://marketplace.ifood.com.br/v1/merchant-info/graphql?latitude=&longitude=&channel=IFOOD",{ 
          method: "POST",
          headers: {
          "Content-Type":"application/json",
          Accept: "application/json"
          },
          body: JSON.stringify({
            query:
            `query ($merchantId: String!) { 
              merchantExtra(merchantId: $merchantId, required: false) { 
               name
               phoneIf
               documents { 
                 CNPJ { 
                   type 
                   value 
                  } 
                }
               address {
                 city
                 state
                 district
                 streetName
                 streetNumber
                 zipCode
                }
              } 
            }`,
            variables:{merchantId},
          }),
        
      }
    );

    if (!response.ok) {
      return res.status(response.status).json({ message: "Erro ao buscar dados da API externa" });
      
    }
       const data = await response.json(); //pegando o json retornado como resposta da requisição e dps escolhendo os dados que eu quero mandar pro front?
       
       const datasToResponse = data.data.merchantExtra
      
       const { name,phoneIf,documents,address} = datasToResponse
       // DESCONSTRUÇÃO Serve pra extrair valores específicos de um objeto/array que você já tem.
       
        
    
       if (!datasToResponse.phoneIf && !datasToResponse.address) {
         return res.status(404).json({ message: " Número de contato ou endereço não encontrados" });
        }
         return res.status(200).json({name,phoneIf,documents,address}) // documents contem o cnpj
    
       
  } catch (error) {
      return res.status(500).json({ message: "Erro na requisição", error: error.message });
  }
};

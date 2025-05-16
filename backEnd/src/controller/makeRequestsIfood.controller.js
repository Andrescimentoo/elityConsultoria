
export const requestByMerchaintID = async (req, res) => {
  try {
    const merchantId = req.query.merchantId;

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

    const data = await response.json();
       //data pra response
       //const data = response.data.merchaintExtra
       //const {name,documents,phoneIf,adress} = data
       // data.
    //if (!data.data?.merchantExtra?.documents?.CNPJ?.value || !data.data?.merchantExtra?.phoneIf) {
     // return res.status(404).json({ message: "CNPJ,nome, numero de contato ou endereço não encontrados" });
    //}
    // return res.status(200).json({name,phoneIf,cnpj,adress})
    
    
    
    
    
    
    return res.status(200).json({ // aqui também sinto que dá pra reconstruir
      name: data.data.merchantExtra.name,
      phoneIf: data.data.merchantExtra.phoneIf,
      cnpj: data.data.merchantExtra.documents.CNPJ.value,
      address:{
         city: data.data.merchantExtra.address.city,
         state: data.data.merchantExtra.address.state,
         district: data.data.merchantExtra.address.district,
         street: data.data.merchantExtra.address.streetName,
         number: data.data.merchantExtra.address.streetNumber,
         zip: data.data.merchantExtra.address.zipCode
       } 
      });
  } catch (error) {
      console.error("Erro no processamento da requisição:", error.message);
    return res.status(500).json({ message: "Erro na requisição", error: error.message });
  }
};

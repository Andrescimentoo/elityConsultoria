 
 
 export const makeRequestToN8N = async (req, res) => {
 
    const phoneIf = req.query.phoneIf;
    const webhookUrl = process.env.WEB_HOOKN8N_URL;
    try {
        
         const reqParaOboot = await fetch(webhookUrl, {
           method: "POST", // ✅ Enviando dados → POST
           headers: {
             "Content-Type": "application/json", // 📌 Cabeçalho necessário para body JSON
             Accept: "application/json",
           },
           body: JSON.stringify({ phoneIf }), // ✅ Enviando o número dentro do corpo da requisição
         });
     
          const respostaDoBoot = await reqParaOboot.json(); 
           
          if(!respostaDoBoot){
             res.status(404).send(console.log("bot respondeu com um erro e é impossivel realizar ação "))
           }
     
            return res.status(200).send({
            message: "Webhook chamado com sucesso.",
          
          });

    } catch (error) {
      // 6. Em caso de erro, retorne status 500 com detalhes
      return res.status(500).send({
        message: "Erro interno ao chamar o webhook do bot.",
        error: error.message,
      });
    }
}   
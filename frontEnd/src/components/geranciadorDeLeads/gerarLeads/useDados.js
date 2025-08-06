import { useState } from "react";
import { extrairMerchantId } from "../inputCapturaMerchantId/extrairMarchaintId.js";
 

export function useDados() { // pega os objetos,trata e envia para a renderização
  const [url, setUrl] = useState("");
  const [data,setData] = useState('')
  
  
   // merchaintI  d extraido e enviado junto com a req pro back
  const buscarDados = async () => {
  
    try {
        const id = extrairMerchantId(url);
        const response = await fetch(`https://elityconsultoria.onrender.com/myApiBackEnd?merchantId=${id}`, {
        method: "GET",
        headers: { Accept: "application/json" }
      });

      if (!response.ok) throw new Error("Erro ao buscar dados");

      const data = await response.json();
      
      setData(data)
      setUrl(id)

      if (!data.phoneIf && !data.address)
        throw new Error("telefone de contato ou endereço não encontrados"); //não vieram no body da req
    
    } catch (error) {
      console.log("Erro na requisição:", error);
    }
  };

  return {
    url,
    data,
    buscarDados,
    setUrl
  };
}



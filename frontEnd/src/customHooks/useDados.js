import { useState } from "react";
import { extrairMerchantId } from '../components/geranciadorDeLeads/inputCapturaMerchantId/extrairMarchaintId.js';
 

export function useDados() { 
  const [url, setUrl] = useState('');
  const [data,setData] = useState('')
  
  const buscarDados = async () => { // mudar para buscar dados do Ifood
    try {
        const id = extrairMerchantId(url);
        const response = await fetch(`https://elityconsultoria.onrender.com/gerarLeadsViaMerchantId?merchantId=${id}`, {
        method: 'GET',
        headers: { Accept: 'application/json' }
      });
      if (!response.ok) throw new Error('Erro ao buscar dados');

      const data = await response.json();
      
      setData(data)
      setUrl(id)

      if (!data.phoneIf && !data.address)
        throw new Error('telefone de contato ou endereço não encontrados'); 
    
    } catch (error) {
      console.log('Erro na requisição:', error);
    }
  };

  return {
    url,
    data,
    buscarDados,
    setUrl
  };
}



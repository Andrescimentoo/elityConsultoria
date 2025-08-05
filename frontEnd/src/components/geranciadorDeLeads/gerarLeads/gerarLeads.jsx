import React from 'react'
import { useDados } from "./useDados.js";
import { RenderingTable } from '../renderingTable/renderingTable.jsx';
import { InputCapturaMerchaintId } from '../inputCapturaMerchantId/inputCapturaMerchaintId.jsx';

export function GerarLeads () {
    const {url,buscarDados,setUrl} = useDados()
      return (
       <div>
         <InputCapturaMerchaintId url={url}setUrl={setUrl}/>  
         <RenderingTable/>  
         <button onClick={buscarDados}>Buscar Dados</button>  
         
       </div>
  )
}


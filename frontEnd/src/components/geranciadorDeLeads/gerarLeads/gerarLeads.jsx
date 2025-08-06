import React, { useState } from 'react'
import { useDados } from "./useDados.js";
import { RenderingTable } from '../renderingTable/renderingTable.jsx';
import { InputCapturaMerchaintId } from '../inputCapturaMerchantId/inputCapturaMerchaintId.jsx';


export function GerarLeads () {
    const {url,buscarDados,setUrl,data,loading} = useDados()
      return (
      <>
         <header>
           <h1>Gerador de leads Elity Consultoria</h1>
           <h3>Gere seu Lead e inicie conversas agora mesmo através da nossa IA via whatsApp</h3>
         </header>
        
         <main>
           <InputCapturaMerchaintId url={url}setUrl={setUrl}/>
           <button onClick={buscarDados}>Buscar Dados</button>

           {loading && <p>carregando...</p>}  
           {!loading && data.length > 0 && <RenderingTable data={data}/>}

          
         </main>
      </> 
    )}






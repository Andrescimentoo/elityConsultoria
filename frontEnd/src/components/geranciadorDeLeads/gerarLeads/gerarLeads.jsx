import React, { useState } from 'react'
import { useDados } from "../../../customHooks/useDados.js";
import { RenderingTable } from '../renderingTable/renderingTable.jsx';
import { InputCapturaMerchaintId } from '../inputCapturaMerchantId/inputCapturaMerchaintId.jsx';
import { UseSaveLeads } from '../../../customHooks/useSaveLeads.js';
import './gerarLeads.css'

export function GerarLeads () {
    
    const {url,buscarDados,setUrl,data} = useDados()
    const requestSaveLeads = UseSaveLeads() 
    
    const [mostrarTabela,setMostrarTabela] = useState(false) // componente de tabela começa como false, não aparece em tela
    const [loading,setLoading] = useState(false) // componente de loading não aparece em tela 
    //estados para renderização da tabela
   
    const dispararRenderizacao = async () => {
      setMostrarTabela(true) // função dispararRenderização é instanciada: componente de tabela renderiza
      setLoading(true) // função dispararRenderização é instanciada: componente de loading renderiza
     
      try {
         await buscarDados() // "disparar renderização além de orquestrar 2 estados, é resposável por executar/instanciar a função buscarDados
      
      }catch (error) {
        console.log('erro na função buscar dados')
    
       }finally{
         setLoading(false) // buscar dados foi chamada e executada? então volta o estado de loading pra false (ele some!) a tabela não! ela continua, mas agora com os dados renderizados dentro dela.
    } 

    }
      return (
      <>
       <section>
         <header className='header-GerarLeads'>
           <h1>Gerador de leads Elity Consultoria</h1>
           <h3>Gere seu Lead e inicie conversas agora mesmo através da nossa IA via whatsApp</h3>
         </header>
        
         <main>
           <InputCapturaMerchaintId url= {url} setUrl= {setUrl}/>
           
           <button onClick={dispararRenderizacao}>Buscar Leads</button>
           <button onClick={requestSaveLeads}>Salvar leads</button>
           
           {mostrarTabela && <RenderingTable data= {data} loading= {loading}/>} 
         </main>
        </section> 
      </> 
    )}


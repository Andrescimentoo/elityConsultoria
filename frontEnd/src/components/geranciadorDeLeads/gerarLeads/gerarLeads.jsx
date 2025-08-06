import React, { useState } from 'react'
import { useDados } from "./useDados.js";
import { RenderingTable } from '../renderingTable/renderingTable.jsx';
import { InputCapturaMerchaintId } from '../inputCapturaMerchantId/inputCapturaMerchaintId.jsx';
import './gerarLeads.css'

export function GerarLeads () {
    
    const {url,buscarDados,setUrl,data} = useDados()
    const [mostrarTabela,setMostrarTabela] = useState(false)
    const [loading,setLoading] = useState(false)
   
    const dispararRenderizacao = async () => {
      setMostrarTabela(true)
      setLoading(true)
     
      try {
         await buscarDados()
      
      }catch (error) {
        console.log('erro na função buscar dados')
    
       }finally{
         setLoading(false)
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
           <button onClick={dispararRenderizacao}>Buscar Dados</button>
           {mostrarTabela && <RenderingTable data= {data} loading= {loading}/>} 
         </main>
        </section> 
      </> 
    )}

// começa por aí: que peças você quer mecher? E COMO QUER QUE SE MECHAM?

// nesse caso eu tenho 2 peças que vão fazer meu componente se mecher, o use state operará como um maestro , orquestrando seu movimento
// eu quero que o componente gerar leads inicie na tela mostrando apenas o componente 
// Input/ buttonn/title 
// Depois eu quero que ao ser apertado o botão buscar dados



// transforma em true o estado de loading.   
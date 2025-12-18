import React from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'


export const Home = () => {
  const navigate = useNavigate()
  return (
    
    <>
       <header class="hero">
  <div class="hero-overlay"></div>

  <div class="hero-content">
    <h1>Sistema de gerenciamento e automação de Leads</h1>
    <p class="hero-text">
      O que seria do mundo em Dados?   
      leads são dados! Sem Leads não há clientes. Sem clientes, não existe negócio.  
      Sem negócio, não existe lucro — e sem lucro, não existe sucesso.  
 
      É por isso que este sistema foi criado: um ambiente inteligente, automatizado e estratégico, feito para transformar oportunidades soltas em resultados reais.

      <strong>Aqui você gera, organiza e acompanha seus leads com clareza.  
      Aqui você automatiza conversas, aciona fluxos inteligentes e permite que o sistema trabalhe enquanto você avança. </strong> 
      Aqui cada lead tem rastreabilidade, cada interação vira insight e cada insight vira uma decisão.
    </p>
  </div>
</header>
       <main className='mainHome'>
         <div class="showLeadsHistory card"  onClick={() => navigate('/historicoDeLeads')}>
            <div class="card-content">
                 <h3 class="card-small-title">Tenha aceeso ao seu histórico de todos os Leads consultados por você!</h3>
                 <h1 class="card-big-title">HISTÓRICO DE LEADS</h1>
             </div>
         </div>
        
        <div class="leadsManager card"  onClick={() => navigate('/GeranciarLeads')} >
             <div class="card-content">
                 <h3 class="card-small-title">Encontre, salve e inicie conversas automatizadas com os Leads Através de LLM´s  </h3>
                 <h1 class="card-big-title">GERENCIADOR DE LEADS</h1>
             </div>
         </div>
        </main>
       <footer class="main-footer">
  <div class="footer-container">

    <div class="footer-section">
      <h3>Gerenciador de Leads</h3>
      <p>Automação inteligente para captação, organização e conversão de Leads.</p>
    </div>

    <div class="footer-section">
      <h4>Navegação</h4>
      <ul>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Histórico</a></li>
        <li><a href="#">Gerar Leads</a></li>
      </ul>
    </div>

    <div class="footer-section">
      <h4>Contato</h4>
      <ul>
        <li>Email: 1914andre@gmail.com</li>
        <li>WhatsApp: (11) 95722-2080</li>
      </ul>
    </div>

  </div>

  <div class="footer-bottom">
    <p>© 2025 LeadManager • Todos os direitos reservados</p>
  </div>
</footer>

   
    
    </>
    
    
  )
}



import React from 'react'

export const ExibirHistoricoDeLeads = () => {
  const [datas,setDatas] = useState('') // esse é o estado
  
  return (
    <>
       <div>
        Exibir Histórico de leads 
       </div> 

      <div>
      <ul>
        <li><strong>Nome:</strong> {data.name || 'Nome não encontrado'}</li>
        <li><strong>Telefone:</strong> {data.phoneIf || 'Telefone não encontrado'}</li>
        <li><strong>Cidade:</strong> {data.address?.city || 'Cidade não encontrada'}</li>
        <li><strong>Estado:</strong> {data.address?.state || 'Estado não encontrado'}</li>
        <li><strong>Bairro:</strong> {data.address?.district || 'Bairro não encontrado'}</li>
        <li><strong>Rua:</strong> {data.address?.streetName || 'Rua não encontrada'}</li>
        <li><strong>Número:</strong> {data.address?.streetNumber || 'Número não encontrado'}</li>
        <li><strong>CEP:</strong> {data.address?.zipCode || 'CEP não encontrado'}</li>
      </ul>
    </div>

       <div>
         <button onClick={useShowLeadshistory}>Exibir Histórico de Leads</button>
       </div>
    </>
   
  )
}




// vou ter q criar um webHook separado também por que além da chamada vai ter a renderização dos dados através de estados.




import React from 'react'
import { useShowLeadsHistory } from '../../customHooks/sowLeadsHistory'

export const ExibirHistoricoDeLeads = () => {


  const { data, fetchHistory } = useShowLeadsHistory()


  return (
    <>
      <div>
        Exibir Histórico de leads
      </div>

      <div>
        <ul>
          {data && (
            <>
              <li><strong>Nome:</strong> {data.nome}</li>
              <li><strong>CNPJ:</strong> {data.cnpj}</li>
              <li><strong>Telefone:</strong> {data.numeroDeTelefone}</li>
              <li><strong>Endereço:</strong> {data.nomeDaRua}, {data.numeroDaRua} - {data.distrito}, {data.cidade}/{data.estado}</li>
              <li><strong>CEP:</strong> {data.cep}</li>
            </>
          )}
        </ul>
      </div>

      <div>
        <button onClick={fetchHistory}>Exibir Histórico de Leads</button>
      </div>
    </>

  )
}








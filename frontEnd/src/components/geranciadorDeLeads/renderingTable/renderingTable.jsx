import React from 'react'
import { useDados } from '../gerarLeads/useDados.js'


export const RenderingTable = () => {
   const {data} = useDados()
  return (
    <div>
      <ul>
            <li><strong>CNPJ:</strong> {data.data.documents.CNPJ.value || 'CNPJ não encontrado'}</li>
            <li><strong>Nome:</strong> {data.data.name || 'Nome não encontrado'}</li>
            <li><strong>Telefone:</strong> {data.data.phoneIf || 'Telefone não encontrado'}</li>
            <li><strong>Cidade:</strong> {data.data.address.city || 'Cidade não encontrada'}</li>
            <li><strong>Estado:</strong> {data.data.address.state || 'Estado não encontrado'}</li>
            <li><strong>Bairro:</strong> {data.data.address.district || 'Bairro não encontrado'}</li>
            <li><strong>Rua:</strong> {data.data.address.streetName || 'Rua não encontrada'}</li>
            <li><strong>Número:</strong>{data.data.address.streetNumber || 'Número não encontrado'}</li>
            <li><strong>CEP:</strong> {data.data.address.zipCode || 'CEP não encontrado'}</li>
      </ul>
    </div>
    
  )

  
}






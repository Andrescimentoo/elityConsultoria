import React, { useState } from 'react'



export const RenderingTable = ({ data, loading }) => {
  if (loading) {
    return <p>🔄 Carregando...</p>
  }

  if (!data) {
    return (
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
  )
  }

  
}




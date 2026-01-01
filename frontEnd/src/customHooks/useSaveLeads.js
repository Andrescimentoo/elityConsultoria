import React from 'react'
import { useDados } from './useDados'

export const UseSaveLeads = () => {
  const {name,documents,address,phoneIf} = useDados() // passando por props os dados do Usedados 

  const requestSaveLeads = async () => {
    try {
      const reqSalvarLeads = await fetch('https://elityconsultoria.onrender.com/endpointSaveLeads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          documents,
          address,
          phoneIf
        })
      })

      if (!reqSalvarLeads.ok) {
        throw new Error('Erro ao salvar no servidor')
      }

    } catch (error) {
      console.log('Erro ao salvar: ' + error.message)
    }
  }

  return (
    requestSaveLeads
  )
}

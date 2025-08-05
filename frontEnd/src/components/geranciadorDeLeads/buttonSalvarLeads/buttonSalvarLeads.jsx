import React from 'react'
import { useDados } from '../fazerConsultas/useDados.js'

export const ButtonSalvarLeads = () => {
  const { name, documents, address, phoneIf } = useDados()

  const handleClick = async () => {
    try {
      const reqParaBackEnd = await fetch('/api/salvar-consulta', {
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

      if (!reqParaBackEnd.ok) {
        throw new Error('Erro ao salvar no servidor')
      }

      alert('Consulta salva com sucesso!')
    } catch (error) {
      alert('Erro ao salvar: ' + error.message)
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Salvar Consulta</button>
    </div>
  )
}

// segurança , validação e consistencia 
// por exemplo, como impedir que o usuario salve 2 vezes os mesmos dados consultados, 
// como mostrar de uma maneira clara e descritiva que a ação não pode ser concluida? 
// como garantir o máximo de segurança e consistencia nesse armazenamento de dados
// como dar uma base de dados pra cada usuario cadastrado?
// por exemplo, esse projeto está em produção, imagina se 2 users fazem uma consulta e salvam
// e aí os dados vão pra uma mesma dataBase e mistura as consultas ede multiplos usuarios?
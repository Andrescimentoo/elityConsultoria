// src/customHooks/useShowLeadsHistory.js
import { useState, useCallback } from 'react'

export function useShowLeadsHistory() {
 
  const [data, setData] = useState(null)      // dados que vierem do back
  const [loading, setLoading] = useState(false) // Como o estado de loaing é usado? ()
 

  const fetchHistory = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch('https://elityconsultoria.onrender.com/findManyLeads', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Falha na solicitação de obtenção do histórico de leads!')
      }

      const json = await response.json()   // <- aqui vem o JSON do back
      setData(json)                        // <- joga no estado do hook
    } catch (err) {
      console.error(err)
      setError(err)
    } finally {
      setLoading(false)
    }
  }, [])

  // O hook SÓ entrega dados e funções:
  return {
    data,        // dados pra renderizar
    loading,     // opcional: pra spinner
    error,       // opcional: pra mensagem de erro
    fetchHistory // função pra chamar no onClick
  }
}


// Tem qe ter uma cabeça forte, mas pensa que lá no componente de rendeerizar tabela, quando o cliente clicar no botão
// o react vai chamar esse código, então AQUI é que temos que pensar em como o nosso cmponente vai se comportar e em como o fluxo de daddos flui



// esqueçe o componente final caramba ele só existe pra que o cliente possa interagir com ele AQUI. Estados, funções, eventos TUDO vai ser escrito aqui.
//lá no jsx SÓ VAI !renderizar!
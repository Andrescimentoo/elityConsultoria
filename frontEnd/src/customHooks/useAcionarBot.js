import { useDados } from "./useDados.js"

export function useAcionarBot () {
 const {data} = useDados()
const acionarBot = async () => {
 try {
    const numeroDeTelefone = data.phoneIf
    const requestBot = await fetch(`https://elityconsultoria.onrender.com/phoneIf${numeroDeTelefone}`,{
        method: "POST",
        headers: { Accept: "application/json" }
    })
    if(!requestBot.ok){
         throw new Error("erro, dados inválidos");
            
    }
} catch (error) {
     console.log("Erro na requisição:", error);
    
}}
return acionarBot
}

// vamos alinhar o que precisa ser feito e compreender o código a fim de aumentar a proeficiencia no back-end
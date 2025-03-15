import React, { useState } from "react";

// Função para extrair o merchantId da URL
function extrairMerchantId(url) {
  const regex = /(\w{8}-\w{4}-\w{4}-\w{4}-\w{12})/; // Regex para encontrar o UUID (merchantId)
  const match = url.match(regex);
  return match ? match[0] : null;
}

// estados que gerenciam o input
export function Input() {
  const [url, setUrl] = useState("");  // Para armazenar a URL
  const [merchantId, setMerchantId] = useState("");  // Para armazenar o merchantId extraído
  const [cnpj, setCnpj] = useState("");  // Para armazenar o CNPJ da resposta
// função de requsição para o back-end
  async function buscarDados() {
    try {
      // Extraímos o merchantId da URL
      const id = extrairMerchantId(url);
     
      if (!id) throw new Error("Merchant ID inválido");
      setMerchantId(id);  // Armazenamos o merchantId no estado

      // Requisição para o back-end
      const response = await fetch(`/myApiBackEnd/${id}`); // Enviamos para o back-end
      if (!response.ok) throw new Error("Erro ao buscar dados");

      // Obtemos a resposta da API (no caso, o CNPJ)
      const data = await response.json();
      setCnpj(data.CNPJ);  // Armazenamos o CNPJ no estado

    } catch (error) {
      console.log("Erro na requisição:", error);
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Digite a URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)} // Atualiza a URL enquanto digita
      />
      <button onClick={buscarDados}>Buscar Dados</button>

      {merchantId && (
        <div>
          <p><strong>Merchant ID:</strong> {merchantId}</p>
          <p><strong>CNPJ:</strong> {cnpj || "CNPJ não encontrado..."}</p>
        </div>
      )}
    </div>
  );
}
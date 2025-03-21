import React, { useState } from "react";

// Função para extrair o merchantId da URL
function extrairMerchantId(url) {
  const regex = /(\w{8}-\w{4}-\w{4}-\w{4}-\w{12})/; // Regex para encontrar o UUID (merchantId)
  const match = url.match(regex);
  return match ? match[0] : null;
}

// estados que gerenciam o input
export function Input() {
  const [url, setUrl] = useState(""); // Para armazenar a URL
  const [merchantId, setMerchantId] = useState(""); // Para armazenar o merchantId extraído
  const [cnpj, setCnpj] = useState(""); // Para armazenar o CNPJ da resposta
  // função de requsição para o back-end
  async function buscarDados() {
    try {
      // Extraímos o merchantId da URL
      const id = extrairMerchantId(url);

      if (!id) throw new Error("Merchant ID inválido");
      setMerchantId(id); // Armazenamos o merchantId no estado

    const response = await fetch(`http://localhost:3000/myApiBackEnd?merchantId=${id}`, {
      method: "GET", // Agora usando GET
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) throw new Error("Erro ao buscar dados");

    const data = await response.json();

    if (!data.cnpj) throw new Error("CNPJ não encontrado na resposta");

    setCnpj(data.cnpj);
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
          <p>
            <strong>Merchant ID:</strong> {merchantId}
          </p>
          <p>
            <strong>CNPJ:</strong> {cnpj || "CNPJ não encontrado..."}
          </p>
        </div>
      )}
    </div>
  );
}

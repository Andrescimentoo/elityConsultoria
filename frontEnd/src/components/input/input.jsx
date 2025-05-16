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
  const [cnpj, setCnpj] = useState("");
  const [name, setName] = useState(""); // Para armazenar o nome
  const [phoneIf, setPhoneIf] = useState("");
  const [adress, setAddress] = useState("");

  // função de requisição para o back-end
  async function buscarDados() {
    try {
      // Extraímos o merchantId da URL
      const id = extrairMerchantId(url);

      if (!id) throw new Error("Merchant ID inválido"); // se não for um merchant id válido envia um erro
      setMerchantId(id); // Armazenamos o merchantId no estado

     
      const response = await fetch(`https://elityconsultoria-1.onrender.com/myApiBackEnd?merchantId=${id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) throw new Error("Erro ao buscar dados");

      const data = await response.json();

      if (!data.phoneIf && data.address)
        throw new Error("CNPJ, nome e telefone de contato não encontrados na resposta");

      setCnpj(data.cnpj);
      setName(data.name);
      setPhoneIf(data.phoneIf);
      setAddress(data.address);
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
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={buscarDados}>Buscar Dados</button>

      {merchantId && (
        <div className="interface_de_dados">
          <ul>
            <li>
              <p><strong>CNPJ: </strong>{cnpj || "CNPJ não encontrado..."}</p>
            </li>
            <li>
              <p><strong>Nome: </strong>{name || "Nome não encontrado"}</p>
            </li>
            <li>
              <p><strong>Telefone de contato: </strong>{phoneIf || "Telefone de contato não encontrado"}</p>
            </li>
            <li>
              <p><strong>Cidade: </strong>{adress.city || "Cidade não encontrada"}</p>
            </li>
            <li>
              <p><strong>Estado: </strong>{adress.state || "Estado não encontrado"}</p>
            </li>
            <li>
              <p><strong>Distrito: </strong>{adress.district || "Distrito não encontrado"}</p>
            </li>
            <li>
              <p><strong>Rua: </strong>{adress.street || "Rua não encontrada"}</p>
            </li>
            <li>
              <p><strong>Número: </strong>{adress.number || "Número não encontrado"}</p>
            </li>
            <li>
              <p><strong>CEP: </strong>{adress.zip || "CEP não encontrado"}</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

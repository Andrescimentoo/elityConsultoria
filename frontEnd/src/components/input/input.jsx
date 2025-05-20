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
  const [documents, setDocuments] = useState("");
  const [name, setName] = useState(""); // Para armazenar o nome
  const [phoneIf, setPhoneIf] = useState("");
  const [address, setAddress] = useState("");

  // função de requisição para o back-end
  async function buscarDados() {
    try {
      // Extraímos o merchantId da URL
      const id = extrairMerchantId(url);

      if (!id) throw new Error("Merchant ID inválido"); // se não for um merchant id válido envia um erro
      setMerchantId(id); // Armazenamos o merchantId no estado

     
      const response = await fetch(`https://elityconsultoria.onrender.com/myApibackEnd/merchantId=${id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) throw new Error("Erro ao buscar dados");

      const data = await response.json();

      if (!data.phoneIf && !data.address)
        throw new Error("CNPJ, nome e telefone de contato não encontrados na resposta");

      setDocuments(data.documents.CNPJ.value);
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
              <p><strong>CNPJ: </strong>{documents || "CNPJ não encontrado..."}</p>
            </li>
            <li>
              <p><strong>Nome: </strong>{name || "Nome não encontrado"}</p>
            </li>
            <li>
              <p><strong>Telefone de contato: </strong>{phoneIf || "Telefone de contato não encontrado"}</p>
            </li>
            <li>
              <p><strong>Cidade: </strong>{address.city || "Cidade não encontrada"}</p>
            </li>
            <li>
              <p><strong>Estado: </strong>{address.state || "Estado não encontrado"}</p>
            </li>
            <li>
              <p><strong>Distrito: </strong>{address.district || "Distrito não encontrado"}</p>
            </li>
            <li>
              <p><strong>Rua: </strong>{address.streetName || "Rua não encontrada"}</p>
            </li>
            <li>
              <p><strong>Número: </strong>{address.streetNumber || "Número não encontrado"}</p>
            </li>
            <li>
              <p><strong>CEP: </strong>{address.zipCode || "CEP não encontrado"}</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

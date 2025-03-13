const url = "https://marketplace.ifood.com.br/v1/merchant-info/graphql?latitude=-23.517678&longitude=-46.475184&channel=IFOOD";

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    query: `
      query {
        merchantInfo {
          cnpj
          phoneNumber
        }
      }  
    `
    // nao me retornou nada por que nessa query, nao passei o merchantId  
  })
})
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`Erro na resposta da API. Status: ${response.status}`);
    }
  })
  .then(data => console.log("Dados recebidos:", data))
  .catch(error => console.log("Erro ao acessar a API:", error.message));

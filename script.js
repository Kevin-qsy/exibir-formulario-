document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault(); // Impede o recarregamento da página

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  processarDados((n, e, m) => mostrarResposta(n, e, m), nome, email, mensagem);
});

function processarDados(callback, nome, email, mensagem) {
  callback(nome, email, mensagem); // Executa o callback com os dados
}

function mostrarResposta(nome, email, mensagem) {
  const resposta = document.getElementById("resposta");
  resposta.innerHTML = `
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>E-mail:</strong> ${email}</p>
    <p><strong>Mensagem:</strong> ${mensagem}</p>
  `;
}

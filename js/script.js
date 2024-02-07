//efeito do botão voltar ao Topo
function topo() {
  scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

//Validação de Login
function login() {
  const logado = 0;
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  if (usuario == "admin" && senha == "123456") {
    location = "index.html";
    logado = 1;
  }

  if (logado == 0) {
    alert("Acesso Negado.\nDados incorretos");
  }
}

//Ativar alert no botão cadastrar
function cadastro() {
  alert("Cadastrado com sucesso!");
  location.href = "index.html";
}

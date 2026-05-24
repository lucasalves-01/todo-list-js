let botao = document.querySelector("#login");

botao.addEventListener("click", function () {

  let email = document.querySelector("#email").value;
  let senha = document.querySelector("#senha").value;
  let mensagem = document.querySelector("#mensagem");

  if (email === "admin@email.com" && senha === "1234") {
    mensagem.innerText = "Login realizado com sucesso!";
    localStorage.setItem("usuario", email);
  } else {
    mensagem.innerText = "Email ou senha incorretos!";
  }

});

let usuario = localStorage.getItem("usuario");

if (usuario) {
  document.querySelector("#mensagem").innerText =
    "Você já está logado como: " + usuario;
}

let logout = document.querySelector("#logout");

if (logout) {
  logout.addEventListener("click", function () {
    localStorage.removeItem("usuario");
    location.reload();
  });
}
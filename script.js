function modo(){
    document.body.classList.toggle("darkmode");
}

const botoesAbrir = document.querySelectorAll(".abrirModal");
const botoesFechar = document.querySelectorAll(".fechar");

// Abre o modal correto com base no atributo data-modal
botoesAbrir.forEach(botao => {
  botao.addEventListener("click", () => {
    const idModal = botao.getAttribute("data-modal");
    const modal = document.getElementById(idModal);
    modal.style.display = "flex";
  });
});

// Fecha o modal ao clicar no X
botoesFechar.forEach(botao => {
  botao.addEventListener("click", () => {
    botao.closest(".modal").style.display = "none";
  });
});

// Fecha clicando fora do modal
window.addEventListener("click", event => {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
});


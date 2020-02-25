// Declarando váriaveis
const btnContact = document.querySelector(".jl-btn-contact");

// Page preloader
window.addEventListener("load", function() {
  const pagePreloader = this.document.querySelector(".jl-preloader");
  pagePreloader.classList.add("jl-fade-out");
});

// Abrir e fechar botão de contato
window.addEventListener("load", function() {
  var pagePreloder = document.querySelector(".jl-preloader");
  pagePreloder.classList.add("jl-fade-out");

  setTimeout(function() {
    pagePreloder.style.display = "none";
  }, 2000);
});

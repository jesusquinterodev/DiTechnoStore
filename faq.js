// Acordeón de Preguntas frecuentes.
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

function openFaqTab() {
  const urlOpenTab = document.querySelector(window.location.hash);
  urlOpenTab.classList.toggle("active");
}

if (window.location.hash) {
  openFaqTab(); //Hace que se abra automáticamente un tab dependiendo del link externo seleccionado.
}

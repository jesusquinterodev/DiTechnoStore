// Acordeón de Preguntas frecuentes.
const faqs = document.querySelectorAll(".category_item");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.addClass('ct_item-active');
  });
});

function openFaqTab() {
  const urlOpenTab = document.querySelector(window.location.hash);
  urlOpenTab.addClass('ct_item-active');
}

if (window.location.hash) {
  openFaqTab(); //Hace que se abra automáticamente un tab dependiendo del link externo seleccionado.
}

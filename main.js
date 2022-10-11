// Formulario de Acceso y registro
const btnSignUp = document.querySelector(".the-sign-up-button");
const btnLogin = document.querySelector(".login-button");
const signUpContainer = document.querySelector(".sign-up");
const loginContainer = document.querySelector(".login");

document.addEventListener("click", (e) => {
  if (e.target === btnSignUp || e.target === btnLogin) {
    e.preventDefault();
    signUpContainer.classList.toggle("clicked");
    loginContainer.classList.toggle("clicked");
  }
});

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

openFaqTab(); //Hace que se abra automáticamente un tab dependiendo del link externo seleccionado.

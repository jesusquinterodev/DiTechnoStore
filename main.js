// Formulario de Acceso y registro
const btnSignUp = document.querySelector(".the-sign-up-button");
const btnLogin = document.querySelector(".login-button");
const signUpContainer = document.querySelector(".sign-up");
const loginContainer = document.querySelector(".login");

document.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target === btnSignUp || e.target === btnLogin) {
    signUpContainer.classList.toggle("clicked");
    loginContainer.classList.toggle("clicked");
  }
});

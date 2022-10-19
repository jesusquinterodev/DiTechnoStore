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

// Lógica del formulario de inicio de sesión y registro.

const loginForm = document.querySelector("#login-form"); //formulario
const signUpForm = document.querySelector("#sign-up-form"); //formulario
const emailLoginInput = document.querySelector("#email-login"); //input
const passLoginInput = document.querySelector("#pass-login"); //input
const fNameSignUpInput = document.querySelector("#name-signup"); //input
const lNameSignUpInput = document.querySelector("#lname-signup"); //input
const emailSignUpInput = document.querySelector("#email-signup"); //input
const passSignUpInput = document.querySelector("#pass-signup"); //input
const loginButton = document.querySelector("#login-button"); //botón
const signUpButton = document.querySelector("#sign-up-button"); //botón
const warningSignUp = document.querySelector("#warning-signup"); //texto de advertencias
const warningLogin = document.querySelector("#warning-login"); //texto de advertencias
const isLogged = document.querySelector("#login-title"); //iniciar sesión cambia en el nav por el nombre.
const containerSignOut = document.querySelector("#container-sign-out"); //Cierre de sesión.

signUpForm.addEventListener("submit", signUpValidation);
loginForm.addEventListener("submit", loginValidation);

function signUpValidation(e) {
  e.preventDefault();
  let fName = fNameSignUpInput.value;
  let lName = lNameSignUpInput.value;
  let email = emailSignUpInput.value;
  let password = passSignUpInput.value;
  let warnings = "";
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
  let regexName = /^[A-Za-z\s]*$/;
  let getIn = false;
  warningSignUp.style.color = "#790513";
  warningSignUp.style.fontSize = "0.9rem";
  warningSignUp.innerHTML = "";
  if (
    fName.length === 0 ||
    fName === "" ||
    fName === null ||
    !regexName.test(fName)
  ) {
    warnings +=
      '<i class="fa-solid fa-circle-exclamation"></i>  El nombre no es válido <br>';
    getIn = true;
  }
  if (
    lName.length === 0 ||
    lName === "" ||
    lName === null ||
    !regexName.test(lName)
  ) {
    warnings +=
      '<i class="fa-solid fa-circle-exclamation"></i>  El apellido no es válido <br>';
    getIn = true;
  }
  if (!regexEmail.test(email)) {
    warnings +=
      '<i class="fa-solid fa-circle-exclamation"></i>  El email no es válido <br>';
    getIn = true;
  }
  if (!regexPassword.test(password)) {
    warnings +=
      '<i class="fa-solid fa-circle-exclamation"></i>  La contrasena debe contener entre 8 y 20 caracteres, al menos una minúscula, una mayúscula y un número';
    getIn = true;
  }
  if (getIn) {
    warningSignUp.innerHTML = warnings;
  } else {
    let success =
      '<i class="fa-solid fa-circle-check"></i>  Registrado con éxito <br> Ya tienes una cuenta, inicia sesión!';
    warningSignUp.style.color = "#3CCF4E";
    warningSignUp.style.fontSize = "1.1rem";
    warningSignUp.innerHTML = success;

    let newUser = {
      fName: fName,
      lName: lName,
      email: email,
      password: password,
    };

    let jsonUser = JSON.stringify(newUser);

    localStorage.setItem(email, jsonUser);

    signUpForm.reset();
  }
}

function loginValidation(e) {
  e.preventDefault();
  let email = emailLoginInput.value;
  let password = passLoginInput.value;
  let user = localStorage.getItem(email);
  let userData = JSON.parse(user);

  if (userData == null) {
    warningLogin.innerHTML = "Usuario no encontrado";
  } else if (email == userData.email && password == userData.password) {
    isLogged.innerHTML = userData.fName;
    containerSignOut.classList.replace(
      "container-form",
      "container-form-sign-out"
    );
    loginForm.innerHTML =
      '<a href="" onclick="location.reload()" class="sign-out">Cerrar sesión</a>';
  } else {
    warningLogin.innerHTML = "Contrasena incorrecta";
  }
}

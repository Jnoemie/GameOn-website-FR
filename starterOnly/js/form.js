function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") 
  {
    x.className += " responsive";
  } 
  else 
  {
    x.className = "topnav";
  }
}
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const form = document.getElementById("form");
const closeBtnConfirm = document.getElementById("closeBtnConfirm");
const confirmationMsg = document.getElementById("confirmationMsg");
const closeBtn = document.querySelector(".close");
const submitBtn = document.querySelector(".btn-submit");
const content = document.getElementById("content");
const heroSection = document.querySelector(".hero-section");

// constante pour le formulaire
const firstName = document.getElementById("first");
const firstNameError = document.getElementById("firstError");
const lastName = document.getElementById("last");
const lastNameError = document.getElementById("lastError");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const birthdate = document.getElementById("birthdate");
const birthdateError = document.getElementById("birthdateError");
const quantity = document.getElementById("quantity");
const quantityError = document.getElementById("quantityError");
const checkLocation = document.getElementsByName("location");
const locationError = document.getElementById("locationError");
const conditions = document.getElementById("checkbox1");
const conditionsError = document.getElementById("conditionsError");

let mediaQueryMobile = window.matchMedia("(max-width: 540px)");
//fonction pour ouvrir la modale
modalBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    modalbg.style.display = "block";
  })
);

// fonction pour fermer la modale
closeBtn.addEventListener("click", () => {
  modalbg.style.display = "none";
});

// bouton close and confirmation non visible
closeBtnConfirm.style.display = "none";
confirmationMsg.style.display = "none";

let regexName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/;
// fonction qui verifie le respact de regex que la case soit remplit et contient plus de deux caracteres si c'est pas la cas un maessage d'erreur s'affiche
function validFirstName() {
  if (regexName.test(firstName.value)) 
  {
    firstNameError.style.display = "none";
    firstName.style = "default";
    return true;
  } 
  else 
  {
    firstNameError.textContent = "Veuillez entrer votre prénom ";
    firstNameError.style.color = "red";
    firstNameError.style.fontSize = "10px";
    firstName.style.borderColor = "red";
    firstName.style.borderWidth = "2px";
    return false;
  }
}
function validLastName() {
  if (regexName.test(lastName.value)) 
  {
    lastNameError.style.display = "none";
    lastName.style = "default";
    return true;
  } 
  else {
    lastNameError.textContent = "Veuillez entrer votre nom";
    lastNameError.style.color = "red";
    lastNameError.style.fontSize = "10px";
    lastName.style.borderColor = "red";
    lastName.style.borderWidth = "2px";
    return false;
  }
}
function validEmail() {
  // si l'email de coorespond pas au regax alors erreur
  let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (regexEmail.test(email.value)) 
  {
    emailError.style.display = "none";
    email.style = "default";
    return true;
  } 
  else
  {
    emailError.textContent = "Veuillez renseigner votre adresse mail";
    emailError.style.color = "red";
    emailError.style.fontSize = "10px";
    email.style.borderColor = "red";
    email.style.borderWidth = "2px";
    return false;
  }
}
function validBirthday() {
  let birthdateRegex = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;

  if (birthdateRegex.test(birthdate.value)) {
    birthdateError.style.display = "none";
    birthdate.style = "default";
    return true;
  } else {
    birthdateError.textContent = "Veuillez entrer votre date de naissance";
    birthdateError.style.color = "red";
    birthdateError.style.fontSize = "10px";
    birthdate.style.borderColor = "red";
    birthdate.style.borderWidth = "2px";
    return false;
  }
}

function validQuantity() {
  if (quantity.value >= 0 && parseInt(quantity.value) == quantity.value) {
    quantityError.style.display = "none";
    quantity.style = "default";
    return true;
  } else {
    quantityError.textContent = "Veuillez renseigner ce champ";
    quantityError.style.color = "red";
    quantityError.style.fontSize = "10px";
    quantity.style.borderColor = "red";
    quantity.style.borderWidth = "2px";
    return false;
  }
}
function validLocation() {
  if (
    checkLocation[1].checked ||
    checkLocation[2].checked ||
    checkLocation[3].checked ||
    checkLocation[4].checked ||
    checkLocation[5].checked
  ) {
    locationError.style.display = "none";
    checkLocation.style = "default";

    return true;
  } else {
    locationError.textContent = "Veuillez choisir une option";
    locationError.style.color = "red";
    locationError.style.fontSize = "10px";
    return false;
  }
}

function validCondition() {
  if (conditions.checked) {
    conditionsError.style.display = "none";
    conditions.style = "default";
    return true;
  } else {
    conditionsError.textContent =
      "Veuillez vérifier que vous avez accepté les termes et conditions";
    conditionsError.style.color = "red";
    conditionsError.style.fontSize = "10px";
    conditions.style.borderColor = "red";
    conditions.style.borderWidth = "2px";
    return false;
  }
}

function validate(event) {
  event.preventDefault();

  if (validFirstName() && validLastName() && validEmail() && validBirthday() && validQuantity() && validLocation() && validCondition()) 
  {
    form.style.display = "none";
    confirmationMsg.style.fontSize = "25px";
    confirmationMsg.style.textAlign = "center";
    closeBtnConfirm.style.display = "block";
    submitBtn.style.display = "none";
    confirmationMsg.style.display = "flex";
    content.style.height = "750px";
    closeBtnConfirm.addEventListener("click", closeModal);
    return true;
  }
  content.style.height = "800px";
}

// listening submit event on form element so function validate is run
form.addEventListener("submit", validate);

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
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

let isValidForm = false;

let regexName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/;
// fonction qui verifie le respact de regex que la case soit remplit et contient plus de deux caracteres si c'est pas la cas un maessage d'erreur s'affiche
function validFirstName() {
  if (regexName.exec(firstName.value) === null || firstName.length < 2) {
    firstNameError.textContent = "Veuillez entrer votre prénom ";
    firstNameError.style.color = "red";
    firstNameError.style.fontSize = "15px";
    firstName.style.borderColor = "red";
    firstName.style.borderWidth = "2px";
    return isValidForm === false;
  } else {
    firstNameError.style.display = "none";
    firstName.style = "default";
  }
}
function validLastName() {
  if (regexName.exec(lastName.value) === null || lastName.length < 2) {
    lastNameError.textContent = "Veuillez entrer votre nom";
    lastNameError.style.color = "red";
    lastNameError.style.fontSize = "10px";
    lastName.style.borderColor = "red";
    lastName.style.borderWidth = "2px";
    return isValidForm === false;
  } else {
    lastNameError.style.display = "none";
    lastName.style = "default";
  }
}
function validEmail() {
  // si l'email de coorespond pas au regax alors erreur
  let regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if (regexEmail.exec(email.value) === null) {
    emailError.textContent = "Veuillez renseigner votre adresse mail";
    emailError.style.color = "red";
    emailError.style.fontSize = "10px";
    email.style.borderColor = "red";
    email.style.borderWidth = "2px";
    return isValidForm === false;
  } else {
    emailError.style.display = "none";
    email.style = "default";
  }
}
function validBirthday() {
  let birthdateRegex =
    /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19[0-9][0-9]|20[0-2][0-9])$/;

  if (!birthdate.value) {
    birthdateError.textContent = "Veuillez entrer votre date de naissance";
    birthdateError.style.color = "red";
    birthdateError.style.fontSize = "10px";
    birthdate.style.borderColor = "red";
    birthdate.style.borderWidth = "2px";
    return isValidForm === false;
  }
  birthdateError.style.display = "none";
  birthdate.style = "default";
}
function quantityControle() {
    if(quantity.value === "" || isNaN(quantity.value)) {
    quantityError.textContent = "Veuillez renseigner ce champ";
    quantityError.style.color = "red";
    quantityError.style.fontSize = "10px";
    quantity.style.borderColor = "red";
    quantity.style.borderWidth = "2px";
    return isValidForm === false;
  } else {
    quantityError.style.display = "none";
    quantity.style = "default";
  }
}
function locationControl() {

    for(let i = 0; i < checkLocation.length; i++) {

      if(checkLocation[i].checked) {
        
       locationError.textContent = "Veuillez choisir une option";
       locationError.style.color = "red";
        locationError.style.fontSize = "10px";
       return isValidForm === false;
    } 
      else {
    locationError.style.display = "none";
       checkLocation.style = "default";
     }
 }
}


// fonction d'excution des validation
function validate(event) {
  event.preventDefault();

  validFirstName();
  validLastName();
  validEmail();
  validBirthday();
  quantityControle();
    locationControl();

  if (isValidForm === true) {
    form.style.display = "none";
    confirmationMsg.style.fontSize = "30px";
    confirmationMsg.style.textAlign = "center";
    closeBtnConfirm.style.display = "block";
    submitBtn.style.display = "none";
    confirmationMsg.style.display = "flex";
    content.style.height = "750px";
    closeBtnConfirm.addEventListener("click", closeModal);
    return true;
  }
  
}

// ecoute de l'evenement pour que les validation soit executé
form.addEventListener("submit", validate);

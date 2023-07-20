function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const submitBtn = document.querySelector(".btn-submit");
const form = document.getElementById("validation-form");
const closeBtnRed = document.getElementById("closeBtnRed");
const confirmationMsg = document.getElementById("confirmationMsg");
const content = document.getElementById("content");
const heroSection = document.querySelector('.hero-section');

// const pour le formulaire et les erreur 

const firstname = document.getElementById("first");
const firstnameError = document.getElementById("firstError");
const lastname = document.getElementById("last");
const lastnameError = document.getElementById("lastError");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const birthdate = document.getElementById("birthdate");
const birthdateError = document.getElementById("birthdateError");
const quantity = document.getElementById("quantity");
const quantityError = document.getElementById("quantityError");
const location2 = document.getElementsByName("location");
const locationError = document.getElementById("locationError");
const conditions = document.getElementById("checkbox1");
const conditionsError = document.getElementById("conditionsError");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}



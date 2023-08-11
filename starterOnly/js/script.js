function editNav() {
  const responsiveNav = document.getElementById("myTopnav");
  if (responsiveNav.className === "topnav") {
    responsiveNav.className += "responsive";
  } else {
    responsiveNav.className = "topnav";
  }
}

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");

const submitBtn = document.querySelector(".btn-submit");
const modalClose = document.getElementById("validationMsg");
const closeBtn = document.querySelector(".close");
const closeBtnConfirm = document.getElementById("closeBtnConfirm");

const form = document.getElementById("form");

modalClose.style.display = "none";

// launch modal event
modalBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    modalbg.style.display = "block";
  })
);

function closeModal() {
  modalClose.style.display = "none";
  modalbg.style.display = "none";
}

// fonction pour fermer la modale
closeBtn.addEventListener("click", () => {
  modalbg.style.display = "none";
});

function successSubmit() {
  form.style.display = "none";
  submitBtn.style.display = "none";
  modalClose.style.display = "block";
  closeBtnConfirm.style.display = "block";
}

function showError(field, type, errorMsg) {
  //let errorField = field.parentNode.querySelector(".error"); // verification si déja un element existant
  if (!errorField) {
    errorField = document.createElement("p");
    errorField.className = "error";
    field.parentNode.appendChild(errorField);
  }
  errorField.textContent = errorMsg;
}

function hideError(field, type, errorMsg) {
  let errorFields = field.parentNode.querySelectorAll(".error");
  errorFields.forEach((errorField) => errorField.remove());
}

let formFields = [
  {
    field: document.getElementById("first"),
    type: "text",
    errorMsg: "Veuillez saisir votre prénom",
  },
  {
    field: document.getElementById("last"),
    type: "text",
    errorMsg: "Veuillez saisir votre nom",
  },
  {
    field: document.getElementById("email"),
    type: "email",
    errorMsg: "Veuillez entrer votre email",
  },
  {
    field: document.getElementById("birthdate"),
    type: "date",
    errorMsg: "Veuillez entrer votre date de naissance",
  },
  {
    field: document.getElementById("quantity"),
    type: "number",
    errorMsg: "Veuillez renseigner ce champ",
  },
  {
    field: document.getElementsByName("location"),
    type: "radio",
    errorMsg: " Veuillez choisir une Ville ",
  },
  {
    field: document.getElementById("checkbox1"),
    type: "checkbox",
    errorMsg: "Veuillez accepter les CGU",
  },
];

function validateFields() {
  let isValid = true;

  for (const fieldObj of formFields) {
    const field = fieldObj.field;
    const fieldType = fieldObj.type;
    const errorMsg = fieldObj.errorMsg;

    switch (fieldType) {
      case "text":
        const regexName =
          /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/;
        if (
          !regexName.test(field.value) ||
          field.value.length < field.minlength ||
          field.value == ""
        ) {
          showError(field, fieldType, errorMsg);
          isValid = false;
        } else {
          hideError(field, fieldType, errorMsg);
        }
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
          showError(field, fieldType, errorMsg);
          isValid = false;
        } else {
          hideError(field, fieldType, errorMsg);
        }
        break;
      case "date":
        const birthdateRegex =
          /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;
        if (!birthdateRegex.test(field.value)) {
          showError(field, fieldType, errorMsg);
          isValid = false;
        } else {
          hideError(field, fieldType, errorMsg);
        }

        break;
      case "number":
        if (field.value == "" || null) {
          showError(field, fieldType, errorMsg);
          isValid = false;
        } else {
          hideError(field, fieldType, errorMsg);
        }
        break;
      case "radio":
        let radioSelected = false;
        field.forEach((radio) => {
          if (radio.checked) {
            radioSelected = true;
          }
        });
        if (!radioSelected) {
          showError(field[0], fieldType, errorMsg); // Affichez le message d'erreur pour le premier bouton radio
          isValid = false;
        } else {
          hideError(field[0], fieldType, errorMsg);
        }
        break;

      case "checkbox":
        if (!field.checked) {
          showError(field, fieldType, errorMsg);
          isValid = false;
        } else {
          hideError(field, fieldType, errorMsg);
        }
        break;
      default:
        break;
    }
  }

  return isValid;
}

// Gestionnaire d'événements pour la soumission du formulaire
function validate(event) {
  event.preventDefault(); // Empêche l'envoi du formulaire par défaut

  if (validateFields()) {
    successSubmit();
  }
}

closeBtnConfirm.addEventListener("click", closeModal);

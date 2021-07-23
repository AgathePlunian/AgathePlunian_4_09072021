//ERROR MESSAGES 
const errorMessages = {
  names : "Ce champs ne peut pas être vide et doit comporter au moins 2 lettres",
  email : "L'adresse e-mail n'est pas valide",
  emailEmpty : "Veuillez renseigner votre adresse e-mail",
  quantityEmpty : "Veuillez remplir ce champ",
  quantityNaN : "Ce champ doit être en chiffre",
  location : "Veuillez sélectionner une ville",
  birthdate : "Veuillez renseigner votre date de naissance",
  birthdateInvalid : "Veuillez renseigner une date de naissance valide",
  conditionUtilisation : "Vous devez accepter les conditions d'utilisations",
};


//SET ERROR MESSAGE
function setError(el, error) {
  let target;
  if(NodeList.prototype.isPrototypeOf(el)) {
    target = el[0].parentNode;
  }
  else {
    target = el.parentNode;
  }
  target.setAttribute("data-error", error);
  target.setAttribute("data-error-visible", true);
}

//REMOVE ERROR MESSAGE
function removeError(el) {
  let target;
  if(NodeList.prototype.isPrototypeOf(el)) {
    target = el[0].parentNode;
  }
  else {
    target = el.parentNode;
  }
  target.removeAttribute("data-error",);
  target.removeAttribute("data-error-visible");
}

//FIRSTNAME AND LASTNAME VALIDATION 
function validateNames (el) {
  if(el.value == 0 || el.value.length <= 2) {

    setError(el, errorMessages.names);
    return false;
  }
  else {     
    removeError(el);
    return true;
  }
}

//EMAIL VALIDTION
function validateEmail(email) {
  let mailformat = /^\S+@\S+\.\S+$/;
  if(!email.value.match(mailformat) && email.value!= 0 ) {  
    setError(email, errorMessages.email);
    return false;
  }
  else if(email.value == 0) {
    setError(email, errorMessages.emailEmpty);
    return false;
  }
  else {     
    removeError(email);
    return true;
  } 
}

//BIRTHDATE IS EMPTY VALIDATION
function validateBirthdate(date) {
  if(date.value == "") {
    setError(date, errorMessages.birthdate);
    return false;
  }
 else {
  let birthdate = new Date(date.value);
	let today = new Date();
		if (
			birthdate.getDate() >= today.getDate() &&
			birthdate.getMonth() == today.getMonth() &&
			birthdate.getFullYear() == today.getFullYear()
		) {
      setError(date, errorMessages.birthdateInvalid);
      return false;
    }
    else {
      removeError(date);
      return true;
    }
  }
}

//QUANTITY VALUE VALIDATION
function validateQuantity(quantity) {
   let regex = /^[0-9]+$/;
  
  if(quantity.value == 0) {  
    setError(quantity, errorMessages.quantityEmpty);
    return false;
  }  
 
  if(!quantity.value.match(regex)) {
    setError(quantity, errorMessages.quantityNaN);
    return false;
  }
  else {
    removeError(quantity);
    return true;
  }
}

//CITIES RADIO BUTTON VALIDATION
function validateLocation (radioChecked){
  
  for (let radio of radioChecked) {
    if (radio.checked) {
      removeError(radioChecked);
      return true;
    }
  }
  setError(radioChecked, errorMessages.location);
  return false;
}

//CHECKBOX VALIDATION
function validateCheckbox (checkbox){
  let errorText = document.getElementById("checkbox-error");
 
  if (!checkbox.checked) {
    setError(checkbox, errorMessages.conditionUtilisation);
    return false;
  }
  else {
    removeError(checkbox);
    return true;
  }
}

function validate(event) {

  event.preventDefault();

  //DOM ELEMENTS
  const firstName = document.getElementById("first");
  const lastName = document.getElementById("last");
  const email = document.getElementById("email");
  const date = document.getElementById("birthdate");
  const quantity = document.getElementById("quantity");
  const radioChecked = document.getElementsByName("location");
  const checkbox = document.getElementById ("checkbox1");
 
  //APPEL FONCTIONS
  validateNames(firstName);
  validateNames(lastName);
  validateEmail(email);
  validateBirthdate(date);
  validateQuantity(quantity);
  validateLocation(radioChecked);
  validateCheckbox(checkbox);
   
  //CONDITION VALIDATION FORM
  if(validateNames(firstName)&&
    validateNames(lastName)&&
    validateEmail(email)&&
    validateBirthdate(date)&&
    validateQuantity(quantity)&&
    validateLocation(radioChecked)&&
    validateCheckbox(checkbox)
  )

  //CLOSE MODAL
  {
    var modalClose = document.getElementById("form").style.display ="none";
    var newContent = document.getElementsByClassName("formular-validated")[0].style.display = "flex";
    firstName.value="";
    lastName.value="";
    email.value="";
    date.value="";
    quantity.value="";
    checkbox.checked = false;

    for (let radio of radioChecked) {
      radio.checked = false ;
    }

  }
}

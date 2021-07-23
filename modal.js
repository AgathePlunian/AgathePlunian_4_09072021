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
const btnClose = document.getElementsByClassName("btn-close")[0];

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  let modalClose = document.getElementById("form").style.display ="block";
  let newContent = document.getElementsByClassName("formular-validated")[0].style.display = "none";
  modalbg.style.display = "block";
  
}

//close modal event
closeBtn.addEventListener("click", closeModal);

//close modal form
function closeModal() {
  modalbg.style.display = "none";
}

//Btn close modal validated
btnClose.addEventListener('click', closeModal);
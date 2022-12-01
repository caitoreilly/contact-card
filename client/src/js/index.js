//import modules

import "./form";

// adding this file --> created an entry point
// the file that webpack will look at to determine what dependencies and assets
// are needed for the app to work
// we need logic from form.js & submit.js for app to work so we must import them!
// also so they will be included in the bundle

// import CSS files
import "../css/index.css";

// import images
import Logo from "../images/logo.png";
import Bear from "../images/bear.png";
import Dog from "../images/dog.png";

// import initdb function from database.js & then call it inside of window event listener
import { initdb } from "./database";

// add images on load
// use DOM manipulation to insert images into our page with this code
window.addEventListener("load", function () {
  initdb();
  fetchCards();
  document.getElementById("logo").src = Logo;
  document.getElementById("bearThumbnail").src = Bear;
  document.getElementById("dogThumbnail").src = Dog;
});

// Form functionality
const form = document.getElementById("formToggle");
const newContactButton = document.getElementById("new-contact");
let submitBtnToUpdate = false;
let profileId;

newContactButton.addEventListener("click", (event) => {
  toggleForm();
});

form.addEventListener("submit", (event) => {
  // Handle data
  event.preventDefault();
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let profile = document.querySelector('input[type="radio"]:checked').value;

  // Post form data to IndexedDB OR Edit an existing card in IndexedDB
  if (submitBtnToUpdate == false) {
    postDb(name, email, phone, profile);
  } else {
    fetchCards();
    // Toggles the submit button back to POST functionality
    submitBtnToUpdate = false;
  }

  // Clear form
  clearForm();
  // Toggle form
  toggleForm();
  // Reload the DOM
  fetchCards();
});

// import Bootstrap's npm modules
import { Tooltip, Toast, Popper } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// import fetchCards() function from cards.js
import { fetchCards } from "./cards";

// import toggleForm() and clearForm() from form.js file
import { toggleForm } from "./form";
import { clearForm } from "./form";

//import modules

import "./form";
import "./submit";

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
  document.getElementById("logo").src = Logo;
  document.getElementById("bearThumbnail").src = Bear;
  document.getElementById("dogThumbnail").src = Dog;
});

// import Bootstrap's npm modules
import { Tooltip, Toast, Popper } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

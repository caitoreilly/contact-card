//imports

import "./form";
import "./submit";

// adding this file --> created an entry point
// the file that webpack will look at to determine what dependencies and assets
// are needed for the app to work
// we need logic from form.js & submit.js for app to work so we must import them!
// also so they will be included in the bundle

import Logo from "../images/logo.png";
import Bear from "../images/bear.png";
import Dog from "../images/dog.png";

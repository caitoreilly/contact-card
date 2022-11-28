const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static("../client/dist"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require the HTML route - allows server to serve the index.html file within
// the client folder as well as the code for the GET route
require("./routes/htmlRoutes.js")(app);

app.listen(PORT, function () {
  console.log(`Now listening on port: ${PORT}`);
});

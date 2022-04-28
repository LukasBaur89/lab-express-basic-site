const express = require("express");

// start app
const trApp = express();

// make public available
trApp.use(express.static("public"));

// start server
trApp.listen(8000, () => {
  console.log("Listening to port 8000");
});

// listen for request: Landing-page
trApp.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/landing-page.html");
});
// listen for request: Home
trApp.get("/home", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});
// listen for request: About
trApp.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});
// listen for request: Works
trApp.get("/works", (req, res) => {
  res.sendFile(__dirname + "/views/works.html");
});
// listen for request: Photo-Gallery
trApp.get("/photo-gallery", (req, res) => {
  res.sendFile(__dirname + "/views/photo-gallery.html");
});

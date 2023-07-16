//Routing Practice

// about - welcome to my about page 
// contact -wellcome to my contact page!
// temp - wellcome to my temp page!


const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my Home page!");
});

app.get("/about", (req, res) => {
  res.send("Welcome to my about page!");
});

app.get("/contact", (req, res) => {
  res.send("Welcome to my contact page!");
});

app.get("/temp", (req, res) => {
  res.send("Welcome to my temp page!");
});

app.listen(5000, () => {
  console.log("Listening on port 5000...");
});
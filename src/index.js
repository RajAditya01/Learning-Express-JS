const path = require("path");
const express = require("express");
const app = express();

//relative absolut
const staticPath=path.join(__dirname, "../public");

//to set view engine
app.

//builtin middleware
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("Welcome to my Home page!");
});


app.listen(5000, () => {
    console.log("Listening on port 5000...");
  });
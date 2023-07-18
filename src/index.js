const path = require("path");
const express = require("express");
const app = express();

//relative absolut
const staticPath=path.join(__dirname, "../public");

//change the  name of view folder
// const templatePath=path.join(__dirname, "../templates");
// app.set("views", templatePath);



//to set view engine
app.set("view engine","hbs");


// template engine route
app.get("",(req,res)=>{
  res.render("index");
});

//builtin middleware
//app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("Welcome to my Home page!");
});


app.listen(5000, () => {
    console.log("Listening on port 5000...");
  });
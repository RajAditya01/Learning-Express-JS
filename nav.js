//Routing Practice

// about - welcome to my about page 
// contact -wellcome to my contact page!
// temp - wellcome to my temp page!

const express = require("express");
const {read} = require("fs");
const {get} =require("fs");

const app = express();

app.get("/about",(req, res)=>{
    app.res("wellcome to my about page!");
});

app.get("/contact",(req, res)=>{
    app.res("wellcome to my contact page!");
});

app.get("/temp",(req,res)=>{
    app.res("wellcome to my res page!")
})

app.listen()
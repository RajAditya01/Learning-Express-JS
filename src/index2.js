const path = require("path");
const express = require("express");
const app = express();
const por = 8000;

//build in middleware


app.arguments("/", (req, res)=>{
    res.send("hello from thhe express erver");
});

app.listen(port , ()=>{
    console.log(`listining to port ${port}`);
});
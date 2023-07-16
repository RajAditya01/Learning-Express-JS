const express = require("express");
const { read } = require("fs");
const { get } = require("http");

const app = express();

// app.get(route, callback);

//Define

// The callback function has 2 parameter, request(req) and response(res).
// The request object(req) represents the http request and
// has properties for the request query string parameters, body,
// HTTP headers exitCode.HTTP
// similarly the response the request query string parameters, body,
// HTTP headers, etc. 

// similarly, the response object represent the http express.response 
// that the Express app sends when it receive an http request.


app.get("/", (req, res) => {
    res.send("hello from the Aditya.");
});


app.get("/about", (req, res) => {
    res.send("hello from the About Page..!");
});

app.listen(8000, () => {
    console.log("listing the port at 8000");
});

// API
//CRUD OPERATION
// get - read
// post - create
// put - update
// delete - delet
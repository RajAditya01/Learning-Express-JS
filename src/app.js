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

//html data
app.get("/html", (req, res) => {
    res.send("<h1>hello from the Aditya.</h1>");
});

//jason data
// The res object basically refers to the response that'll be sent out as part of this API call.

// The res.send function sets the content type to text/Html which means that the client will now treat it as text. It then returns the response to the client.

// The res.json function on the other handsets the content-type header to application/JSON so that the client treats the response string as a valid JSON object. It also then returns the response to the client.

app.get("/json", (req, res) => {
    res.send({
        id:1,
        name: "aditya",
    });
});

app.get("/json2", (req, res) => {
    res.json({
        id:1,
        name: "aditya",
    });
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
const express=require("express");
const app =express();
const port=process.env.PORT || 8000 ;

//public static path
console.log(Path.join(__dirname));
app.use(express.static());


//routhing
app.get("", (req, res) => {
    res.send("hello from the Page..!");
});

app.get("/about", (req, res) => {
    res.send("hello from the about Page..!");
});

app.get("/weather", (req, res) => {
    res.send("hello from the weather Page..!");
});

app.get("*", (req, res) => {
    res.render("404");
  }); 

app.listen(port, () => {
    console.log(`listing the port at ${port}`);
});
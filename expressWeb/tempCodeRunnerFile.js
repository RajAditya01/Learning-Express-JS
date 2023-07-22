
//routhing
app.get("", (req, res) => {
    res.send("hello from the Page..!");
});

app.get("/about", (req, res) => {
    res.send("hello from the about Page..!");
});
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");


const app = express();
const port = 3001;

//uses of body-parser middleware
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/api/v1/login", (req, res) => {
    res.send(`Done! name: ${req.body.name} email: ${req.body.email}`);
    //console.log("name");
    console.log(req.body);
});

app.listen(port, () => {
    console.log(`Server is working on port ${port}`);
})
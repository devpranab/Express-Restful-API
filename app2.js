const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");


const app = express();
const port = 3001;

//uses of body-parser middleware
// app.use(bodyParser.urlencoded({extended: false}));


app.use(express.json());

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname + "/index.html"));
// });

// app.post("/api/v1/login", (req, res) => {
//     res.send(`Done! name: ${req.body.name} email: ${req.body.email}`);
//     //console.log("name");
//     console.log(req.body);
// });

app.get("/api/userData", (req, res) => {
    res.json({
        name: "Pranav",
        email: "spranabsar6@gmail.com",
        password: "hexed345df"
    })
});

app.post("/api/v1/reg", (req, res) => {  //using postman
    const userName = req.body.name;
    const userEmail = req.body.email;
    const userPassword = req.body.password;

    res.json({
        success: true,
        name: userName,
        email: userEmail,
        password: userPassword
    })
})

app.listen(port, () => {
    console.log(`Server is working on port ${port}`);
})
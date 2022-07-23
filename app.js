//Use express
const express = require("express");
const fs = require("fs");
const app = express();

// app.get()
// app.post()
// app.patch()
// app.delete()

app.get("/", (req, res) => {
    res.send("Hello from express js!");
});

app.get("/students", (req, res) => {
    fs.readFile("./database/db.json", "utf-8", (err, data) => {
        const students = JSON.parse(data).students;
        res.send(students);
    })
});

const port = 3000;

app.listen(port, () => {

    console.log(`Listening on port 3000`);
})

//nodemon app - run
//Use express
const express = require("express");
const fs = require("fs");
const app = express();

//middlewares
app.use(express.json()); //data process as json

// app.get()
// app.post()
// app.patch()
// app.delete()

app.get("/", (req, res) => {
    res.send("Hello from express js!");
});

app.get("/api/students", (req, res) => {
    fs.readFile("./database/db.json", "utf-8", (err, data) => {
        const students = JSON.parse(data).students;
        res.send(students);
    })
});

//POST
app.post("/api/students", (req, res) => {
    //console.log(req.body);
    const student = req.body;
    fs.readFile("./database/db.json", "utf-8", (err, data) => {
        const students = JSON.parse(data);
        students.students.push(student);
      fs.writeFile("./database/db.json", JSON.stringify(students), (err) => {
        res.send(student);
      })
    })
})

const port = 3000;

app.listen(port, () => {

    console.log(`Listening on port 3000`);
})

//nodemon app - run
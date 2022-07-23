//Use express
const express = require("express");
const db = require("./db/db");
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
    db.getDbStudents()
    .then(students => {
        res.send(students);
    })
});

//POST
app.post("/api/students", (req, res) => {
    const student = req.body;
    db.getDbStudents()
    .then(students => {
        students.push(student);
        db.insertDbStudents(students)
    .then(data => {
        res.send(student);
    });
    })
})

const port = 3000;

app.listen(port, () => {

    console.log(`Listening on port ${port}`);
})

//nodemon app - run
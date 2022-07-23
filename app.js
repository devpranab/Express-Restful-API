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

//GET
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

//GET by id
app.get("/api/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    db.getDbStudents()
    .then(students => {
        const student = students.find(s => s.id === id);
        if(!student) res.status(404).send("No student found with this id!");
        else res.send(student); //or res.sendFile()
    })
})

//PUT by id
app.put("/api/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const updatedData = req.body; 
    db.getDbStudents()
    .then(students => {
        const student = students.find(s => s.id === id);
        if(!student) res.status(404).send("No student found with this id!");
        else {
            const i = students.findIndex(s => s.id === id);
            students[i] = updatedData;
            db.insertDbStudents(students)
            .then(msg => res.send(updatedData));
        }
    });
})

//DELETE by id
app.delete("/api/students/:id", (req, res) => {
    const id = parseInt(req.params.id); 
    db.getDbStudents()
    .then(students => {
        const student = students.find(s => s.id === id);
        if(!student) res.status(404).send("No student found with this id!");
        const updatedStudents = students.filter(s => s.id !== id);
        db.insertDbStudents(updatedStudents)
        .then(msg => res.send(student));
    });
})
   

const port = 3000;

app.listen(port, () => {

    console.log(`Listening on port ${port}`);
})

//nodemon app - run
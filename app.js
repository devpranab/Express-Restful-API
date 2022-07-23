//Use express
const express = require("express");
const app = express();
const studentRouter = require("./routers/studentRouter");

//middlewares
app.use(express.json()); //POST/PUT/PATCH -> json object -> req.body
app.use("/api/students", studentRouter);


app.get("/", (req, res) => {
    res.send("Hello from express js!");
});



const port = 3000;

app.listen(port, () => {

    console.log(`Listening on port ${port}`);
});
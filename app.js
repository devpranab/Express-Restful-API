//Use express
const express = require("express");
const app = express();
const studentRouter = require("./routers/studentRouter");
const morgan = require("morgan");

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



/*REST (Representationl State Transfer) is an API that defines a set of
function that Programmers cn use to send requests and receive response using
the HTTP protocol methods such as GET and POST.*/

/* Use MongoDB in express:
> create mongoose model-collections
> import model
> connect database
*/
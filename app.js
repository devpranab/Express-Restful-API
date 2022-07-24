//Use express
const express = require("express");
const app = express();
const studentRouter = require("./routers/studentRouter");
const morgan = require("morgan");

//middlewares
app.use(express.json()); //POST/PUT/PATCH -> json object -> req.body

app.use(express.urlencoded({extended: true})); //pass as key - value(Postmon)
app.use(express.static('public')); //static file - http://localhost:3000/random.txt

//Third Party Middlewares
//app.use(morgan('dev')); //get req type,url as dev formar
//app.use(morgan('tiny')); //get req type,url as tiny formar
//app.use(morgan('short')); //get req type,url as short formar


app.use((req, res, next) => {
    console.log("I am middleware 1");
    next();
});

app.use((req, res, next) => {
    console.log("I am middleware 2");
    next();
});


app.use("/api/students", studentRouter);

app.get("/", (req, res, next) => {
    //res.send("Another response");
    next();
});


app.get("/", (req, res) => {
    console.log("I am get Request Middleware");
    res.send("Hello from express js!");
});



const port = 3000;

app.listen(port, () => {

    console.log(`Listening on port ${port}`);
});



/*REST (Representationl State Transfer) is an API that defines a set of
function that Programmers cn use to send requests and receive response using
the HTTP protocol methods such as GET and POST.*/
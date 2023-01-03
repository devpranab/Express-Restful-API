# Express-Restful-API
</h2> CRUP Operation with Express Route, Middlewaress </h2>

</h1> What is Restful Service: </h1>
<h4> Client-Server Communication (HTTP): </h4>
URL: www.pranav.com
URL - Uniform Resources Loacator
Browser(client/User) ---- Server

<h4> RESTful API: </h4> - representational state transfer(rest)
API - Application Programming Interface
Application1------(req/res=communication)------Application2

Rest Concepts:
-Resource(Nouns):                       Methods(Verbs):                          Representation:
-Any info provided by REST API          -Actions to be performed on resources    -How data is represented or returned to the client
-Uniform Resource Indicator(URI)        -Perform CRUD operations                 -JSON & XML
-Ex- http://www.some.com/books          -Ex- HTTP POST = Create
                                           HTTP GET = Get
                                           HTTP PUT = Update
                                           HTTP DELETE = Delete

React App  ---(Restful api(req/res)--- Backend Service


<h4>Examples of REST API:</h4>
For resources link
https://docs.github.com/en/rest/overview/resources-in-the-rest-api#root-endpoint
https://jsonplaceholder.typicode.com/

02. Building Restful Service with Express:
1. Installing Express
2. Creating server and Running with Nodemon
3. Using Postman for GET Request
4. Handling POST Request
5. Creating a Module for managing data
6. Route Parameters
7. Handling PUT Request
8. Handling DELETE Request

03. Express Router:
1. Using Names Function
2. Refactoring the Routes
3. Implementing Router

04. Express Middlewares:
1. What Is Middleware-1
3. Request-Response Cycle-3
4. Built-In Middleware-4
5. Third Party Middleware-5

# Express js
- https://expressjs.com/
- Express js is Fast, unopinionated, minimalist web framework for Node.js.
- For easy api response request handle, no more complex.

### Building Restful Service with Express
1. Installing Express
- $ npm init -y
- $ npm i express

2. Creating server and Running with Nodemon
- load express which return function
- in function have all crud method
- install nodemon, api return object, create multiple api
- $ npm i nodemon -g //nodemon app.js
```js
//Use express
const {req, res} = require("express");
const express = require("express");
const app = express();

// app.get()
// app.post()
// app.patch()
// app.delete()
app.get("/", (req, res) => {
    res.send("Hello from express js!");
});

app.get("/1", (req, res) => {
    res.send("Hello from 1 express js!");
});

const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port 3000`);
});

//install nodemon, api return object, create multiple api, no need restart server
const fruits = {
    product: 'alu',
    price: 100
}
app.get("/fruits/alu", (req, res) => {
    res.send({product: 'alu', quan:12, price: 100});
});
```
- $ nodemon app.js

3. Using Postman for GET Request
```js
//database_db.json
{
    "students": [
        {
            "id": 1,
            "name": "Pranav"
        },
        {
            "id": 2,
            "name": "Rajat"
        }
    ]
}
//app.js
//Use express
const express = require("express");
const fs = require("fs");
const app = express();

// app.get()
app.get("/", (req, res) => {
    res.send("Hello from express js!");
});

app.get("/1", (req, res) => {
    res.send("Hello from 1 express js!");
});

app.get("/2", (req, res) => {
    res.send("Hello from 2 express js!");

app.get("/students", (req, res) => {
    fs.readFile("./database/db.json", "utf-8", (err, data) => {
        const students = JSON.parse(data).students;
        res.send(students);
    })
});

const port = 3000;
```
- download chrome extension postman & paste url here

4. Handling POST Request
- Use fetch to load data from server, middleware, handle cors
- https://github.com/devpranab/Express-Restful-API/commit/6f56d135e4f56c41c1c9e01fb0e8f88cbcad8faf
```js
//middlewares
app.use(express.json()); //data process as json

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
});
```
- postman > POST - url - send (before write a data for post)
- here postman work as frontend part

5. Creating a Module for managing data
- divide code to file system code

6. Route Parameters
- dynamic api, api parameter, access params, access query
```js
//GET by id
app.get("/api/students/:id", (req, res) => {
    //console.log(req.params;)
    const id = parseInt(req.params.id);
    db.getDbStudents()
    .then(students => {
        const student = students.find(s => s.id === id);
        if(!student) res.status(404).send("No student found with this is!");
        else res.send(student);
    })
})

//another example
const users = ["pranav", "ayush", "ashiq"];
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.query.sort); //localhost:5001/users/1?sort=asc
    const name = users[userId];
    res.send({id, name});
})
//localhost:5001/users/1
//localhost:5001/users/1?sort=asc
```

7. Handling PUT Request
- https://github.com/devpranab/Express-Restful-API/commit/3b3283c7ac818a71449717bdc25c3dae336735dc

8. Handling DELETE Request
- https://github.com/devpranab/Express-Restful-API/commit/e2e9c010c1887a1928eed1affa434057eec847ca

### Building Restful Service with Express
1. Using Named Function
- For clean to callback function of app.js file.
```js
const studentList = (req, res) => {
    db.getDbStudents()
    .then(students => {
        res.send(students);
    })
});
    .then(students => res.send(students));
};

//GET
app.get("/api/students",studentList);
```
2. Refactoring the Routes
- use app.route function
- https://github.com/devpranab/Express-Restful-API/commit/3cf70dc2e1bed0594b90d926f17d51a87191ccdc

3. Implementing Router
- For clean app.js and divide to routers & methods where helps router
- https://github.com/devpranab/Express-Restful-API/commit/a9ce9d0ac88a5ba57979ba33cfacc7014bc7eb88
- use router

### Express Middlewares
1. What Is Middleware
- Works as middle man.
- https://expressjs.com/en/guide/writing-middleware.html
- Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.
Middleware functions can perform the following tasks:
 - Execute any code.
 - Make changes to the request and the response objects.
 - End the request-response cycle.
 - Call the next middleware in the stack.
```js
//some middlewares
app.use(express.json()); //POST/PUT/PATCH req -> json object -> req.body
app.use("/api/students", studentRouter);
``` 

2. Writing Custom Middleware
- https://github.com/devpranab/Express-Restful-API/commit/afe4f2e9ae1c92607462327cf438bdeda5a071ed
- Writing custom middleware using use function
```js
app.use((req, res) => {
    console.log("I am middleware");
});
//if not use next can't work next middleware function
app.use(express.json()); //POST/PUT/PATCH -> json object -> req.body
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

app.get("/", (req, res, next) => {
    //res.send("Another response"); no print already res.send() final stage
});
//middleware call sequence next by next matching path
```

3. Request-Response Cycle
- Request-Response Cycle: request, response, next
```js
//request, response object manupulate, ex-
//middleware
app.use(express.json()); //POST/PUT/PATCH -> json object -> req.body
```

4. Built-In Middleware
- app.use(express.json());
- app.use(express.urlencoded()); //id=1&&name=Something, pass as key - value(Postmon)
- app.use(express.static('public')); //[public_text.txt] static file search -http://localhost:3000/random.txt

5. Third Party Middleware
- $ npm i morgan //all request print in console
- https://github.com/devpranab/Express-Restful-API/commit/42423f199c8b110bbe4e21064274718a19581eed
```js
//Third Party Middlewares
//app.use(morgan('dev')); //get req type,url as dev format
//app.use(morgan('tiny')); //get req type,url as tiny format
//app.use(morgan('short')); //get req type,url as short format
```


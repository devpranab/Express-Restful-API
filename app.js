//Use express
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

app.get("/2", (req, res) => {
    res.send("Hello from 2 express js!");
});

const port = 3000;

app.listen(port, () => {

    console.log(`Listening on port 3000`);
})

//nodemon app - run
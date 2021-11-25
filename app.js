const express = require("express");

const users = require("./users.json")

const app = express();

app.use(express.json());

app.get("/",(req,res) => {
    res.send("<h1>Welcome to Home page</h1>")
} )

app.get("/users",(req,res) => {
    res.send({users})
} )


app.listen(2345,function () {
    console.log('listening on port 2345')
} )
const express = require("express");
const app = express()

app.get("/register", (req, res)=>{
    res.end("Hey Register")
})

app.get("/login", (req, res)=>{
    res.json({result: "OK"})
})

app.listen(8085, ()=>{
    console.log("Bcakend is running....")
})
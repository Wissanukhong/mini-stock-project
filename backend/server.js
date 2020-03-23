const express = require("express");
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/api/v2/authen/", require("./api_authen.js"))
app.use("/api/v2/stock/", require("./api_stock.js"))

app.listen(8085, ()=>{
    console.log("Bcakend is running....")
})
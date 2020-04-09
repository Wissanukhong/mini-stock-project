const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')


//bodyParser เอาไว้สำหรับเวลาที่ต้องการแปลงข้อมูลจาก postman มาสู่ Backend
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//เป็นอ้างอิงถึง Folder ที่มีการ Upload picture
app.use(express.static(__dirname + "/uploaded"))
app.use(cors());

app.use("/api/v2/authen/", require("./api_authen.js"))
app.use("/api/v2/stock/", require("./api_stock"))

app.listen(8085, ()=>{
    console.log("Bcakend is running....")
})
const express = require("express");
const router = express.Router();
const user = require("./models/user");
const bcrypt = require("bcryptjs");
const constants = require("./constant");

//Login
router.post("/login", (req, res)=>{
    res.json({result: "login"})
})

router.post("/register",async (req, res)=>{

    req.body.password = bcrypt.hashSync(req.body.password, 8);
    let result = await user.create(req.body)

    res.json({result: constants.kResultOk, message: JSON.stringify(result)})
})

module.exports = router;
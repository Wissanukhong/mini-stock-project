const express = require("express");
const router = express.Router()
const user = require("./models/user");

router.post("/login", (req, res)=>{
    res.json({result: "login"})
})

router.post("/register",async (req, res)=>{

    const {username, password} =req.body
    await user.create(req.body)

    res.json({result: "OK", username, password})
})

module.exports = router;
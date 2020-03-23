const express = require("express");
const router = express.Router()

router.post("/login", (req, res)=>{
    res.json({result: "login"})
})

router.post("/register", (req, res)=>{

    const {username, password} =req.body

    res.json({result: "OK", username, password})
})

module.exports = router;
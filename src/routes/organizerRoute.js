const express = require("express")
const router = new express.Router()

router.get("/",async(req,res,)=>{
    res.send("from organizer")
})

module.exports= router


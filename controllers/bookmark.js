const express = require("express")
const bookmark = express.Router()
const Bookmark = require("../models/bookmark.js")


//  ROUTES

// INDEX
//index route
bookmark.get("/", async (req, res) => {
    res.json(await Bookmark.find({}));
  });



// CREATE
bookmark.post("/", async (req,res)=>{
    res.json(await Bookmark.create(req.body))
})


// DELETE
bookmark.delete("/:id", async (req,res)=>{
    res.json(await Bookmark.findByIdAndRemove(req.params.id))
})



// UPDATE


module.exports = bookmark
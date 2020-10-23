const mongoose = require("mongoose")

const bookmarkScehma = mongoose.Schema({
    title: String,
    url: String

})

module.exports = mongoose.model("Bookmark", bookmarkScehma)
// represents file database object
const mongoose = require("mongoose")

// schema
const File = new mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    originalName: {
        type: String,
        required: true
    },
    password: String,
    downloadCount: {
        type: Number,
        required: true,
        default: 0
    }
})

// create a table called file containing above information
module.exports = mongoose.model("File", File)

const mongoose = require("mongoose")
const magazineSchema = new mongoose.Schema({
    title: {
        type:String
    },
    isbn: {
        type:String
    },
    authors: {
        type:String
    },
    publishedAt: {
        type:Date
    }
},{ timestamps: true })


module.exports = mongoose.model('magazineDB', magazineSchema)
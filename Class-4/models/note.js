const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    title:String,
    text:String,
    tags: [{type: mongoose.Types.ObjectId,ref:'Tag'}]
    
},{timestamps:true})

module.exports = mongoose.model('Note',noteSchema)
const mongoose = require('mongosse');

const tagSchema = mongoose.Schema({
    title:String,
})

module.exports = mongoose.model('Tag',tagSchema)
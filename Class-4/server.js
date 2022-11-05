const express = require('express'); //Function
const mongoose = require('mongoose'); //Object
const cors = require('cors'); //Function

require('dotenv').config

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/express-notes-vezbe'

const notes = require('./routes/notes')
const tags = require('./routes/tags')

const app = express();

app.use(express.json())
app.use(cors())

app.use('/notes',notes);
app.use('/tags',tags);

mongoose.connect(DB_URL);

app.listen(PORT,() =>{
    console.log(`listening to localhost: ${PORT}`)
})
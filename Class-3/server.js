const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const PORT = process.env.PORT || 3000;


//MODEL

// const Note = mongoose.model('Note',{ title:String })

//II-nacin :
const NoteScheme = mongoose.Schema({
    title:String
})

const Note = mongoose.model('Note' , NoteScheme);

//ROUTES

const app = express();

app.use(express.json())


app.get('/notes',async (req,res) =>{
    try{
    const notes = await Note.find()
    res.status(200).json(notes);
    } catch(e){
        res.status(500).json(e);
    }
})

app.get('/notes/:id',async(res,req) =>{
    const {id} = req.params
    try{
        const notes = await Note.findById(id);
        res.status(200).json(notes);
    } catch(e){
        res.status(500).json(e);
    }
})

app.delete('notes/:id',async(req,res) =>{
    const {id} = req.params;
    try{
        await Note.deleteOne({_id:id})
        res.status(204).end();
    } catch(e){
        res.status(500).json(e);
    }
})

app.patch('notes/:id',async (req,res) =>{
    const {id} = req.params;

    try{
        await Note.updateOne({ _id : id },req.body)
        res.status(204).send();
    }
    catch(e){
        res.status(500).json(e)
    }
})

app.post('/notes', async (req,res) =>{
    const noteData = req.body;


    try{
        const note = new Note(noteData)
        await note.save()
        res.status(201).json(note)
    } catch (e){
        res.status(500).json(e);
    }
})


app.listen(PORT,()=>{
    mongoose.connect(`mongodb://127.0.0.1:27017/notes`);
    console.log(`listening on localhost:${PORT}`)
});
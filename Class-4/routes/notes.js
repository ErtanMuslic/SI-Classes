const express = require('express');

const Note = require('../models/note');

const router = express.Router()

router.get('/',async(req,res) =>{
    const notes = await Note.find(req.query)
    res.json(notes);
})

router.get('/:id',async(req,res) =>{
    const { id } = req.params;
    const note = await Note.findById(id)
    res.json(note);
})

router.post('/',async(req,res) =>{
    const note = await Note.create(req.body)
    res.status(201).json(note);
})

router.patch('/:id',async(req,res) =>{
    const { id } = req.params;
    await Note.findByIdAndUpdate(id,req.body)
    res.status(204).end();
})

router.delete('/:id',async(req,res) =>{
    const {id} = req.params;
    await Note.findByIdAndDelete(id);
    res.status(204).end;
})


module.exports = router;
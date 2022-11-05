const express = require('express');

const Tag = require('../models/note');

const router = express.Router()

router.get('/',async(req,res) =>{
    const notes = await Tag.find(req.query)
    res.json(notes);
})

router.get('/:id',async(req,res) =>{
    const { id } = req.params;
    const note = await Tag.findById(id)
    res.json(note);
})

router.post('/',async(req,res) =>{
    const note = await Tag.create(req.body)
    res.status(201).json(note);
})

router.patch('/:id',async(req,res) =>{
    const { id } = req.params;
    await Tag.findByIdAndUpdate(id,req.body)
    res.status(204).end();
})

router.delete('/:id',async(req,res) =>{
    const {id} = req.params;
    await Tag.findByIdAndDelete(id);
    res.status(204).end;
})

module.exports=router;
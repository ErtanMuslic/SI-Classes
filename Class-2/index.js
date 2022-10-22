const express = require('express');
const fs=require('fs');
require('dotenv').config()

const PORT = process.env.PORT || 3000;

const app = express();

const contacts = [];

let nextId = 0;

// fs.readFile('./data','utf-8',(err,data)=>{
//     // if(err) throw err
//     contacts = JSON.parse(data);
// })

function delay(ms) {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve('hello');
        },ms)
    }
)}

app.use(express.json());

app.get('/bla', async (req,res) =>{
    delay(300)
    .then(() => delay(300))
    .then((msg) => {console.log(msg)})
})

async function delayPromise(ms){
    return 'blabla'
}


app.get('/contacts',(req,res) =>{
    res.json(contacts)
})

app.get('/contact/:id',(req,res) =>{
    let {id} = req.params;
    id = +id;
    if(isNaN(id)){
        res.status(400).json({message:"ID should be a number dumbass"});
    }

    const contact = contacts.find(c => c.id === id)
    if(contact){
        return res.status(200).json(contact);
    }
    else{
        return res.status(404).end()
    }

    // console.log(id);
    // res.end();
})


app.post('/contacts',(req,res) =>{
    const contact = req.body;
    if(!contact.name || !contact.lastName){
        return res.status(400).json({message:'You must provide name and lastName'})
    }
    contact.id = nextId++;
    contacts.push(contact)
    res.status(201).json(contact);

})

app.patch('/contacts/:id',(req,res) =>{
    let {id} = req.params;
    id = +id;
    if(isNaN(id)){
        res.status(400).json({message:"ID should be a number dumbass"});
    }
    const Index = contacts.findIndex(c => c.id === id);

    if(!contact){
        return res.status(404).end()
    }

    const newContact = req.body;
    contacts[Index] = {...contact, ...newContact,id: contact.id}

   
})


app.delete('/contacts/:id',(req,res)=>{
    let {id} = req.params;
    id = +id;
    if(isNaN(id)){
        return res.status(400).json({message:"id should be a number"})
    }

    contacts = contacts.filter(c => c.ide !== id)
    res.status

})


app.get('/hello',(req,res) =>{
    res.json({message:'hello'})
})

app.listen(PORT,()=>{
    console.log(`listening to localhost:${PORT}`);
})
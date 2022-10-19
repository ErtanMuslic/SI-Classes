// console.log("imamo vezbe i dalje");

// const fs = require('fs');
// const biblioteka = require('biblioteka');
const express = require('express');
// const { read } = require('fs');

// console.log("Radi");
const app = express();
const PORT = 3000;

const list = []
app.use(express.json())

app.get('/',(req,res) => {
    res.json(list);
    //res.json({name:'Ertan'}) 
    //console.log("dobili smo request");
    //const obj = {name :"Ertan" , age: 21}
    //res.send(JSON.stringify(obj));
});

app.post('/' , (req,res) =>{
    const article = req.body
    list.push(article)
    res.status(201).json(article)
})

app.listen(PORT , () => {
    console.log(`listening on localhost:${PORT}`)
});
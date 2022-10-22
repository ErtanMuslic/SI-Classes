const express = require('express');
const PORT = 3000;
const app = express();

let list = [];

app.use(express.json())

app.get('/add',(req,res) =>{
    
    const sum = list.reduce((prev,curr) => prev + curr ,0);
    res.json(sum);


    // for(let i = 0;i<list.length;i++){
    //     sum+=list[i];
    // }
    // res.json(sum);
});

app.get('/sort',(req,res) => {

    list.reduce((prev,curr) =>{ list.sort(function(a,b){return a-b;}); } , 0 );
    res.send(JSON.stringify(list));

    // let min = list[0];
    // for(i = 0;i<list.length;i++){
    //     if(min > list[i]){
    //         min = list[i];
    //     }
    // }
    // res.json(min);

})

app.post('/' , (req,res) =>{

    const numbers = req.body.num;
    list = numbers;
    res.status(201).json(numbers);
    // console.log(list);

})

app.listen(PORT, () =>{

    console.log(`listening on localhost:${PORT}`);

})
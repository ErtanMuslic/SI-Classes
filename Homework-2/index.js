
const express = require('express')

const app = express()

const todos = []
let nextID = 0

const PORT = 3000

app.use(express.json())

app.get('/todos', (req, res)=>{
    res.json(todos)
})

app.get('/alltodosExcept/:id', (req, res) => {
    let {id} = req.params
    const todo = todos.find (t => t.id === +id)
    let temp = todos.slice(0, todos.length)
    temp.splice(todos.indexOf(todo), 1) 
    if (todo){
        return res.status(200).json(temp)
    }
    res.end()
})

app.get('/todosFinished', (req, res) => {
    let temp = todos.filter(t => t.status == true)
    if (temp){
        return res.status(200).json(temp)
    }
    res.end()
})

app.get('/todosPending', (req, res) => {
    let temp = todos.filter(t => t.status == false)
    if (temp){
        return res.status(200).json(temp)
    }
    res.end()
})

app.get('/todosIncoming', (req, res) => {
    let today = new Date()
    let temp = todos.filter(t => (t.date < today) && (t.status == false))
    if (temp){
        return res.status(200).json(temp)
    }
    res.end()
})

app.patch('/todos/:id', (req, res) => {
    let {id} = req.params
    const index = todos.findIndex(t => t.id === +id)
    const todo = todos[index]
    
    if(!todo){
        return res.status(404).end()
    }

    const newTodo = req.body
    todos[index] = {...todo, ...newTodo, id: todo.id}
    res.status(204).end()

})

app.post('/todo', (req, res) => {
    let todo = req.body
    if (!todo.title || !todo.date){
        return res.status(400).json({message: 'e brate unesi sve'})
    }

    todo.id = nextID++
    todo.status = false
    todo.date = new Date(req.body.date)

    todos.push(todo)
    res.status(204).json(todo)
})

app.listen(PORT, () => {
    console.log(`listening to local host ${PORT}`)
})
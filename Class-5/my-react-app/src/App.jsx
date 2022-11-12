import { useState } from 'react'
import './App.css'

function ZutoDugme(props){
  return <button className='zuto-dugme' style={{backgroundColor: props.color}}>{props.color} button</button>
}

function Counter({start}){
  const [count,setcount] = useState(start ?? 0);

  function Increment(){
    setcount(count + 1);
  }

  function Decrement(){
    setcount(count - 1)
  }
  return (
   <>
   <h1>Count : {count}</h1>
   <button onClick={Increment}>Increment</button>
   <button onClick={Decrement}>Decrement</button>
   </> 
  )
}

function Person({name}){
  return <h1 className='person'>{name}</h1>
}

function App() {

  const [ppl,setppl] = useState(['Samir','Omer','Ramiz']);


  function addElma(){
    setppl([...ppl,'Elma'])
  }

  function removeElmas(){
    setppl([ppl.filter(name => name != 'Elma')])
  }

  return (
    <div className="App">
      <ZutoDugme color="red"/>
      <ZutoDugme color="yellow"/>
      <ZutoDugme color="blue"/>
      <Counter/>
      <Counter start={10}/>
      <Counter start={20}/>

      
      {ppl.map(name => <Person name={name}/>)}
      <button onClick={addElma}>Add Elma</button>
      <button onClick={removeElmas}>Remove Elmas</button>

    </div>
  )
}

export default App

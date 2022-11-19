import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  // const [broj, setbroj] = useState(0)

  // useEffect(() =>{
  //   setInterval(() =>{
  //     setbroj(b=> b + 1);

  //   },1000)
  // }, [])

  // useEffect(() =>{
  //   console.log('Promenio se broj:',broj);
  // },[broj]);


  // const [joke,setJoke] = useState('');
  // const [isLoading,setisLoading] = useState(false);
  // const [error,setError] = useState(null);

  // useEffect(() =>{
  //   async function f() {
  //     setisLoading(true);
  //     setError(null);
  //     try{
  //       const response = await axios.get('https://api.chucknorris.io/jokes/random');
  //       setJoke(response.data.value);
  //     }
  //     catch(e){
  //       setError(e);
  //     }
  //     setisLoading(false);
  //   }
  //   f();
  // },[])

  // if(error){
  //   return <h1>Error se desio: {error}</h1>
  // }
  // if(isLoading){
  //   return <h1>Loading...</h1>
  // }

  const images = {
    0:'assets./dune.png',
    1:'assets./road.png',
    2:'assets./water.png'
  }


  const [width,setWidth] = useState(3);
  const [height,setHeight] = useState(4);
  const [tiles,setTiles] = useState([0,0,0,1,1,1,1,2,2,1,1])

 return (
    <div style={{display:'inline-grid' ,gridTemplateColumns:'repeat(4,'}}>
      tiles.map({tile => <img src={images[tile]}/>})
    </div>
  ) 
}

export default App

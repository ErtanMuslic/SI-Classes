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

  const TileMap = {
    0:"red",
    1:"green",
    2:"blue",
    3:"grey",
    
  }

  const path = [
    {x :0,y:0},
    {x :1,y:0},
    {x :1,y:1},
    {x :1,y:2},
    {x :2,y:2}
]

  const [width,setWidth] = useState(4);
  const [height,setHeight] = useState(3);
  const [tiles,setTiles] = useState([3,1,1,2,1,1,2,2,1,2,1,1])

  const [playerX,setplayerX] = useState(0);
  const [playerY,setplayerY] = useState(0);
  

  useEffect(()=>{
    setplayerX()
  })


  function getTile(i,j) {
    return tiles[i * width + j]
  }

  const getX = idx => 400/width * (idx % 4);
  const getY = idx => 300 / height * Math.floor(idx /4)

 return (

    <div className="App">
      <svg viewBox='0 0 400 300'>
        {tiles.map((t,idx) =>

        <rect className='tile' style={{fill: TileMap[t]}} x={getX(idx)} y={getY(idx)} width={400/ width} height={300/height}></rect>
)}

          {path.map(p =>
            <circle cs={p.x * 400/ width}  cy={p.y * 300 / height + (300 / height / 2)} r="10"  w/>
            )}

<circle className='player' style={{transform:`translate${playerX * 400 / width}px, ${playerY * 300 / height}`}} cx={400/width /2} cy={300/ height / 2} r="40" />
      </svg>
    </div>
  ) 
}

export default App

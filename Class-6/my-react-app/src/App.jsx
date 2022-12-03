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

const tileMap = {
  0: 'red',
  1: 'green',
  2: 'blue',
  3: 'grey',
}
 
 
  const [width, setWidth] = useState(4)
  const [height, setHeight] = useState(3)
  const [tiles, setTiles] = useState([3, 1, 1, 2, 1, 1, 2, 2, 1, 2, 1, 1])
 
  const [playerX, setPlayerX] = useState(0)
  const [playerY, setPlayerY] = useState(0)
 
  const [editorMode, setEditorMode] = useState(true)
  const [selectedTile, setSelectedTile] = useState(null)
 
 
  const [path, setPath] = useState([
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
    { x: 1, y: 2 },
    { x: 2, y: 2 },
  ])
 
  useEffect(() => {
    if (editorMode) return
    let idx = 0
    const interval = setInterval(() => {
      const { x, y } = path[idx]
      setPlayerX(x)
      setPlayerY(y)
      idx++
      setTimeout(() => {
        setPath(p => p.slice(1))
      }, 500)
 
      if (idx === path.length) {
        clearInterval(interval)
      }
    }, 500)
 
    return () => clearInterval(interval)
  }, [editorMode])
 
 
  const getX = idx => 400 / width * (idx % 4)
 
  const getY = idx => 300 / height * Math.floor(idx / 4)
 
  function selectTile(idx) {  
    if (!editorMode) return
    if (selectedTile === idx) {
      setSelectedTile(null)
    } else {
      setSelectedTile(idx)
    }
  }
 
  function changeTile(color) {
    if (!selectTile) return
 
    setTiles(tiles.map((t, idx) => selectedTile === idx ? color : t))
  }
 
  return (
    <div id="container">
 
      <svg viewBox={`0 0 ${editorMode ? 402 : 400} ${editorMode ? 302 : 300}`}>
        {tiles.map((t, idx) => 
          <rect className={'tile' + (selectedTile === idx ? ' selected' : '')} style={{ fill: tileMap[t] }} x={getX(idx) + (editorMode ? 2 : 0)} y={getY(idx) + (editorMode ? 2 : 0)} width={400 / width - (editorMode ? 2 : 0)} height={300 / height - (editorMode ? 2 : 0)}
            onClick={() => selectTile(idx)}
          />
        )}
 
        {editorMode || path.map(p =>
          <circle cx={p.x * 400 / width + (400 / width / 2)} cy={p.y * 300 / height + (300 / height / 2)} r="10" />
        )}
 
        {editorMode || <circle className="player" style={{ transform: `translate(${playerX * 400 / width}px, ${playerY * 300 / height}px)` }} cx={400 / width / 2} cy={300 / height / 2} r="40" />}
      </svg>
 
      <div id="opt-container">
        <div className="options">
          {Object.keys(tileMap).map(color => <div onClick={() => changeTile(color)} className="option" style={{ backgroundColor: tileMap[color] }}></div>)}
        </div>
        <button onClick={() => setEditorMode(e => !e)}>EDIT</button>
      </div>
      </div>
  )
}
 
export default App
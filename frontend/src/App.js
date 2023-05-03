import "./App.css";
import { fetchAllGames } from "./lib/sanity/gameServices";
import {useState, useEffect} from 'react'
import GameShop from "./components/pages/GameShop";
import { Route, Routes} from 'react-router-dom';
import MyGames from "./components/pages/MyGames";



function App() {
  const [game, setGame] = useState(null)

  const getGames = async () => {
  const data = await fetchAllGames()
  setGame(data)
  }

  useEffect(() =>{
    getGames()
  }, [])

  return (
    <>
    <Routes>
      <Route index element={<GameShop games={game}/>}/>
      <Route path=":slug" element={<MyGames/>}/>
    </Routes>
    </>
  )
}

export default App;

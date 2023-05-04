import "./App.css";

import {useState, useEffect} from 'react'
import { Route, Routes} from 'react-router-dom';
import Dashboard from "./components/pages/Dashboard";
import { fetchAllGames } from "./lib/sanity/gameServices";
import GameShop from "./components/pages/GameShop";
import GamePage from "./components/pages/GamePage";




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
      <Route path=":slug" element={<GamePage/>}/>
    </Routes>
    </>
  )
}

export default App;

import "./App.css";

import {useState, useEffect} from 'react'
import { Route, Routes} from 'react-router-dom';
import Dashboard from "./components/pages/Dashboard";
import { fetchAllGames, fetchImages } from "./lib/sanity/gameServices";
import GameShop from "./components/pages/GameShop";
import GamePage from "./components/pages/GamePage";




function App() {
  const [game, setGame] = useState(null)

  const [images, setImages] = useState(null)

  const getGames = async () => {
  const data = await fetchAllGames()
  setGame(data)
  }

  const getImages = async () => {
  const data = await fetchImages()
  setImages(data)
  }
  


  useEffect(() =>{
    getGames()
    getImages()
  }, [])
  
  return (
    <>
    <Routes>
      <Route index element={<GameShop games={game} images={images}/>}/>
      <Route path=":slug" element={<GamePage/>}/>
    </Routes>
    </>
  )
}

export default App;

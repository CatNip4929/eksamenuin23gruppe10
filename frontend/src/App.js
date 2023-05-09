import "./App.css";

import {useState, useEffect} from 'react'
import { Route, Routes} from 'react-router-dom';
import Dashboard from "./components/pages/Dashboard";
import { fetchAllGames, fetchImages } from "./lib/sanity/gameServices";
import GameShop from "./components/pages/GameShop";
import GamePage from "./components/pages/GamePage";
import Login from "./components/Login";
import Welcome from "./components/Welcome";




function App() {
  const [game, setGame] = useState(null)
  const [images, setImages] = useState(null)
  // const [login, setlogin] = useState({email: "", password: ""})
  const [exists, setExists] = useState()
  //State for å holde på hvilken bruker som er logget inn?
  const [user, setUser] = useState({email: "", name: ""})

  //fetch for alle spill
  const getGames = async () => {
  const data = await fetchAllGames()
  setGame(data)
  }
  //fetch for alle bilder til å bruke på mine spill/ mine favoritter
  const getImages = async () => {
  const data = await fetchImages()
  setImages(data)
  }
  
  useEffect(() =>{
    getGames()
    getImages()
  }, [])
  //<Route index element={<GameShop games={game} images={images}/>}/>
  return (
    <>
    <Routes>
      <Route index element={!exists? <Login setUser={setUser} exists={exists} setExists={setExists} />
      :
      <Welcome user={user} />}
      />
      <Route path='home' element={<GameShop user={user} setUser={setUser}/>} />
      // <Route path=":slug" element={<GamePage/>}/>
    </Routes>
    </>
  )
}

export default App;

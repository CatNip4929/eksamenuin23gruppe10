import "./css/main.css";

import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { fetchAllGames, fetchImages } from "./lib/sanity/gameServices";
import MyGames from "./components/pages/MyGames";
import GamePage from "./components/pages/GamePage";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import NavBar from "./components/NavBar";
import GameShop from "./components/GameShop";
import GameCard from "./components/GameCard";
import FavoriteGames from "./components/FavoriteGames";

function App() {
  const [game, setGame] = useState(null)
  // const [images, setImages] = useState(null)
  
  const [exists, setExists] = useState(() => {
    const saved = localStorage.getItem("exists");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  //State for å holde på hvilken bruker som er logget inn?
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  //fetch for alle spill
  const getGames = async () => {
  const data = await fetchAllGames()
  setGame(data)
  }
  
  useEffect(() =>{
    getGames()
    //lagrer userdata i localStorage i nettleserens Local Storage, under Key og Value.
    localStorage.setItem("user", JSON.stringify(user))
    localStorage.setItem("exists", JSON.stringify(exists))
  }, [user, exists])
  //<Route element={<GameCard games={game} images={images}/>}/>
  return (
    <>
      <div className="App">
        <NavBar />
        <Routes>
          <Route index element={<Dashboard games={game} user={user}/> } />
          <Route path="/login" element={<Login setUser={setUser} exists={exists} setExists={setExists}/>} />
          <Route path="/gameshop" element={<GameShop gamesToShow={10}/>}/>
          <Route path=':slug' element={<GamePage games={game} />} />
          <Route path=':MyGames' element={<MyGames games={game}/>} />
          <Route path=":slug" element={<GamePage/>}/> 
          <Route path="/myfavorite" element={<FavoriteGames user={user}/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;

{
  /* <Routes>
<Route index element={!exists? <Login setUser={setUser} exists={exists} setExists={setExists} />
:
<Welcome user={user} />}
/>
<Route path='home' element={<GameShop user={user}/>} />
<Route path=":slug" element={<GamePage/>}/>
</Routes> */
}

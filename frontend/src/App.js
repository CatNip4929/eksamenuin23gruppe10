import "./css/main.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { fetchAllGames } from "./lib/sanity/gameServices";
import MyGames from "./components/pages/MyGames";
import GamePage from "./components/pages/GamePage";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import GameShop from "./components/GameShop";
import Footer from "./components/Footer";
import MyFavorites from "./components/MyFavorites";

function App() {
  const [game, setGame] = useState(null)
//State som setter localstorage til sin verdi til true
  const [exists, setExists] = useState(() => {
    const saved = localStorage.getItem("exists");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  //State for å holde på hvilken bruker som er logget inn
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

//Kilde brukt: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

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

  const handleLogout = () => {
    // Tilbakestille brukerdata og innloggingsstatus
    setUser("");
    setExists(false);
  };
  return (
    <>
      <div className="App">
      <NavBar user={user} handleLogout={handleLogout} />
        <Routes>
          <Route index element={<Dashboard games={game} user={user}/> } />
          <Route path="/login" element={<Login setUser={setUser} exists={exists} setExists={setExists} />} />
          <Route path="/gameshop" element={<GameShop gamesToShow={10}/>}/> 
          <Route path='/mygames/:slug' element={<GamePage games={game} />} />
          <Route path='/mygames' element={<MyGames user={user}/>} />
          <Route path=":slug" element={<GamePage/>}/> 
          <Route path="/favourites" element={<MyFavorites user={user}/>}/>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
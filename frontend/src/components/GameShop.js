import React, { useState, useEffect } from "react";

export default function GameShop({ gamesToShow }) {
  const [games, setGames] = useState([]);
 
  const fetchGames = async () => {
    const response = await fetch(
      `https://api.rawg.io/api/games?ordering=-released&key=37183cfb9c70422587800abe07c5aebc&page_size=100`
    );
    const data = await response.json();
    const imageGames = data.results.filter(
      (game) => game.background_image !== null
    );
    const gameLimitations = imageGames.slice(0, gamesToShow);
    setGames(gameLimitations);
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div className="gameshop-site">
      <div className="gameshop">
        <h1 className="center-title">GameShop </h1>
        <div className="games-container">
          {games?.map((game, index) => (
            <div key={index} className="game-container">
              <h2>{game?.name}</h2>
              <img
                className="gameshop-img"
                src={game?.background_image}
                style={{ maxWidth: "200px" }}
                alt={game?.name}
              />

              <p>{game?.genres.map((genre) => genre?.name).join(", ")}</p>
              <button className="buy-btn">Kjøp</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
    
// {games?.map((p,i) => (<GameCard key={i} gameinfo={p}/> ))}

// {games.map((game, index) => (
//   <div key={index}>
//     <img src={game.background_image} style={{maxWidth: "200px"}} alt={game.name} />
//     <h2>{game.name}</h2>
//     <p>{game.genres.map((genre) => genre.name).join(", ")}</p>



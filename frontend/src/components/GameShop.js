import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function GameShop({ gamesToShow }) {
  const [games, setGames] = useState([null]);
//Henter ut alle spill filtrert på om de har bilde
//Henter ut info fra rawg api, der vi filtrer på released dato. For å unngå spill uten bilder så måtte vi bruke filter og øke page sizen. Ordering kan endres til feks metacritic for å få ut andre spill
//Bruker funksjonen gameLimitations for å skille hvor mange spill som skal vises, fra 0 til ønsket antall, antallet bestemmer vi i dashboard.js og app.js
useEffect(() => {
  const fetchGames = async () => {
    const response = await fetch(
      `https://api.rawg.io/api/games?ordering=-released&key=37183cfb9c70422587800abe07c5aebc&page_size=100` //Kilde: https://api.rawg.io/docs/#operation/games_list
    );
    const data = await response.json();
    const imageGames = data.results.filter(
      (game) => game?.background_image !== null 
    );
    const gameLimitations = imageGames.slice(0, gamesToShow);
    //console.log(data)
    setGames(gameLimitations);
  };

    fetchGames();
  }, [gamesToShow]);

  
  return (
    <div className="gameshop-site">
      <div className="gameshop">
      <NavLink to="/gameshop"><h1 className="center-title">GameShop </h1></NavLink>
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
              <button className="buy-btn" >
                <a href={`https://store.steampowered.com`}>Kjøp</a></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
    //Ville vært en kul måte å kunne automatisere individuele lenker til hvert enkelt spill...
    //men rawg databasen inneholder ikke riktig spill id... det var synd...
//Her er et eksempel på det vi prøvde på:
/* <button className="buy-btn" >
  <a href={`https://${game?.stores?.map((store) => store?.store?.domain)}/app/${game?.stores?.map((store) => store?.id)}/${game?.name}`}>
    kjøp
    </a>
    </button> */
              

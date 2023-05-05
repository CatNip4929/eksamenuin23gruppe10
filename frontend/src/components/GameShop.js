import React, { useState, useEffect } from 'react';

export default function GameShop() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch(`https://api.rawg.io/api/games?ordering=-released&key=37183cfb9c70422587800abe07c5aebc&page_size=100`);
      const data = await response.json();
      const imageGames = data.results.filter((game) => game.background_image !== null);
      const gameLimitations = imageGames.slice(0, 10);
      setGames(gameLimitations);
    };

    fetchGames();
  }, []);

  return (
    <div>
      <h1>GameShop</h1>
      <div className="games-container">
      {games.map((game, index) => (
          <div key={index}>
            <img src={game.background_image} style={{maxWidth: "200px"}} alt={game.name} />
            <h2>{game.name}</h2>
            <p>{game.genres.map((genre) => genre.name).join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

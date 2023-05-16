import React from "react";
import FavoriteGames from "./FavoriteGames";
import GameShop from "./GameShop";
import MyGames from "./pages/MyGames";

export default function Dashboard({ user }) {
  return (
    <main className="container">
      <article className="game-shop">
        <GameShop gamesToShow={3} />
      </article>
      {user && (
        <>
          <article>
            <MyGames user={user} />
          </article>
          <article className="favorite-games">
            <FavoriteGames user={user} />
          </article>
        </>
      )}
    </main>
  );
}

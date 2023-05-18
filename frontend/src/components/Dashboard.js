import React from "react";
import GameShop from "./GameShop";
import MyGames from "./MyGames";
import MyFavorites from "./MyFavorites";

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
            <MyFavorites user={user} />
          </article>
        </>
      )}
    </main>
  );
}

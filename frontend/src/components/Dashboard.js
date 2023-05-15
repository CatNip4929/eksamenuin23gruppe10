import FavoriteGames from "./FavoriteGames";
import GameCard from "./GameCard";
import GameShop from "./GameShop";
import MyGames from "./pages/MyGames";
import "../css/main.css";

export default function Dashboard({ games, gameinfo, user }) {
  return (
    <>
      <main className="container">
        <article className="game-shop">
          <GameShop gamesToShow={3} />
        </article>
        <article className="my-games">
          <MyGames games={games} gameinfo={gameinfo} />
        </article>
        <article className="favorite-games">
          <FavoriteGames user={user} />
        </article>
      </main>
    </>
  );
}

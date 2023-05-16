import FavoriteGames from "./FavoriteGames";
import GameShop from "./GameShop"
import MyGames from "./pages/MyGames"

export default function Dashboard ({games, gameinfo, user}) {
  return (
    <>
      <main className="container">
        <article className="game-shop">
      <GameShop gamesToShow={3}/>
      </article>
      <article>
      <MyGames games={games} gameinfo={gameinfo}/>
      </article>
      <article className="favorite-games">
        <FavoriteGames user={user}/>
      </article>
      </main>
    </>
  );
}

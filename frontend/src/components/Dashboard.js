import FavoriteGames from "./FavoriteGames";
import GameCard from "./GameCard"
import GameShop from "./GameShop"
import MyGames from "./pages/MyGames"

export default function Dashboard ({games, gameinfo, user }) {
  return (
    <>
      <main>
        <article>
      <GameShop gamesToShow={3}/>
      </article>
      <article>
      <MyGames games={games} gameinfo={gameinfo}/>
      </article>
      <article>
        <FavoriteGames user={user}/>
      </article>
      </main>
    </>
  );
}

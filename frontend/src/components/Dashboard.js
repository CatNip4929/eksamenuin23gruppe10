import GameCard from "./GameCard"
import GameShop from "./GameShop"
import MyGames from "./pages/MyGames"

export default function Dashboard ({games, gameinfo}) {
  return (
    <>
      <main>
      <GameShop gamesToShow={3}/>
      <MyGames games={games} gameinfo={gameinfo}/>
      </main>
    </>
  );
}

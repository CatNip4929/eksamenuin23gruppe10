import GameCard from "./GameCard"
import GameShop from "./GameShop"
import MyGames from "./pages/MyGames"

export default function Dashboard ({games, images, gameinfo}) {
  return (
    <>

      <GameShop gamesToShow={3}/>
      <MyGames games={games} images={images} gameinfo={gameinfo}/>
      
    </>
  )
}
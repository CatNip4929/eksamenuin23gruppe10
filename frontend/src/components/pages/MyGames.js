import GameShop from "./GameShop"

export default function MyGames (games) {
  return (
    <>
      <h1>test</h1>
      {games?.map((p,i) => (<GameShop key={i} gameinfo={p}/> ))}
    </>
  )
}
import GameCard from "../GameCard";

export default function MyGames({ games, gameinfo }) {
  return (
    <>
      <div className="mygames">
        <h1 className="center-title">My Games</h1>
        <div className="game-list">
          {games?.map((p, i) => (
            <GameCard key={i} gameinfo={p} />
          ))}
        </div>
      </div>
    </>
  );
}

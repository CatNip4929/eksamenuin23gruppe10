import GameCard from "./GameCard";
import GameShop from "./GameShop";
import "../css/main.css";
export default function Dashboard({ games }) {
  return (
    <>
      <h1>Dashboard</h1>¨
      <GameShop gamesToShow={3} />
    </>
  );
}

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <a href="#" className="logo">
            <img
              src="./images/macslogo_white.png"
              alt="Logo with the text Mac's GameHub"
            />
          </a>
        </li>
        <li>
          <a href="#">My Games</a>
        </li>
        <li>
          <a href="#">My Favourites</a>
        </li>
        <li>
          <a href="#">Game Shop</a>
        </li>
      </ul>
    </nav>
  );
}

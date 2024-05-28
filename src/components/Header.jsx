import viteLogo from "/vite.svg";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
      <header className="wrapper">
          <NavLink to={"/"} id="brandmark">
            <img src={viteLogo} id="brandmark__logo" alt="Vite logo" />
            <h1>Helldivers Academy</h1>
          </NavLink>
      </header>
  );
}

import viteLogo from "/vite.svg";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
      <header className="wrapper">
        <div id="brandmark">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} id="brandmark__logo" alt="Vite logo" />
          </a>
          <NavLink to={"/"}>
            <h1>Helldivers Academy</h1>
          </NavLink>
        </div>
      </header>
  );
}

import viteLogo from "/vite.svg";
import { NavLink } from "react-router-dom";
import logo from "../assets/icon.png"

export function Header() {
  return (
      <header className="wrapper">
          <NavLink to={"/"} id="brandmark">
            <img src={logo} id="brandmark__logo" alt="Stratajams logo" />
            <h1 id="brandmark_text">Stratajams</h1>
          </NavLink>
      </header>
  );
}

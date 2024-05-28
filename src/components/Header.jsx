import viteLogo from "/vite.svg";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <NavLink to={"/"}><h1>Helldivers Academy</h1></NavLink>
      </div>
    </>
  );
}

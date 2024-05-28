import viteLogo from "/vite.svg";
import "../styles";

export function Header() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <h1>Helldivers Academy</h1>
      </div>
    </>
  );
}

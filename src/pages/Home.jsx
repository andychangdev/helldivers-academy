import { useEffect, useState } from "react";
import { useData } from "../contexts/dataContext.jsx";

export function HomePage() {
  const {stratagems} = useData(); 
  const [randomStratagem, setRandomStratagem] = useState(null);

  const arrowMap = {
    up: "\u2B06", 
    down: "\u2B07",
    left: "\u2B05", 
    right: "\u2B95" 
  };

  useEffect(() => {
    if (stratagems && stratagems.length > 0) {
      const randomIndex = Math.floor(Math.random() * 58);
      setRandomStratagem(stratagems[randomIndex]);
    }
  }, [stratagems]);

  function renderStratagem() {
    if (!randomStratagem) return null;

    return (
      <>
        <div className="stratagem__head">
          <img src={randomStratagem.imageUrl} className="stratagem__icon" />
          <h2>{randomStratagem.name}</h2>
        </div>

        <div className="arrow-container">
          {randomStratagem.keys.map((key, index) => (
            <span key={index} className="arrow">
              {arrowMap[key]}
            </span>
          ))}
        </div>
      </>
    );
  }

  return (
    <section className="stratagem">
      {renderStratagem()}
    </section>
  );
}
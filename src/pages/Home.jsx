import { useEffect, useState } from "react";
import { useData } from "../contexts/dataContext.jsx";
import soundfx from "../assets/beep.wav"

export function HomePage() {
  const { stratagems } = useData();
  const [randomStratagem, setRandomStratagem] = useState(null);
  const [matchedKeys, setMatchedKeys] = useState([]);
  const audio = new Audio(soundfx)
  let count = 0;

  const arrowMap = {
    up: "\u2B06", 
    down: "\u2B07",
    left: "\u2B05", 
    right: "\u2B95" 
  };

  useEffect(() => {
    if (stratagems && stratagems.length > 0) {
      const randomIndex = Math.floor(Math.random() * stratagems.length-1);
      setRandomStratagem(stratagems[randomIndex]);
    }
  }, [stratagems]);

  useEffect(() => {
    if (randomStratagem) {
      document.addEventListener('keydown', customFunction);
      return () => {
        document.removeEventListener('keydown', customFunction);
      };
    }
  }, [randomStratagem]);

  function customFunction(event) {
    if (
      (event.key === "ArrowUp" && randomStratagem.keys[count] === "up") ||
      (event.key === "ArrowDown" && randomStratagem.keys[count] === "down") ||
      (event.key === "ArrowLeft" && randomStratagem.keys[count] === "left") ||
      (event.key === "ArrowRight" && randomStratagem.keys[count] === "right")
    ) {
      setMatchedKeys((prev) => [...prev, count]);
      count++;
      audio.play();
    } else {
      setMatchedKeys([]);
      count = 0;
    }
  }

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
            <span
              key={index}
              className={`arrow ${matchedKeys.includes(index+1) ? "matched" : ""}`}
            >
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
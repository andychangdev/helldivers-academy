import { useEffect, useState } from "react";
import { useData } from "../contexts/dataContext.jsx";
import soundfx from "../assets/beep.wav";
import spacebar from "../assets/spacebar.png"

export function Operation() {
  const { stratagems } = useData();
  const [randomStratagem, setRandomStratagem] = useState(null);
  const [matchedKeys, setMatchedKeys] = useState([]);
  const [allKeysMatched, setAllKeysMatched] = useState(false); 
  const audio = new Audio(soundfx);
  let count = 0;

  const arrowMap = {
    up: "\u2B06",
    down: "\u2B07",
    left: "\u2B05",
    right: "\u2B95"
  };

  useEffect(() => {
    if (stratagems && stratagems.length > 0) {
      loadRandomStratagem();
    }
  }, [stratagems]);

  useEffect(() => {
    if (randomStratagem) {
      document.addEventListener('keydown', handleArrowKeys);
      document.addEventListener('keydown', handleSpacebar);
      return () => {
        document.removeEventListener('keydown', handleArrowKeys);
        document.removeEventListener('keydown', handleSpacebar);
      };
    }
  }, [randomStratagem, allKeysMatched]);

  function loadRandomStratagem() {
    const randomIndex = Math.floor(Math.random() * stratagems.length);
    setRandomStratagem(stratagems[randomIndex]);
    setMatchedKeys([]);
    setAllKeysMatched(false);
    count = 0;
  }

  function handleArrowKeys(event) {
    if (
      (event.key === "ArrowUp" && randomStratagem.keys[count] === "up") ||
      (event.key === "ArrowDown" && randomStratagem.keys[count] === "down") ||
      (event.key === "ArrowLeft" && randomStratagem.keys[count] === "left") ||
      (event.key === "ArrowRight" && randomStratagem.keys[count] === "right")
    ) {
      setMatchedKeys((prev) => [...prev, count]);
      count++;
      audio.play();
      if (count === randomStratagem.keys.length) {
        setAllKeysMatched(true); 
      }
    } else {
      setMatchedKeys([]);
      count = 0;
    }
  }

  function handleSpacebar(event) {
    if (event.key === " ") {
      if (allKeysMatched) {
        loadRandomStratagem();
      }
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
    <section className="control-panel">
      <div className="stratagem">
        {renderStratagem()}
      </div>
      <button className="deploy-button">
        <img src={spacebar} className="spacebar__icon" />
        <p className="deploy__text">DEPLOY</p>
      </button>
    </section>
  );
}
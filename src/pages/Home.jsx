import { useEffect, useState } from "react";

export function HomePage() {
  const [stratagem, setStratagem] = useState({ name: "", image: "", keys: []});
  const [loading, setLoading] = useState(true);

  const arrowMap = {
    up: "\u2B06", 
    down: "\u2B07",
    left: "\u2B05", 
    right: "\u2B95" 
  };

  async function getStratagem() {
    const HELLHUBAPI = `https://api-hellhub-collective.koyeb.app/api/stratagems/${Math.floor(Math.random() * 59) + 1}`;
    try {
      let response = await fetch(HELLHUBAPI);
      let stratagem = await response.json();
      showData(stratagem.data)
      setStratagem({
        name: stratagem.data.name,
        image: stratagem.data.imageUrl,
        keys: stratagem.data.keys,
      });
    } catch (error) {
      console.error("Error fetching stratagem:", error);
    } finally {
      setLoading(false);
    }
  }

  function showData(data) {
    console.log(data)
  }

  useEffect(() => {
    getStratagem();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="stratagem">

      <div className="stratagem__head">
        <img
          src={stratagem.image}
          className="stratagem__icon"
          alt={stratagem.name}
        />
        <h2>{stratagem.name}</h2>
      </div>

      <div className="arrow-container">
        {stratagem.keys.map((key, index) => (
          <span key={index} className="arrow">
            {arrowMap[key]}
          </span>
        ))}
      </div>

    </section>
  );
}

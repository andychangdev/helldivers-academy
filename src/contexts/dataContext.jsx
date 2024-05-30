import { createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "react-use";

const DataContext = createContext();

async function getStratagem(id) {
  const HELLHUBAPI = `https://api-hellhub-collective.koyeb.app/api/stratagems/${id}`;
  let response = await fetch(HELLHUBAPI);
  let stratagem = await response.json();
  return stratagem.data;
}

async function getAllStratagems() {
  const ids = Array.from({ length: 59 }, (_, i) => i + 1);
  const promises = ids.map(id => getStratagem(id));
  const stratagems = await Promise.all(promises);
  return stratagems;
}

export function DataProvider({ children }) {
  const [stratagems, setStratagems] = useLocalStorage("stratagems");

  useEffect(() => {
    async function getData() {
      if (!stratagems || stratagems.length === 0) {
        try {
          const fetchedStratagems = await getAllStratagems();
          setStratagems(fetchedStratagems);
        } catch (error) {
          console.error("Error fetching stratagems:", error);
        }
      }
    }

    getData();
  }, [setStratagems, stratagems]);

  return (
    <DataContext.Provider value={{ stratagems }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}

import { useEffect, useState } from "react";
const App = () => {
  const [item, setItem] = useState("");

  const getData = async () => {
    let response = await fetch("https://api.punkapi.com/v2/beers/random");
    let data = await response.json();
    setItem(data[0]);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>{item.name}</h1>
      {item ? (
        item.food_pairing.map((food, index) => {
          return <Food food={food} />;
        })
      ) : (
        <p>loading...</p>
      )}
      <button onClick={getData}>get data</button>
    </div>
  );
};

const Food = ({ food }) => {
  return (
    <div>
      <h1>{food}</h1>
    </div>
  );
};

export default App;

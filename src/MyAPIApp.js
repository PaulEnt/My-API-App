import { useEffect, useState } from "react";
const App = () => {
  const [item, setItem] = useState("");

  const getFN = async () => {
    let res = await fetch("https://randomuser.me/api/");
    let data = await res.json();
    setItem(data.results[0]);
  };
  useEffect(() => {
    getFN();
  }, []);
  return (
    <div>
      <h1>{item.name.first}</h1>
      {item ? (
        item.name.map((name, index) => {
          return <Name name={name} />;
        })
      ) : (
        <p>loading...</p>
      )}
      <button onClick={getFN}>Get name</button>
    </div>
  );
};

const Name = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default App;
import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import { useState } from "react";
import { useEffect } from "react";

function App() {

  const [plants, setPlants] = useState([]);
  const [query, setQuery] = useState("");
  const onUpdateQuery = (event) => setQuery(event.target.value);

  const visablePlants = plants.filter(plant => query ? plant.name.toLowerCase().includes(query.toLowerCase()) : true);

  useEffect(() => {
    fetch("http://localhost:3001/plants")
      .then(resp => resp.json())
      .then(plants => { setPlants(plants); })
  }, []);


  const [newPlant, setNewPlant] = useState({
    name: "",
    image: "",
    price: 0
  });

  // const onChangeNewPlant = (event) => {
  //   setNewPlant({...newPlant, [event.target.name]: event.target.value })
  // }

  function onChangeNewPlant(event) {
    setNewPlant({ ...newPlant, [event.target.name]: event.target.value })
  }

  const onAddPlant = (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newPlant)
    }).then(response => response.json())
      .then(submittedPlants => setPlants([...plants, submittedPlants]));
  };

  return (
    <div className="app">
      <Header />
      <PlantPage query={query} onUpdateQuery={onUpdateQuery} plants={visablePlants} onAddPlant={onAddPlant} onChangeNewPlant={onChangeNewPlant} newPlant={newPlant} />
    </div>
  );
}

export default App;

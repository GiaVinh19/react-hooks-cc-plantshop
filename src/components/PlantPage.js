import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({query, onUpdateQuery ,plants, onAddPlant, newPlant, onChangeNewPlant}) {

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} newPlant={newPlant} onChangeNewPlant={onChangeNewPlant}/>
      <Search query={query} onUpdateQuery={onUpdateQuery} />
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;

import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantCard from "./PlantCard";

function PlantList( {plants, search }) {

  const filteredListings = plants.filter((plant) => plant.name.toLowerCase().includes(search.toLowerCase()))

 const addPlantsToPage = filteredListings.map((plant) => (
      <PlantCard
        key = {plant.id}
        plant = {plant}
      />
  ))
  
  
  return (
    <div>
     <ul className="cards">{addPlantsToPage}</ul>
     <NewPlantForm />
    </div>
  );
}

export default PlantList;

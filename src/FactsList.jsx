import React from "react";
import Fact from "./Fact.jsx";
// TO DO: Create a FactsList functional component which maps through all of the animal facts in data.jsx and returns each item as a Fact component

// NOTE: In order to maintain CSS styling, do not alter the existing tags or their classNames
const FactsList = (props) => (
  props.animals.map(animal => (
    <div className="factsList">
      <Fact info={animal} currentFavorite={props.currentFavorite}/>
    </div>)
  )
)

export default FactsList;

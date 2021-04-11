import React from "react";
// TO DO: Create a Fact Functional component which returns a div in the format below

// NOTE: In order to maintain CSS styling, do not alter the existing tags or their classNames
const Fact = (props) => {
  const { animal, fact, image, favorite } = props.info;
  console.log('props from Fact', props);

  const makeFavorite = (e) => {
    e.preventDefault();
    props.currentFavorite(e.target.value);
  }

  return (
    <div className="factCard">
      <h1>{animal}</h1>
      <button value={animal} onClick={makeFavorite}>
        Click to favorite
      </button>
      <img src={image} width="600" height="400" />
      <h3>{fact}</h3>
    </div>
  );
};

export default Fact;

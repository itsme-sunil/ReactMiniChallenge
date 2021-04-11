import React from "react";
import animalFacts from "./data.jsx";
import FactsList from "./FactsList.jsx"
// TO DO: Create an App class component which renders FactsList

// Before jumping into coding, check out the README for some recommendations on the order to complete the challenge in and helpful hints
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      facts: animalFacts,
      favorite: "",
    };

    this.handleFavoriteClick = this.handleFavoriteClick.bind(this);
  }

  // TODO: when the favorite button is clicked in a Fact component, the state should get updated with the name of the animal that was favorited
  handleFavoriteClick(animal) {
    this.setState({
      favorite: animal
    });
  }

  // NOTE: In order to maintain CSS styling, do not alter the existing tags or their classNames
  render() {
    return (
      <div className="main">
        <h1 className="heading">Welcome to Animal Facts!</h1>
        <h2 className="fave">My Favorite Animal: {this.state.favorite}</h2>
        <FactsList animals={this.state.facts} currentFavorite={this.handleFavoriteClick}/>
      </div>
    );
  }
}

export default App;

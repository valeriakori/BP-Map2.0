import React, { Component } from 'react';
import "./index.css";
import List from "./components/List";
import Map from "./components/Map";
import { myPlaces } from "./utils/GoogleMapsAPI"
//"export 'default' (imported as 'places') was not found in './utils/GoogleMapsAPI'

class App extends Component {

  state = {
    query: '',
    places: myPlaces,
    selectedPlace: ''
  }

  // initialise places array
  // componentDidMount() {
  //   this.setState({ places: myPlaces })
  // }

  handleInput = query => {
    this.setState({ query: query });
  };

  handleSelection = e => {
    // setState({ seletedPlace: e })
    // handles click on ListItem and calls Maps populateInfoWindow method
  }

  render() {
    const { places, query, selectedPlace } = this.state
    return (
      <div>
        <nav>
          <h1>Budapest - A Város Amely Egysít</h1>
          <br />
          <p>(The City That Unites)</p>
        </nav>
        <main className="app-container">
          <List places={places} query={query} handleInput={this.handleInput} handleSelection={this.handleSelection} />
          <Map places={places} query={query} selectedPlace={selectedPlace} />
        </main>
      </div>
    );
  }
}

export default App;

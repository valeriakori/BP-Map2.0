import React, { Component } from "react";
import { initMap } from "../utils/GoogleMapsAPI";

class Map extends Component {

  componentDidMount() {

    let mapContainer = document.getElementById("map")
    let { places } = this.props

    initMap(places, mapContainer);
  }

  render() {
    return (
      <section className="map-section">
        <div id="map" />
      </section>
    );
  }
}

export default Map;

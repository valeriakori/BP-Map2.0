import React, { Component } from "react";
import { initMap } from "../utils/GoogleMapsAPI";

class Map extends Component {
  state = {
    markers: [],
    //infoWindow: new window.google.maps.InfoWindow(),
  };

  componentDidMount() {

    let mapContainer = document.getElementById("map")
    let { places } = this.props

    initMap(places, mapContainer);
  }


  //Display InfoWindow
  populateInfoWindow = e => {
    //call FoursquareAPI and set content
    //Template literal?
    const { infoWindow, places, markers } = this.state;

    infoWindow.setContent();
    // can I call this.map?
    // infoWindow.open(this.map, marker);


    let selectedPlace = places.findIndex(place => place.name === e);

    infoWindow.setContent(this.fetchContent(places[selectedPlace].requestId));
    infoWindow.open(this.map, markers[selectedPlace]);

    // infowindow.addListener('closeclick', function() {
    //   infowindow.marker = null;
    // });
  };

  //Hide filtered marker
  filterMarker = () => {
    if (this.props.query) {
      // filteredMarkers = marker.filter(marker => !marker.title.includes(query))
      // check if there is open InfoWindow on filteredMarker -> closeInfoWindow()
    }
  };

  closeInfoWindow = () => {};

  render() {
    return (
      <section className="map-section">
        <div id="map" />
      </section>
    );
  }
}

export default Map;

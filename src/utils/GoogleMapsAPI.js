//Array of places available on the map
const myPlaces = [
  {
    title: "Casa Baja",
    subtitle: "placeholder",
    location: { lat: 47.509154, lng: 19.0548838 },
    description:
      "My home for 3 months during which I wrote my first lines of HTML and CSS"
  },
  {
    title: "Linguarum",
    subtitle: "placeholder",
    location: { lat: 47.5175433, lng: 18.8890769 },
    description:
      "The place that inspired me to start coding. 11/10, would intern again there"
  },
  {
    title: "Erzsébet-kilátó",
    subtitle: "placeholder",
    location: { lat: 47.5182885, lng: 18.9592638 },
    requestId: "4e07708a81dc6d6d36a5ecdb"
  },
  {
    title: "Gellért-hegy",
    subtitle: "placeholder",
    location: { lat: 47.483736, lng: 19.037055 },
    requestId: "4e07708a81dc6d6d36a5ecdb"
  },
  {
    title: "Szimpla Kert",
    subtitle: "placeholder",
    location: { lat: 47.497013, lng: 19.063314 },
    requestId: "4b630e1af964a52020602ae3"
  },
  {
    title: "Hősök Tere",
    subtitle: "placeholder",
    location: { lat: 47.514943, lng: 19.077863 },
    requestId: "4b6c6ae5f964a52082382ce3"
  },
  {
    title: "Margitsziget",
    subtitle: "placeholder",
    location: { lat: 47.527607, lng: 19.04696 },
    requestId: "4bb25b49a32876b0dc7d00fe"
  },
  {
    title: "Országház",
    subtitle: "placeholder",
    location: { lat: 47.507121, lng: 19.045669 },
    requestId: "4bd6e74b5631c9b63889a630"
  }
];

// returns initialised Map
const initMap = (marker, id) => {
  let markers = []
  this.map = new window.google.maps.Map(id, {
    center: { lat: 47.497912, lng: 19.040235 },
    zoom: 13
  });
  marker.forEach(place => {
    let marker = new window.google.maps.Marker({
      position: place.location,
      map: this.map,
      title: place.title,
      animation: window.google.maps.Animation.DROP
    });
    markers.push(marker)
  });
};

//let bounds = new google.maps.LatLngBounds();
// const { markers, animate } = this.state;

//   markers.push(marker);
//   console.log(markers);

//marker.addListener("click", this.animateMarker());

//marker.addListener("click", this.populateInfoWindow());

export { myPlaces, initMap };

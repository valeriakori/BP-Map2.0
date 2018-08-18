import { fetchImage } from './FoursquareAPI'

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
    location: { lat: 47.4773613, lng: 19.0298547 },
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

let markers = [];

const bounceMarker = marker => {
  let animate = window.google.maps.Animation;

  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(animate.BOUNCE);
    setTimeout(() => {
      marker.setAnimation(null);
    }, 750);
  }
};

// returns initialised Map
const initMap = (marker, id) => {
  let animate = window.google.maps.Animation;
  this.map = new window.google.maps.Map(id, {
    center: { lat: 47.497912, lng: 19.040235 },
    zoom: 13
  });

  marker.forEach(place => {
    let marker = new window.google.maps.Marker({
      position: place.location,
      map: this.map,
      title: place.title,
      animation: animate.DROP
    });

    markers.push(marker);

    // Add bounce animation on click
    marker.addListener("click", () => {
      let animate = window.google.maps.Animation;

      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(animate.BOUNCE);
        setTimeout(() => {
          marker.setAnimation(null);
        }, 750);
      }
    });
    //marker.addListener('click', bounceMarker(something))

    // Open Infowindow on click
    //marker.addListener("click", populateInfoWindow());
  });
};

const infoWindow = new window.google.maps.InfoWindow();

const populateInfoWindow = e => {
  let selectedPlace = myPlaces.findIndex(place => place.title === e);
  bounceMarker(markers[selectedPlace]);
  infoWindow.setContent(myPlaces[selectedPlace].title);
  infoWindow.open(this.map, markers[selectedPlace]);

  let image = fetchImage(myPlaces[selectedPlace].requestId)

  console.log(image)
};

const filterMarker = (query) => {
  resetMarker()
  markers.forEach(marker => {
    if (!marker.title.includes(query)) {
      console.log(marker)
      marker.setMap(null);
    }
  })
}

const resetMarker = () => {
  markers.forEach(marker => marker.setMap(this.map))
}

export { myPlaces, initMap, populateInfoWindow, filterMarker, resetMarker };

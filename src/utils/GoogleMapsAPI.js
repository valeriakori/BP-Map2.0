import { fetchImage } from "./FoursquareAPI";

//Array of places available on the map
const myPlaces = [
  {
    title: "Casa Baja",
    subtitle: "My house in Budapest",
    location: { lat: 47.509154, lng: 19.0548838 },
    description:
      "My home for 3 months during which I wrote my first lines of HTML and CSS",
    image: "imagepath"
  },
  {
    title: "Linguarum",
    subtitle: "Startup of internship",
    location: { lat: 47.4773613, lng: 19.0298547 },
    description:
      "The place that inspired me to start coding. 11/10, would intern again there",
    image: "imagepath"
  },
  {
    title: "Erzsébet-kilátó",
    subtitle: "Elisabeth Lookout",
    location: { lat: 47.5182885, lng: 18.9592638 },
    requestId: "4baa005bf964a520e6423ae3",
    description:
      "The Elizabeth Lookout is a historic lookout tower on János hill above Budapest. Built in 1911, the tower was named after Empress Elisabeth, wife of Emperor Franz Joseph I. Frigyes Schulek was the architect. With 527 meter the János hill is the highest point of Budapest."
  },
  {
    title: "Gellért-hegy",
    subtitle: "Gellért Hill",
    location: { lat: 47.483736, lng: 19.037055 },
    requestId: "4e07708a81dc6d6d36a5ecdb",
    description:
      "Gellért Hill is a 235 m (771 ft) high hill in the 1st and 11th district of Budapest. At the top of the hill is the Citadella (Citadel), from which a view is available down both directions of the Danube."
  },
  {
    title: "Szimpla Kert",
    subtitle: "Ruin Bar",
    location: { lat: 47.497013, lng: 19.063314 },
    requestId: "4b630e1af964a52020602ae3",
    description:
      "The Szimpla Kert is located in the heart of Budapests 7th district, where most of the nightlife is going on. The ruin bar hosts many events such as flea markets, artisan markets, brunches, open mic nights and partys."
  },
  {
    title: "Hősök Tere",
    subtitle: "Hero Square",
    location: { lat: 47.514943, lng: 19.077863 },
    requestId: "4b6c6ae5f964a52082382ce3",
    description:
      "Hősök tere is one of the major squares in Budapest, Hungary, noted for its iconic statue complex featuring the Seven chieftains of the Magyars and other important Hungarian national leaders, as well as the Tomb of the Unknown Soldier."
  },
  {
    title: "Margitsziget",
    subtitle: "Margit Island",
    location: { lat: 47.527607, lng: 19.04696 },
    requestId: "4bb25b49a32876b0dc7d00fe",
    description:
      "Awesome retreat with a 5k running track, fountain shows and park directly on the Danube."
  },
  {
    title: "Országház",
    subtitle: "Parliament",
    location: { lat: 47.507121, lng: 19.045669 },
    requestId: "4bd6e74b5631c9b63889a630",
    description:
      'Simply put the most amazing piece of architecture I had the honor of seeing. My motto for the time in Budapest was " A day without a view on the Parliament, is a day bad spent." '
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

  const bounds = new window.google.maps.LatLngBounds()

  marker.forEach(place => {
    let marker = new window.google.maps.Marker({
      position: place.location,
      map: this.map,
      title: place.title,
      animation: animate.DROP
    });

    markers.push(marker);

    bounds.extend(place.location)

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

  this.map.fitBounds(bounds)
};

const infoWindow = new window.google.maps.InfoWindow();

const populateInfoWindow = e => {
  let selectedPlace = myPlaces.findIndex(place => place.title === e);
  bounceMarker(markers[selectedPlace]);
  infoWindow.setContent(myPlaces[selectedPlace].title);
  infoWindow.open(this.map, markers[selectedPlace]);

  let image = fetchImage(myPlaces[selectedPlace].requestId);

  console.log(image);
};

const filterMarker = query => {
  resetMarker();
  markers.forEach(marker => {
    if (!marker.title.includes(query)) {
      console.log(marker);
      marker.setMap(null);
    }
  });
};

const resetMarker = () => {
  markers.forEach(marker => marker.setMap(this.map));
};

export { myPlaces, initMap, populateInfoWindow, filterMarker, resetMarker };

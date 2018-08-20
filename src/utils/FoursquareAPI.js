import * as cred from "./crededentials.js";
import * as myPlaces from "./places.json";

let imageUrls = [
  {
    title: "Casa Baja",
    photoUrl: "url"
  },
  {
    title: "Linguarum",
    photoUrl: "url"
  }
];

// Returns requested venues' imageUrl
const fetchImages = () => {
  let venueID = "";
  let requestURL = ''
  // let requestURL = `https://api.foursquare.com/v2/venues/${venueID}/photos?limit=1&client_id=${
  //   cred.CLIENT_ID
  // }&client_secret=${cred.CLIENT_SECRET}&v=${cred.version}`;

  myPlaces.forEach(place => {
    requestURL = `https://api.foursquare.com/v2/venues/${venueID}/photos?limit=1&client_id=${
      cred.CLIENT_ID
    }&client_secret=${cred.CLIENT_SECRET}&v=${cred.version}`;
    if (!place.requestId) {
      return;
    } else {
      venueID = place.requestId;
      //console.log(venueID)
    }
    fetch(requestURL)
      .then(response => {
        response.json();
      })
      .then(data => {
        console.log(data)

        let imageUrl = {
          title: "",
          photoUrl: ""
        };
        let photo = "";

        if (
          data.response &&
          data.response.photos &&
          data.response.photos.items &&
          data.response.photos.items.length > 0
        ) {
          imageUrl.title = place.title;

          photo = data.response.photos.items[0];
          imageUrl.photoUrl = photo.prefix + "cap300" + photo.suffix;

          imageUrls.push(imageUrl);
        }
      })
      .catch(error => console.log("Oopsie daisy, an error occured: " + error));
  });
};

export { imageUrls, fetchImages };

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

const generateUrlArray = arr => {
  let urlsToFetch = [];

  arr.map(place => {
    if (!place.requestId) {
      return;
    } else {
      let venueID = place.requestId;

      let requestURL = `https://api.foursquare.com/v2/venues/${venueID}/photos?limit=1&client_id=${
        cred.CLIENT_ID
      }&client_secret=${cred.CLIENT_SECRET}&v=${cred.version}`;
      urlsToFetch.push(requestURL);
    }
  });

  return urlsToFetch;
};

// Returns requested venues' imageUrl
const fetchImages = () => {
  let fetchUrls = generateUrlArray(myPlaces);

  Promise.all(
    fetchUrls.map(url => {
      fetch(url)
        .then(response => {
          let data = response.json();

          console.log(data)
          // let photoUrl = "";

          // let photo = "";

          // if (
          //   data.response &&
          //   data.response.photos &&
          //   data.response.photos.items &&
          //   data.response.photos.items.length > 0
          // ) {
          //   photo = data.response.photos.items[0];
          //   photoUrl = photo.prefix + "cap300" + photo.suffix;

          //   console.log(photoUrl)
          //   imageUrls.push(photoUrl);
          // }
        })

        .catch(error =>
          console.log("Oopsie daisy, an error occured: " + error)
        );
    })
  );
};

export { imageUrls, fetchImages };

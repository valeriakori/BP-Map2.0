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




  let urlsToFetch = arr.map(place => {
    let venueID = ''

    let requestURL = `https://api.foursquare.com/v2/venues/${venueID}/photos?limit=1&client_id=${
      cred.CLIENT_ID
      }&client_secret=${cred.CLIENT_SECRET}&v=${cred.version}`

    if (!place.requestId) {
      return;
    } else {
      venueID = place.requestId
      console.log(requestURL)

    }
  })

  return urlsToFetch

}

// Returns requested venues' imageUrl
const fetchImages = () => {

  generateUrlArray(myPlaces)
  /*  Promise.all(myPlaces.map(place => {
 
     console.log(place.requestId)
 
     fetch(requestURL)
       .then(response => {
         response.json();
       })
       //.then(getUrl)
       .catch(error => console.log("Oopsie daisy, an error occured: " + error));
   })) */
};

/* const getUrl = (data) =>  {
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
} */

export { imageUrls, fetchImages };

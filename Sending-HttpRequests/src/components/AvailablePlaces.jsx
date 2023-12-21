import { useState, useEffect } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  console.log("App rendered");
  const [isLoading, setIsLoading] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  // Modern way of waiting for response
  useEffect(() => {
    async function fetchPlaces() {
      setIsLoading(true);

      try {
        const placesData = await fetchAvailablePlaces();
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            placesData,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortedPlaces);
          setIsLoading(false);
        });
      } catch (error) {
        setError({ message: error.message || "Could not fetch places" });
        // setIsLoading(false);
      }
    }
    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="An error occured" message={error.message}></Error>;
  }

  // useEffect(() => {
  //   fetch("http://localhost:3000/places")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((resData) => {
  //       return setAvailablePlaces(resData.places);
  //     });
  // }, []);

  return (
    <>
      <Places
        title="Available Places"
        places={availablePlaces}
        isLoading={isLoading}
        loadingText="Fetching place data..."
        fallbackText="No places available."
        onSelectPlace={onSelectPlace}
      />
    </>
  );
}

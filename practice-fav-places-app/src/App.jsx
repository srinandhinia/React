import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import Places from "./Components/Places";
import { AVAILABLE_PLACES } from "./data";

export default function App() {
  const [pickedPlaces, setPickedPlaces] = useState([]);
  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      console.log(prevPickedPlaces.map((place) => place.id === id));
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      } else {
        const selectedPlace = AVAILABLE_PLACES.find((place) => place.id === id);
        return [...prevPickedPlaces, selectedPlace];
      }
    });
  }

  return (
    <>
      <header className="flex flex-col items-center mb-4">
        <img
          className="h-12 w128 m-4 filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.4))"
          src={logo}
        ></img>
        <h1 className=" text-[3rem] tracking-widest font-bold">PLACE PICKER</h1>
        <p className=" max-w-sm text-md">
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I had like to visit"
          fallbacktext="Select the places you would like to visit below"
          places={pickedPlaces}
        ></Places>
        <Places
          title="Available Places"
          fallbacktext="Sorting places with distance..."
          places={AVAILABLE_PLACES}
          onSelect={handleSelectPlace}
        ></Places>
      </main>
    </>
  );
}

import { useRef, useState, useCallback, useEffect } from "react";

import Places from "./components/Places.jsx";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import AvailablePlaces from "./components/AvailablePlaces.jsx";
import { updateUserPlacesInBackened } from "./http.jsx";
import Error from "./components/Error.jsx";
import { fetchUserPlaces } from "./http.jsx";
function App() {
  const selectedPlace = useRef();

  const [userPlaces, setUserPlaces] = useState([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState();

  const [errorFetchingUSerPlaces, setErrorFetchingUserPlaces] = useState();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchAvailableUserPlaces() {
      try {
        setIsLoading(true);
        const availableUserPlaces = await fetchUserPlaces();
        console.log(availableUserPlaces);
        setUserPlaces(availableUserPlaces);
      } catch (error) {
        setErrorFetchingUserPlaces({
          message: error.message || "Failed to fetch available user places",
        });
      }
      setIsLoading(false);
    }
    fetchAvailableUserPlaces();
  }, []);

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    try {
      await updateUserPlacesInBackened([selectedPlace, ...userPlaces]);
    } catch (error) {
      setUserPlaces(userPlaces);

      setErrorUpdatingPlaces({
        message: error.message || "Error updating places in backend",
      });
    }
  }

  const handleRemovePlace = useCallback(
    async function handleRemovePlace() {
      setUserPlaces((prevPickedPlaces) =>
        prevPickedPlaces.filter(
          (place) => place.id !== selectedPlace.current.id
        )
      );
      try {
        await updateUserPlacesInBackened(
          userPlaces.filter((place) => place.id !== selectedPlace.current.id)
        );
      } catch (error) {
        setUserPlaces(userPlaces);
        setErrorUpdatingPlaces({
          message: error.message || "Failed to delete place",
        });
      }

      setModalIsOpen(false);
    },
    [userPlaces]
  );

  function handleError() {
    setErrorUpdatingPlaces(null);
  }

  return (
    <>
      {
        <Modal open={errorUpdatingPlaces} onClose={handleError}>
          {errorUpdatingPlaces && (
            <Error
              title="An error occured!!"
              message={errorUpdatingPlaces.message}
              onConfirm={handleError}
            />
          )}
        </Modal>
      }
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        {errorFetchingUSerPlaces ? (
          <Error
            title="An error occured!!"
            message={errorFetchingUSerPlaces.message}
          />
        ) : (
          <Places
            title="I'd like to visit ..."
            fallbackText="Select the places you would like to visit below."
            isLoading={isLoading}
            loadingText="Fetching available user places..."
            places={userPlaces}
            onSelectPlace={handleStartRemovePlace}
          />
        )}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;

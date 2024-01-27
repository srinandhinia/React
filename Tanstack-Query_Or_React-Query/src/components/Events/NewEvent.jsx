import { Link, useNavigate } from "react-router-dom";
import { createNewEvent, queryClient } from "../../util/http.js";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation } from "@tanstack/react-query";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function NewEvent() {
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createNewEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      // above invalidates all queries that includes keys mentioned and re-fetches the data BUT NOT INSTANTLY( ONLY WHEN ITS NAVIGATED AGAIN)
      navigate("/events");
    },
  });

  function handleSubmit(formData) {
    mutate({ event: formData });
  }

  return (
    <Modal onClose={() => navigate("../")}>
      <EventForm onSubmit={handleSubmit}>
        <>
          {isPending && <p>Submitting...</p>}
          {!isPending && (
            <>
              <Link to="../" className="button-text">
                Cancel
              </Link>
              <button type="submit" className="button">
                Create
              </button>
            </>
          )}
        </>
      </EventForm>
      {isError && (
        <ErrorBlock
          title="Failed to create new event!"
          message={
            error.info?.message ||
            "Failed to create new event, please check inputs and try again!"
          }
        />
      )}
    </Modal>
  );
}

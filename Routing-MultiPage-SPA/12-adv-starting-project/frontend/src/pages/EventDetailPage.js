import { Link, json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
export default function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");

  const eventDetail = data.event;

  return <EventItem event={eventDetail} />;
}

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    return json(
      { message: "Could not find event details for selected event" },
      { status: 500 }
    );
  } else {
    return response;
  }
}
export async function deleteAction({ request, params }) {
  const eventId = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });
  if (!response.ok) {
    throw json({ message: "Could not delete event" }, { status: 500 });
  }
  return redirect("/events");
}

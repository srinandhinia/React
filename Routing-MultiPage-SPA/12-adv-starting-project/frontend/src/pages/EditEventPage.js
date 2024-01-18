import EventForm from "../components/EventForm";
import { useRouteLoaderData } from "react-router-dom";

export default function EditEventPage() {
  const data = useRouteLoaderData("event-detail");
  const eventDetail = data.event;
  return <EventForm method="PATCH" event={eventDetail} />;
}

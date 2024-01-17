import { useParams, Link } from "react-router-dom";
export default function EventDetailPage() {
  const params = useParams();
  return (
    <div>
      <h2>Event Detail Page</h2>
      <p>
        {" "}
        Edit <Link to={`/events/${params.eventId}/edit`}>{params.eventId}</Link>
      </p>
    </div>
  );
}

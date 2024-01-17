import { Link } from "react-router-dom";

const EVENTS = [
  { id: "E1", title: "Event 1" },
  { id: "E2", title: "Event 2" },
  { id: "E3", title: "Event 3" },
  { id: "E4", title: "Event 4" },
];
export default function EventsPage() {
  return (
    <div>
      <h2>Events Page</h2>

      <ul>
        {EVENTS.map((event) => (
          <li>
            <Link to={`/events/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

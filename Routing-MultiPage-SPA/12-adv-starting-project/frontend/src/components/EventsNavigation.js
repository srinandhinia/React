import { Outlet } from "react-router-dom";
import classes from "./EventsNavigation.module.css";

function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <a href="/events">All Events</a>
          </li>
          <li>
            <a href="/events/new">New Event</a>
          </li>
          <Outlet />
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;

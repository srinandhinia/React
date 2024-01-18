import { defer, useLoaderData, json, Await } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

export default function EventsPage() {
  const { events } = useLoaderData();
  // if(data.isError){
  //   return <p>{data.message}</p>
  // }
  // const events = data.events;
  return (
    <Suspense fallback={<p>loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events" };
    // throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
    //   status: 500,
    // });

    throw json({ message: "Could not fetch events" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
    // return response;
  }
}

export function loader() {
  return defer({ events: loadEvents() });
}

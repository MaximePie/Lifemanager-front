import React, {useContext, useEffect, useState} from 'react';
import NewEventForm from "../molecules/NewEventForm"
import Event from "../molecules/Event"
import {socketContext} from "../../App";
import {getFromServer, postOnServer} from "../../server";

export default function Events() {
  const socket = useContext(socketContext);

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
    socket.on("events list updated", fetchEvents);
  }, []);

  return (
    <div className="Events">
      <NewEventForm/>
      {events.map((event, index) =>
        <Event
          onDelete={deleteEvent}
          onUpdate={updateEvent}
          event={event}
          key={index}
        />)}
    </div>
  )


  function fetchEvents() {
    getFromServer("/events").then(({data}) => {
      setEvents(data);
    })
  }



  function deleteEvent(_id) {
    postOnServer("/event/delete", {_id}).then(() => {})
  }

  function updateEvent(_id, event) {
    postOnServer("/event/update", {_id, event}).then(() => {})
  }
}
import React, { useContext, useEffect, useState } from 'react';
import { ObjectId } from 'bson';
import NewEventForm from '../molecules/NewEventForm';
import Event from '../molecules/Event';
import EventType from '../../types/Event';
import { socketContext } from '../../App';
import { getFromServer, postOnServer } from '../../server';

export default function Events() {
  const socket = useContext(socketContext);

  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    fetchEvents();
    socket.on('events list updated', fetchEvents);
  }, []);

  return (
    <div className="Events">
      <NewEventForm />
      {events.map((event) => (
        <Event
          onDelete={deleteEvent}
          onUpdate={updateEvent}
          event={event}
          key={event._id.toString()}
        />
      ))}
    </div>
  );

  function fetchEvents(): void {
    getFromServer('/events').then(({ data }) => {
      setEvents(data);
    });
  }

  function deleteEvent(_id: ObjectId): void {
    postOnServer('/event/delete', { _id }).then(() => {});
  }

  function updateEvent(event: EventType): void {
    postOnServer('/event/update', { event }).then(() => {});
  }
}

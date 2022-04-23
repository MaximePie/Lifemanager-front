import React, { useState } from 'react';
import { ObjectId } from 'bson';
import Event from '../../types/Event';

type EventProps = {
  event: Event,
  onDelete: (_id: ObjectId) => void,
  onUpdate: (event: Event) => void,
};

export default function EventComponent({ event, onDelete, onUpdate }: EventProps) {
  const {
    participants, details, event: eventName, _id: id,
  } = event;
  const [isEditMode, setEditMode] = useState<boolean>(false);

  const [newEventName, setNewEventName] = useState<Event['event']>(eventName);
  const [newDetails, setNewDetails] = useState<Event['details']>(details);
  const [newParticipants, setNewParticipants] = useState<Event['participants']>(participants);

  return isEditMode ? (
    <div className="Event">
      <button
        className="Event__button"
        onClick={deleteEvent}
        type="button"
      >
        🗑️
      </button>
      <div>
        <input
          className="Event__name"
          onChange={(e) => setNewEventName(e.target.value)}
          value={newEventName}
        />
        <input
          className="Event__participants"
          onChange={(e) => setNewParticipants(e.target.value)}
          value={newParticipants}
        />
        <input
          className="Event__details"
          onChange={(e) => setNewDetails(e.target.value)}
          value={newDetails}
        />
      </div>
      <div>
        <button
          type="button"
          className="Event__editButton"
          onClick={() => setEditMode(false)}
        >
          ❌️
        </button>
        <button
          type="button"
          className="Event__editButton"
          onClick={saveNewEvent}
        >
          💾️
        </button>
      </div>
    </div>
  )
    : (
      <div className="Event">
        <button
          className="Event__button"
          onClick={deleteEvent}
          type="button"
        >
          🗑️
        </button>
        <div>
          <p className="Event__name">{eventName}</p>
          <p className="Event__participants">{participants}</p>
          <p className="Event__details">{details}</p>
        </div>
        <button
          className="Event__editButton"
          onClick={() => setEditMode(true)}
          type="button"
        >
          🖊️
        </button>
      </div>
    );

  function deleteEvent(): void {
    onDelete(id);
  }

  function saveNewEvent(): void {
    onUpdate({
      _id: id,
      details: newDetails,
      event: newEventName,
      participants: newParticipants,
    });
    setEditMode(false);
  }
}

import React, {useState} from 'react';


export default function Event({event, onDelete, onUpdate}) {
  const {participants, details, event: eventName, _id} = event;
  const [isEditMode, setEditMode] = useState(false);

  const [newEventName, setNewEventName] = useState(eventName);
  const [newDetails, setNewDetails] = useState(details);
  const [newParticipants, setNewParticipants] = useState(participants);

  return isEditMode ? (
      <div className={`Event`}>
        <button className="Event__button" onClick={() => {onDelete(_id)}}>🗑️</button>
        <div>
          <input
            className="Event__name"
            onChange={(e) => setNewEventName(e.target.value)}
            value={newEventName}
          />
          <input
            className="Event__participants"
            onChange={e => setNewParticipants(e.target.value)}
            value={newParticipants}
          />
          <input
            className="Event__details"
            onChange={e => setNewDetails(e.target.value)}
            value={newDetails}
          />
        </div>
        <div>
          <button className="Event__editButton" onClick={() => setEditMode(false)}>❌️</button>
          <button className="Event__editButton" onClick={saveNewEvent}>💾️</button>
        </div>
      </div>
    )
    : (
    <div className={`Event`}>
      <button className="Event__button" onClick={() => {onDelete(_id)}}>🗑️</button>
      <div>
        <p className="Event__name">{eventName}</p>
        <p className="Event__participants">{participants}</p>
        <p className="Event__details">{details}</p>
      </div>
      <button className="Event__editButton" onClick={() => setEditMode(true)}>🖊️</button>
    </div>
  )

  function saveNewEvent() {
    onUpdate(_id, {
      details: newDetails,
      event: newEventName,
      participants: newParticipants,
    })
    setEditMode(false);
  }
}
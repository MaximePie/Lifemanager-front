import InputGroup from "../atoms/InputGroup";
import React, {useState} from "react";
import {postOnServer} from "../../server";

export default function NewEventForm() {

  const [newEvent, setNewEvent] = useState("");
  const [participants, setParticipants] = useState("");
  const [details, setDetails] = useState("");

  return (
    <div className="NewEventForm">
      <h4>Entrer un nouvel événement</h4>
      <InputGroup
        value={newEvent}
        label={"Evénement"}
        onChange={(event) => setNewEvent(event.target.value)}
        type={"text"}
      />
      <InputGroup
        value={participants}
        label={"Participant.e.s"}
        onChange={(event) => setParticipants(event.target.value)}
        type={"text"}
      />
      <InputGroup
        value={details}
        label={"Détails"}
        onChange={(event) => setDetails(event.target.value)}
        type={"text"}
      />
      <button onClick={save}>Enregistrer</button>
    </div>
  );

  function save() {
    postOnServer('/event', {
      participants,
      event: newEvent,
      details,
    })
      .then(() => {
        console.log("Event Saved");
      })
  }
}
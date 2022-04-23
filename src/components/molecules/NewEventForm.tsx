import React, { ChangeEvent, useState } from 'react';
import InputGroup from '../atoms/InputGroup';
import { postOnServer } from '../../server';

export default function NewEventForm() {
  const [name, setName] = useState('');
  const [participants, setParticipants] = useState('');
  const [details, setDetails] = useState('');

  return (
    <div className="NewEventForm">
      <h4>Entrer un nouvel événement</h4>
      <InputGroup
        value={name}
        label="Evénement"
        onChange={updateName}
        type="text"
      />
      <InputGroup
        value={participants}
        label="Participant.e.s"
        onChange={updateParticipants}
        type="text"
      />
      <InputGroup
        value={details}
        label="Détails"
        onChange={updateDetails}
        type="text"
      />
      <button type="button" onClick={save}>Enregistrer</button>
    </div>
  );

  function updateName(event: ChangeEvent<HTMLInputElement>): void {
    setName(event.target.value);
  }

  function updateDetails(event: ChangeEvent<HTMLInputElement>): void {
    setDetails(event.target.value);
  }

  function updateParticipants(event: ChangeEvent<HTMLInputElement>): void {
    setParticipants(event.target.value);
  }

  function save(): void {
    postOnServer('/event', {
      participants,
      event: name,
      details,
    })
      .then(() => {
        setDetails('');
        setParticipants('');
        setName('');
      });
  }
}

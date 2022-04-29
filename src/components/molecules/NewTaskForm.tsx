import React, { useState, ChangeEvent } from 'react';
import { postOnServer } from '../../server';
import InputGroup from '../atoms/InputGroup';

export default function NewTaskForm() {
  const [name, setName] = useState('');
  const [isRepetitive, setRepetitionState] = useState(false);
  const [delay, setDelay] = useState('0');

  return (
    <div className="NewTaskForm">
      <h4>Ajouter une nouvelle tâche</h4>
      <InputGroup
        type="text"
        onChange={updateTaskName}
        label="Nom"
        value={name}
      />
      <label htmlFor="isRepetitive">
        Répéter ?
        <input type="checkbox" onChange={updateRepetitiveState} checked={isRepetitive} />
      </label>
      {isRepetitive && (
        <label htmlFor="repetitionDelay">
          Délai
          <input type="text" onChange={updateDelay} value={delay} />
        </label>
      )}
      <button type="button" onClick={save}>Ajouter</button>
    </div>
  );

  function updateDelay(event: ChangeEvent<HTMLInputElement>) {
    setDelay(event.target.value);
  }

  function updateRepetitiveState(event: ChangeEvent<HTMLInputElement>) {
    setRepetitionState(event.target.checked);
  }

  function updateTaskName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function save() {
    postOnServer('/task', { name, isRepetitive, delay: parseInt(delay, 10) }).then(() => {
      setName('');
    });
  }
}

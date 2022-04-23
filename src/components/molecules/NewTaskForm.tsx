import React, { useState, ChangeEvent } from 'react';
import { postOnServer } from '../../server';
import InputGroup from '../atoms/InputGroup';

export default function NewTaskForm() {
  const [name, setName] = useState('');

  return (
    <div className="NewTaskForm">
      <h4>Ajouter une nouvelle tâche</h4>
      <InputGroup
        type="text"
        onChange={updateTaskName}
        label="Nom"
        value={name}
      />
      <button type="button" onClick={save}>Ajouter</button>
    </div>
  );

  function updateTaskName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function save() {
    postOnServer('/task', { name }).then(() => {
      setName('');
    });
  }
}

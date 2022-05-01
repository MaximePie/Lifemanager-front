import React, { useState, ChangeEvent, useEffect } from 'react';
import {
  Button,
  Checkbox, FormControlLabel, FormGroup, TextField,
} from '@mui/material';
import { postOnServer } from '../../../server';
import InputGroup from '../../atoms/InputGroup';

type NewTask = {
  name: string,
  isRepetitive: boolean,
  delay: string,
}

const initialTaskValue = {
  name: 'DADA',
  isRepetitive: false,
  delay: '0',
};

function useNewTaskForm() {
  const [newTask, setNewTask] = useState(initialTaskValue);
  const { isRepetitive } = newTask;

  useEffect(() => {
    if (isRepetitive) {
      setNewTask({
        ...newTask,
        delay: '0',
      });
    }
  }, [isRepetitive]);

  function updateTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask({
      ...newTask,
      [event.target.name]: event.target.value,
    });
  }

  function updateRepetitiveState(event: ChangeEvent<HTMLInputElement>) {
    setNewTask({
      ...newTask,
      isRepetitive: event.target.checked,
    });
  }

  function save() {
    postOnServer('/task', newTask).then(() => {
      setNewTask(initialTaskValue);
    });
  }

  return {
    newTask, save, updateRepetitiveState, updateTask,
  };
}

export default function NewTaskForm() {
  const {
    newTask: { delay, isRepetitive, name },
    updateTask,
    save,
    updateRepetitiveState,
  } = useNewTaskForm();

  return (
    <div className="NewTaskForm">
      <h4>Ajouter une nouvelle tâche</h4>
      <FormGroup>
        <TextField
          name="name"
          label="Tâche"
          variant="standard"
          onChange={updateTask}
          value={name}
        />
        <FormControlLabel
          control={(
            <Checkbox
              checked={isRepetitive}
              onChange={updateRepetitiveState}
            />
          )}
          label="Répéter ?"
        />
        {isRepetitive && (
          <TextField
            name="delay"
            label="Délai"
            variant="standard"
            onChange={updateTask}
            value={delay}
          />
        )}
        <Button
          variant="outlined"
          onClick={save}
          sx={{
            marginY: 2,
          }}
        >
          Enregistrer
        </Button>
      </FormGroup>
    </div>
  );
}

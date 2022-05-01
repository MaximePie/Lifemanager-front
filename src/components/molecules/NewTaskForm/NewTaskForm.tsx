import React from 'react';
import {
  Checkbox, FormControlLabel, FormGroup, TextField,
} from '@mui/material';
import PrimaryButton from '../../atoms/PrimaryButton';
import useNewTaskForm from './useNewTaskForm';
import StyledNewTaskForm from './style';

export default function NewTaskForm() {
  const {
    newTask: { delay, isRepetitive, name },
    updateTask,
    save,
    updateRepetitiveState,
  } = useNewTaskForm();

  return (
    <StyledNewTaskForm>
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
            label="Délai (jours)"
            variant="standard"
            onChange={updateTask}
            value={delay}
          />
        )}
        <PrimaryButton
          text="Enregistrer"
          onClick={save}
        />
      </FormGroup>
    </StyledNewTaskForm>
  );
}

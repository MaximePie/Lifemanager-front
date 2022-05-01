import { ChangeEvent, useEffect, useState } from 'react';
import { postOnServer } from '../../../server';

type NewTask = {
  name: string,
  isRepetitive: boolean,
  delay: string,
}

const initialTaskValue = {
  name: '',
  isRepetitive: false,
  delay: '0',
};

export default function useNewTaskForm() {
  const [newTask, setNewTask] = useState<NewTask>(initialTaskValue);
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

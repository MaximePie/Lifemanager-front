import moment from 'moment';
import React from 'react';
import { TaskProps, FormatedTask } from './types';

export default function useTask({ task, onDelete, onUpdate }: TaskProps) {
  const formatedTask: FormatedTask = {
    ...task,
    remainingDays: getRemainingDays(),
  };
  const {
    isOK, repetitionDelay: delay, _id, lastTimeDone,
  } = formatedTask;

  function getRemainingDays(): number | undefined {
    if (isOK && delay) {
      return delay - moment().diff(lastTimeDone, 'd');
    }
    return undefined;
  }

  function onDeleteClick() {
    onDelete(_id);
  }

  function onTick(event: React.ChangeEvent<HTMLInputElement>) {
    onUpdate(_id, event.target.checked);
  }

  return { formattedTask: formatedTask, onDeleteClick, onTick };
}

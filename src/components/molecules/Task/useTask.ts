import moment from 'moment';
import React from 'react';
import { TaskProps, FormattedTask } from './types';

export default function useTask({ task, onDelete, onUpdate }: TaskProps) {
  const {
    isOK, repetitionDelay: delay, _id, lastTimeDone,
  } = task;

  const formatedTask: FormattedTask = {
    ...task,
    remainingDays: getRemainingDays(),
  };

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

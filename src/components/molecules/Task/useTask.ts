import moment from 'moment';
import React from 'react';
import { TaskProps, FormattedTask } from './types';

export default function useTask({ task, onDelete, onUpdate }: TaskProps) {
  const {
    isOK, repetitionDelay: delay, _id, lastTimeDone,
  } = task;

  const formattedTask: FormattedTask = {
    ...task,
    remainingTime: getRemainingTime(),
  };

  /**
   * Returns the remaining time in days or in hours
   */
  function getRemainingTime(): string {
    if (isOK && delay) {
      const remainingDays = delay - moment().diff(moment(lastTimeDone), 'd');
      if (remainingDays === 0) {
        const remainingHours = delay * 24 - moment().diff(moment(lastTimeDone), 'h');
        return `${remainingHours}h`;
      }
      return `${remainingDays}j`;
    }
    return '';
  }

  function onDeleteClick() {
    onDelete(_id);
  }

  function onTick(event: React.ChangeEvent<HTMLInputElement>) {
    onUpdate(_id, event.target.checked);
  }

  return { formattedTask, onDeleteClick, onTick };
}

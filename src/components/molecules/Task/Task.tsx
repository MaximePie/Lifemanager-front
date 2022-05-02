import React from 'react';
import { TaskProps } from './types';
import useTask from './useTask';

export default function TaskComponent(props: TaskProps) {
  const {
    formattedTask: {
      name, isOK, repetitionDelay: delay, remainingDays,
    },
    onDeleteClick,
    onTick,
  } = useTask(props);

  return (
    <div className={`Task ${isOK && 'Task--isOK'}`}>
      <button
        className="Task__button"
        onClick={onDeleteClick}
        type="button"
      >
        🗑️
      </button>
      <p className="Task__name">
        {name}
        {' '}
        {delay && `(${delay}J)`}
        {remainingDays && `(${remainingDays})`}
      </p>
      <input
        type="checkbox"
        onChange={onTick}
        checked={isOK}
      />
    </div>
  );
}

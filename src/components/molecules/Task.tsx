import React from 'react';
import { ObjectId } from 'bson';
import Task from '../../types/Task';

type TaskProps = {
  task: Task,
  onDelete: (_id: ObjectId) => void,
  onUpdate: (_id: ObjectId, checked: boolean) => void,
}

export default function TaskComponent({ task, onDelete, onUpdate }: TaskProps) {
  const { name, _id, isOK } = task;

  return (
    <div className={`Task ${isOK && 'Task--isOK'}`}>
      <button
        className="Task__button"
        onClick={onDeleteClick}
        type="button"
      >
        🗑️
      </button>
      <p className="Task__name">{name}</p>
      <input
        type="checkbox"
        onChange={onTick}
        checked={isOK}
      />
    </div>
  );

  function onDeleteClick() {
    onDelete(_id);
  }

  function onTick(event: React.ChangeEvent<HTMLInputElement>) {
    onUpdate(_id, event.target.checked);
  }
}

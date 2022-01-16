import React from 'react';

export default function Task({task, onDelete, onUpdate}) {
  const {name, _id, isOK} = task;

  return (
    <div className={`Task ${isOK && 'Task--isOK'}`}>
      <button className="Task__button" onClick={() => {onDelete(_id)}}>🗑️</button>
      <p className="Task__name">{name}</p>
      <input
        type="checkbox"
        onChange={(event) => onUpdate(_id, event.target.checked)}
        checked={isOK}
      />
    </div>
  )
}
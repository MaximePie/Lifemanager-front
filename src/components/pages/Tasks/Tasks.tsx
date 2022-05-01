import React, { useContext, useEffect, useState } from 'react';
import { ObjectId } from 'bson';
import NewTaskForm from '../../molecules/NewTaskForm/NewTaskForm';
import Task from '../../molecules/Task';
import { getFromServer, postOnServer } from '../../../server';
import { socketContext } from '../../../App';
import TaskType from '../../../types/Task';

export default function Tasks() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const socket = useContext(socketContext);

  useEffect(() => {
    socket.on('tasks list updated', fetchTasks);
    fetchTasks();
  }, []);

  return (
    <div className="Tasks">
      <NewTaskForm />
      {tasks.map((task) => (
        <Task onDelete={deleteTask} onUpdate={updateTask} task={task} key={task._id.toString()} />
      ))}
    </div>
  );

  function deleteTask(_id: ObjectId) {
    postOnServer('/task/delete', { _id }).then(() => {});
  }

  function updateTask(_id: ObjectId, isOK: boolean) {
    postOnServer('/task/updateCheckStatus', { _id, isOK }).then(() => {});
  }

  function fetchTasks() {
    getFromServer('/tasks').then(({ data }) => setTasks(data));
  }
}

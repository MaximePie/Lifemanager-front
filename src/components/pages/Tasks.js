import React, {useContext, useEffect, useState} from "react";
import NewTaskForm from "../molecules/NewTaskForm"
import Task from "../molecules/Task"
import {getFromServer, postOnServer} from "../../server";
import {socketContext} from "../../App";

export default function Tasks() {

  const [tasks, setTasks] = useState([]);
  const socket = useContext(socketContext);

  useEffect(() => {
    socket.on("tasks list updated", fetchTasks);
    fetchTasks();
  }, []);

  return (
    <div className="Tasks">
      <NewTaskForm/>
      {tasks.map((task, index) => <Task onDelete={deleteTask} onUpdate={updateTask} task={task} key={index}/>)}
    </div>
  );


  function deleteTask(_id) {
    postOnServer("/task/delete", {_id}).then(() => {})
  }

  function updateTask(_id, isOK) {
    postOnServer("/task/updateCheckStatus", {_id, isOK}).then(() => {})
  }

  function fetchTasks() {
    getFromServer('/tasks').then(({data}) => setTasks(data))
  }
}
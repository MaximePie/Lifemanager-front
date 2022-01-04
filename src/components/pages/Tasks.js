import React, {useContext, useEffect, useState} from "react";
import NewTaskForm from "../molecules/NewTaskForm"
import {getFromServer} from "../../server";
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
      {tasks.map((task, index) => <Tasks task={task} key={index}/>)}
    </div>
  );

  function fetchTasks() {
    getFromServer('/tasks').then(({data}) => setTasks(data))
  }
}
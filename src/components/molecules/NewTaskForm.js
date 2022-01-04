import {useState} from "react";
import {postOnServer} from "../../server";

export default function NewTaskForm(props) {

  const [newTaskName, changeNewTaskName] = useState('');

  return (
    <div className="NewTaskForm">
      <label>
        Nouvelle tâche :
        <input
          type="text"
          onChange={(event) => changeNewTaskName(event.target.value)}
        />
      </label>
      <button onClick={save}>Ajouter</button>
    </div>
  )

  function save() {
    postOnServer('/task', {name: newTaskName}).then(() => {
      changeNewTaskName('');
    })
  }
}
import {useState} from "react";
import {postOnServer} from "../../server";
import InputGroup from "../atoms/InputGroup";

export default function NewTaskForm() {

  const [newTaskName, changeNewTaskName] = useState('');

  return (
    <div className="NewTaskForm">
      <h4>Ajouter une nouvelle tâche</h4>
      <InputGroup
        type={"text"}
        onChange={(event) => changeNewTaskName(event.target.value)}
        label={"Nom"}
        value={newTaskName}
      />
      <button onClick={save}>Ajouter</button>
    </div>
  )

  function save() {
    postOnServer('/task', {name: newTaskName}).then(() => {
      changeNewTaskName('');
    })
  }

}
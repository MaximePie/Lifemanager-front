import React, {useState} from "react";
import {postOnServer} from "../../server";
import InputGroup from "../atoms/InputGroup";

export default function NewProductForm() {

  const [newArticleName, setNewArticleName] = useState('');
  const [newArticleQuantity, setNewArticleQuantity] = useState(1);

  return (
    <div className="NewProductForm">
      <h4>Ajouter un article</h4>

      <InputGroup
        onChange={(event) => setNewArticleName(event.target.value)}
        value={newArticleName}
        type="text"
        label="Nom"
      />

      <InputGroup
        onChange={(event) => handleNewArticleQuantity(event)}
        value={newArticleQuantity}
        type="text"
        label="Quantité"
      />
      <button className="NewProductForm__saveButton" onClick={save}>Enregistrer</button>
    </div>
  )

  function handleNewArticleQuantity(event) {
    const newQuantity = parseInt(event.target.value);

    setNewArticleQuantity(isNaN(newQuantity) ? '' : newQuantity);
  }


  function save() {
    const newProduct = {
      name: newArticleName,
      quantity: newArticleQuantity
    };

    setNewArticleName('');
    setNewArticleQuantity(0)
    postOnServer("/product", newProduct).then(() => {})
  }
}
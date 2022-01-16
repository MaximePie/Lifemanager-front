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
        onChange={(event) => setNewArticleQuantity(parseInt(event.target.value))}
        value={newArticleQuantity}
        type="text"
        label="Quantité"
      />
      <button className="NewProductForm__saveButton" onClick={save}>Save</button>
    </div>
  )


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
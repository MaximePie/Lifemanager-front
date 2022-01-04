import React, {useState} from "react";
import {postOnServer} from "../../server";

export default function NewProductForm({}) {

  const [newArticleName, setNewArticleName] = useState('');
  const [newArticleQuantity, setNewArticleQuantity] = useState(1);

  return (
    <div>

      <label>
        Name
        <input
          type="text"
          onChange={(event) => setNewArticleName(event.target.value)}
          value={newArticleName}
        />
      </label>

      <label>
        Quantity
        <input
          type="text"
          onChange={(event) => setNewArticleQuantity(parseInt(event.target.value))}
          value={newArticleQuantity}
        />
      </label>

      <button onClick={save}>Save</button>
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
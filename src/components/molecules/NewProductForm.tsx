import React, { ChangeEvent, useState } from 'react';
import { postOnServer } from '../../server';
import InputGroup from '../atoms/InputGroup';
import {Button} from "@mui/material";

export default function NewProductForm() {
  const [name, setName] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="NewProductForm">
      <h4>Ajouter un article</h4>

      <InputGroup
        onChange={updateName}
        value={name}
        type="text"
        label="Nom"
      />

      <InputGroup
        onChange={updateQuantity}
        value={quantity}
        type="text"
        label="Quantité"
      />
      <Button
        variant="outlined"
        onClick={save}
      >
        Enregistrer
      </Button>
    </div>
  );

  function updateName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function updateQuantity(event: ChangeEvent<HTMLInputElement>) {
    const newQuantity = parseInt(event.target.value, 10);

    setQuantity(Number.isNaN(newQuantity) ? 0 : newQuantity);
  }

  function save() {
    const newProduct = {
      name,
      quantity,
    };

    setName('');
    setQuantity(0);
    postOnServer('/product', newProduct).then(() => {});
  }
}

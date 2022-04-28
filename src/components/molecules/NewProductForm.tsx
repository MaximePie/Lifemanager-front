import React, { ChangeEvent, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { postOnServer } from '../../server';

export default function NewProductForm() {
  const [name, setName] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="NewProductForm">
      <h4>Ajouter un article</h4>
      <TextField
        id="name"
        label="Article"
        variant="standard"
        onChange={updateName}
        value={name}
        sx={{
          margin: 1,
        }}
      />

      <TextField
        id="name"
        label="Quantité"
        variant="standard"
        onChange={updateQuantity}
        value={quantity}
        sx={{
          margin: 1,
        }}
      />

      <Button
        variant="outlined"
        onClick={save}
        sx={{
          margin: 2,
        }}
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

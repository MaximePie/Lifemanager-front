import React, { ChangeEvent } from 'react';
import { ObjectId } from 'bson';
import Product from '../../types/Product';

type ProductProps = {
  product: Product,
  onUpdate: (id: ObjectId, checked: boolean) => void,
  onDelete: (id: ObjectId) => void,
}

export default function ProductComponent({ product, onUpdate, onDelete }: ProductProps) {
  const {
    quantity, name, _id: id, isOK,
  } = product;

  return (
    <div className={`Product ${isOK && 'Product--isOK'}`}>
      <button
        className="Product__button"
        onClick={() => { onDelete(id); }}
        type="button"
      >
        🗑️
      </button>
      <p className="Product__quantity">{quantity}</p>
      <p className="Product__name">{name}</p>
      <input
        type="checkbox"
        onChange={handleCheckboxClick}
        checked={isOK}
      />
    </div>
  );

  function handleCheckboxClick(event: ChangeEvent<HTMLInputElement>): void {
    onUpdate(id, event.target.checked);
  }
}

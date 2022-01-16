import React from 'react';

export default function Product({product, onUpdate, onDelete}) {

  const {quantity, name, _id: productId, isOK} = product;

  return (
    <div className={`Product ${isOK && 'Product--isOK'}`}>
      <button className="Product__button" onClick={() => {onDelete(productId)}}>🗑️</button>
      <p className="Product__quantity">{quantity}</p>
      <p className="Product__name">{name}</p>
      <input
        type="checkbox"
        onChange={(event) => onUpdate(productId, event.target.checked)}
        checked={isOK}
      />
    </div>
  )
}
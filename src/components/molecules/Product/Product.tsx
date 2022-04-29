import React from 'react';
import styled from 'styled-components';
import ProductProps from './types';
import useProduct from './useProduct';

const Product = styled.div`
width: 280px
`;

export default function ProductComponent(props: ProductProps) {
  const { handleCheckboxClick, product, deleteProduct } = useProduct(props);
  const {
    quantity,
    name,
    isOK,
  } = product;

  return (
    <Product className={`Product ${isOK && 'Product--isOK'}`}>
      <button
        className="Product__button"
        onClick={deleteProduct}
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
    </Product>
  );
}

import { ChangeEvent, useState } from 'react';
import ProductProps from './types';

export default function useProduct({ initialProduct, onUpdate, onDelete }: ProductProps) {
  const [product, setProduct] = useState(initialProduct);
  const { _id: id } = product;

  function handleCheckboxClick(event: ChangeEvent<HTMLInputElement>): void {
    setProduct({ ...product, isOK: event.target.checked });
    onUpdate(id, event.target.checked);
  }

  function deleteProduct() {
    onDelete(id);
  }

  return { handleCheckboxClick, deleteProduct, product };
}

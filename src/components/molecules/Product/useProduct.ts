import { ChangeEvent } from 'react';
import ProductProps from './types';

export default function useProduct({ product, onUpdate, onDelete }: ProductProps) {
  const { _id: id } = product;

  function handleCheckboxClick(event: ChangeEvent<HTMLInputElement>): void {
    onUpdate(id, event.target.checked);
  }

  function deleteProduct() {
    onDelete(id);
  }

  return { handleCheckboxClick, deleteProduct, product };
}

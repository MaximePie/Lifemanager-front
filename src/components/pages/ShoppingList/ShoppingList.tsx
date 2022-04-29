import React from 'react';

import Product from '../../molecules/Product';
import NewProductForm from '../../molecules/NewProductForm';
import ShoppingListHeader from '../../molecules/ShoppingListHeader';
import useShoppingList from './useShoppingList';

export default function ShoppingList() {
  const {
    articles,
    unCheckAll,
    updateCheckStatus,
    deleteProduct,
  } = useShoppingList();

  return (
    <div className="ShoppingList">
      <ShoppingListHeader onUnCheckAll={unCheckAll} />
      <NewProductForm />
      {articles.map((product) => (
        <Product
          product={product}
          key={product._id.toString()}
          onUpdate={updateCheckStatus}
          onDelete={deleteProduct}
        />
      ))}
    </div>
  );
}

import React from 'react';

import Product from '../../molecules/Product/Product';
import NewProductForm from '../../molecules/NewProductForm';
import ShoppingListHeader from '../../molecules/ShoppingListHeader';
import useShoppingList from './useShoppingList';
import ShoppingList from './style';

export default function ShoppingListComponent() {
  const {
    articles,
    unCheckAll,
    updateCheckStatus,
    deleteProduct,
  } = useShoppingList();

  return (
    <ShoppingList>
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
    </ShoppingList>
  );
}

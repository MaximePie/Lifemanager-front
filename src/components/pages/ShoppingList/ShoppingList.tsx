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
    isLoading,
    error
  } = useShoppingList();

  return (
    <ShoppingList>
      <ShoppingListHeader onUnCheckAll={unCheckAll} />
      <NewProductForm />
      {isLoading && <div>Loading...</div>}
      {error && <div>Something went wrong ... {JSON.stringify(error)}</div>}
      {articles.map((product) => (
        <Product
          initialProduct={product}
          key={product._id.toString()}
          onUpdate={updateCheckStatus}
          onDelete={deleteProduct}
        />
      ))}
    </ShoppingList>
  );
}

import React, { useContext, useEffect } from 'react';
import { ObjectId } from 'bson';
import { useQuery, useQueryClient } from 'react-query';
import { socketContext } from '../../App';
import { getFromServer, postOnServer } from '../../server';
import Product from '../molecules/Product';
import NewProductForm from '../molecules/NewProductForm';
import ShoppingListHeader from '../molecules/ShoppingListHeader';
import ProductType from '../../types/Product';

export default function ShoppingList() {
  const queryClient = useQueryClient();
  const { data: articles } = useQuery<ProductType[], Error>('products', fetchArticles);
  const socket = useContext(socketContext);

  useEffect(() => {
    socket.on(
      'articles list updated',
      () => queryClient.invalidateQueries('products'),
    );
  }, []);

  return (
    <div className="ShoppingList">
      <ShoppingListHeader onUnCheckAll={unCheckAll} />
      <NewProductForm />
      {articles && sortedArticles().map((product) => (
        <Product
          product={product}
          key={product._id.toString()}
          onUpdate={updateCheckStatus}
          onDelete={deleteProduct}
        />
      ))}
    </div>
  );

  /**
   * Sort the articles in the articles state
   * and return it.
   * Sorting by : isOK
   */
  function sortedArticles() {
    return articles!.sort((article1) => (!article1.isOK ? -1 : 1));
  }

  function fetchArticles() {
    return getFromServer('/products').then(({ data }) => data);
  }

  function deleteProduct(_id: ObjectId) {
    postOnServer('/product/delete', { _id }).then(() => {});
  }

  function updateCheckStatus(_id: ObjectId, isOK: boolean) {
    postOnServer('/product/updateCheckStatus', { _id, isOK }).then(() => {});
  }

  function unCheckAll() {
    getFromServer('/products/uncheckAll').then(() => {});
  }
}

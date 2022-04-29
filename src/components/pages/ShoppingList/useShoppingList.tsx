import { useQuery, useQueryClient } from 'react-query';
import { useContext, useEffect } from 'react';
import { ObjectId } from 'bson';
import ProductType from '../../../types/Product';
import { socketContext } from '../../../App';
import { getFromServer, postOnServer } from '../../../server';

export default function useShoppingList() {
  const queryClient = useQueryClient();
  const { data: articles } = useQuery<ProductType[], Error>('products', fetchArticles);
  const socket = useContext(socketContext);

  useEffect(() => {
    socket.on(
      'articles list updated',
      () => queryClient.invalidateQueries('products'),
    );
  }, []);

  /**
   * Sort the articles in the articles state
   * and return it.
   * Sorting by : isOK
   */
  function sortedArticles() {
    return articles?.sort((article1) => (!article1.isOK ? -1 : 1)) || [];
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

  return {
    articles: sortedArticles(), unCheckAll, updateCheckStatus, deleteProduct,
  };
}

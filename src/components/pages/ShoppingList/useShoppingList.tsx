import { useQuery, useQueryClient } from 'react-query';
import { ObjectId } from 'bson';
import ProductType from '../../../types/Product';
import { getFromServer, postOnServer } from '../../../server';

export default function useShoppingList() {
  const queryClient = useQueryClient();
  const { data: articles } = useQuery<ProductType[], Error>('products', fetchArticles);

  function refetch() {
    queryClient.invalidateQueries('products');
  }

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
    postOnServer('/product/delete', { _id }).then(refetch);
  }

  function updateCheckStatus(_id: ObjectId, isOK: boolean) {
    postOnServer('/product/updateCheckStatus', { _id, isOK }).then(refetch);
  }

  function unCheckAll() {
    getFromServer('/products/uncheckAll').then(() => {});
  }

  return {
    articles: sortedArticles(),
    unCheckAll,
    updateCheckStatus,
    deleteProduct,
  };
}

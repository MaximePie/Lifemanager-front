import React, {useContext, useEffect, useState} from "react";
import {socketContext} from "../../App";
import {getFromServer, postOnServer} from "../../server";
import Product from "../molecules/Product"
import NewProductForm from "../molecules/NewProductForm"
import ShoppingListHeader from "../molecules/ShoppingListHeader"

export default function ShoppingList() {

  const socket = useContext(socketContext);

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    socket.on("articles list updated", fetchArticles);
    fetchArticles();
  }, []);

  return (
    <div className="ShoppingList">
      <ShoppingListHeader onUnCheckAll={unCheckAll}/>
      <NewProductForm/>
      {sortedArticles().map((product, index) => (
        <Product
          product={product}
          key={index}
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
    return articles.sort((article1) => !article1.isOK && -1)
  }

  function fetchArticles() {
    getFromServer("/products").then(({data}) => {
      setArticles(data);
    })
  }

  function deleteProduct(_id) {
    postOnServer("/product/delete", {_id}).then(() => {})
  }

  function updateCheckStatus(_id, isOK) {
    postOnServer("/product/updateCheckStatus", {_id, isOK}).then(() => {})
  }

  function unCheckAll() {
    getFromServer("/products/uncheckAll").then(() => {})
  }
}
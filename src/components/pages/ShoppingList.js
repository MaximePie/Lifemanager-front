import React, {useContext, useEffect, useState} from "react";
import {socketContext} from "../../App";
import {getFromServer, postOnServer} from "../../server";
import Product from "../molecules/Product"
import NewProductForm from "../molecules/NewProductForm"

export default function ShoppingList() {

  const socket = useContext(socketContext);

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    socket.on("articles list updated", fetchArticles);
    fetchArticles();
  }, []);

  return (
    <div className="ShoppingList">
      <h4>
        Shopping List
        <button className="ShoppingList__delete-all" onClick={deleteAllProducts}>
          Supprimer tout
        </button>
        <button className="ShoppingList__uncheck-all" onClick={unCheckAll}>
          Décocher tout
        </button>
      </h4>

      <NewProductForm/>
      {articles.map((product, index) => (
        <Product
          product={product}
          key={index}
          onUpdate={updateCheckStatus}
          onDelete={deleteProduct}
        />
      ))}
    </div>
  );

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

  function deleteAllProducts() {
    getFromServer("/products/deleteAll").then(() => {})
  }

  function unCheckAll() {
    getFromServer("/products/uncheckAll").then(() => {})
  }
}
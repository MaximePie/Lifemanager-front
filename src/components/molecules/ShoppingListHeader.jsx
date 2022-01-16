export default function ShoppingListHeader({onDeleteAll, onUnCheckAll}) {
  return (
    <div className="ShoppingListHeader">
      <h4>
        Shopping List
        <button className="ShoppingList__delete-all" onClick={onDeleteAll}>
          Supprimer tout
        </button>
        <button className="ShoppingList__uncheck-all" onClick={onUnCheckAll}>
          Décocher tout
        </button>
      </h4>
    </div>
  )
}
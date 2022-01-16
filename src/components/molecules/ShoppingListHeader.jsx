export default function ShoppingListHeader({onDeleteAll, onUnCheckAll}) {
  return (
    <div className="ShoppingListHeader">
      <h4>
        Shopping List
        <button className="ShoppingListHeader__uncheck-all" onClick={onUnCheckAll}>
          Décocher
        </button>
      </h4>
    </div>
  )
}
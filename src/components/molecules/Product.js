export default function Product({product, onUpdate, onDelete}) {

  const {quantity, name, _id: productId, isOK} = product;

  return (
    <div className={`ShoppingList__product ${isOK && 'ShoppingList__product--isOK'}`}>
      <p>Quantité : {quantity}</p>
      <p>name : {name}</p>
      <input
        type="checkbox"
        onChange={(event) => onUpdate(productId, event.target.checked)}
        checked={isOK}
      />
      <button onClick={() => {onDelete(productId)}}>Supprimer</button>
    </div>
  )
}
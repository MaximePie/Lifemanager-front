export default function Product({product, onUpdate, onDelete}) {

  const {quantity, name, _id: productId, isOK} = product;

  return (
    <div className={`Product ${isOK && 'Product--isOK'}`}>
      <p>{quantity}</p>
      <p>{name}</p>
      <input
        type="checkbox"
        onChange={(event) => onUpdate(productId, event.target.checked)}
        checked={isOK}
      />
      <button onClick={() => {onDelete(productId)}}>Supprimer</button>
    </div>
  )
}
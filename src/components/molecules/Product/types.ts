import { ObjectId } from 'bson';
import Product from '../../../types/Product';

type ProductProps = {
  initialProduct: Product,
  onUpdate: (id: ObjectId, checked: boolean) => void,
  onDelete: (id: ObjectId) => void,
}

export default ProductProps;

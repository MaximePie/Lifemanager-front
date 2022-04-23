import { ObjectId } from 'bson';

type Product = {
  quantity: number,
  name: string,
  _id: ObjectId,
  isOK: boolean
}
export default Product;

import { ObjectId } from 'bson';

type Task = {
  name: string,
  _id: ObjectId,
  isOK: boolean
}

export default Task;

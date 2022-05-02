import { ObjectId } from 'bson';

type Task = {
  name: string,
  _id: ObjectId,
  isOK: boolean,
  repetitionDelay?: number,
  lastTimeDone: Date,
}

export default Task;

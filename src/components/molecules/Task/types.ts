import { ObjectId } from 'bson';
import Task from '../../../types/Task';

export type FormatedTask = Task & {
  remainingDays?: number
}

export type TaskProps = {
  task: Task,
  onDelete: (_id: ObjectId) => void,
  onUpdate: (_id: ObjectId, checked: boolean) => void,
}

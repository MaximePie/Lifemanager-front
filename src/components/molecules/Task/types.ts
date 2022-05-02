import { ObjectId } from 'bson';
import Task from '../../../types/Task';

export type FormattedTask = Task & {
  remainingDays?: number
}

export type TaskProps = {
  task: Task,
  onDelete: (_id: ObjectId) => void,
  onUpdate: (_id: ObjectId, checked: boolean) => void,
}

export type StyledTaskProps = {
  isOK: boolean,
}

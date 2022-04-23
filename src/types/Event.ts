import { ObjectId } from 'bson';

type Event = {
  participants: string,
  details: string,
  event: string,
  _id: ObjectId;
};

export default Event;

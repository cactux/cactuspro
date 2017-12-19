import { Message } from './message';

export class Topic {
  _id;
  subject:string;
  date:Date;
  author:string;
  haveBeenRead:boolean;
  messages:Message[];
}

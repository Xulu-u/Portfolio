import { myUser } from "./myUser";
import { Comment } from "./comment";

export type Thread = {
  id?: string;
  title: string;
  description?: string;
  user?: myUser;
  date?: number;
  comments?: Comment[];
};
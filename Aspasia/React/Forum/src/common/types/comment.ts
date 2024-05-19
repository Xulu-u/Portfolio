import { myUser } from "./myUser";

export type Comment = {
  id?: string;
  content: string;
  user?: myUser;
  date?: number;
};
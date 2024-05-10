import { myUser } from "./myUser";

export type Thread = {
  id?: string;
  title: string;
  content?: string;
  user?: myUser;
  comments?: string[];
};
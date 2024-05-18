import { myUser } from "./myUser";

export type Thread = {
  id?: string;
  title: string;
  description?: string;
  user?: myUser;
  date?: number;
  comments?: string[];
};
import { createContext, useState, useContext, Dispatch, SetStateAction, ReactNode } from 'react';
import {myUser} from '../../common/types/myUser';

interface IContext {
  forumUser: myUser | undefined;
  setForumUser: Dispatch<SetStateAction<myUser | undefined>>;
}

interface ForumUserProviderProps {
  children: ReactNode;
}

const defaultContext: IContext = {
  forumUser: undefined,
  setForumUser: () => {},
};

const AppContext = createContext<IContext>(defaultContext);

export const useForumUserContext = () => useContext(AppContext);

const ForumUserProvider: React.FC<ForumUserProviderProps> = ({ children }) => {
  const [forumUser, setForumUser] = useState<myUser | undefined>();
  return (
    <AppContext.Provider value={{ forumUser, setForumUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default ForumUserProvider;
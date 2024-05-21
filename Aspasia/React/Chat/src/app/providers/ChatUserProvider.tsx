
import { createContext, useState, useContext, Dispatch, SetStateAction, ReactNode } from 'react';
import {myUser} from '../../common/types/myUser';

interface IContext {
  chatUser: myUser | undefined;
  setChatUser: Dispatch<SetStateAction<myUser | undefined>>;
}

interface ChatUserProviderProps {
  children: ReactNode;
}

const defaultContext: IContext = {
  chatUser: undefined,
  setChatUser: () => {},
};

const AppContext = createContext<IContext>(defaultContext);

export const useChatUserContext = () => useContext(AppContext);

const ChatUserProvider: React.FC<ChatUserProviderProps> = ({ children }) => {
  const [chatUser, setChatUser] = useState<myUser | undefined>();
  return (
    <AppContext.Provider value={{ chatUser, setChatUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default ChatUserProvider;
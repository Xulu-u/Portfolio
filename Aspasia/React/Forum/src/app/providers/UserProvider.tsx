import { createContext, useState, useContext, Dispatch, SetStateAction, ReactNode } from 'react';
import {myUser} from '../../common/types/myUser';

interface IContext {
  user: myUser | undefined;
  setUser: Dispatch<SetStateAction<myUser | undefined>>;
}

const defaultContext: IContext = {
  user: undefined,
  setUser: () => {},
};

const AppContext = createContext<IContext>(defaultContext);

export const useUserContext = () => useContext(AppContext);

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<myUser | undefined>();
  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default UserProvider;
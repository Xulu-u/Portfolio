import { createContext, useState, useContext } from 'react';

const AppContext = createContext({userID: undefined, setUserID: () => {}});

export const useUserIDContext = () => useContext(AppContext);

const UserIDProvider = ({ children }) => {
    const [userID, setUserID] = useState<string>();
    return (
        <AppContext.Provider value={{userID, setUserID}}>
            {children}
        </AppContext.Provider>
    );
}

export default UserIDProvider;
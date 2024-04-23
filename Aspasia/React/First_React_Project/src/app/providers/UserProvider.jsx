import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext();
export const useUserContext = () => useContext(AppContext);

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    return (
        <AppContext.Provider value={[user, setUser]}>
            {children}
        </AppContext.Provider>
    );
}

UserProvider.propTypes = {
    children: PropTypes.any,
};

export default UserProvider;
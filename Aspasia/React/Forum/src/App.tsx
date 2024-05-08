import { useEffect } from 'react';
import './App.css'
import Router from './app/Router';
import { useUserContext } from './app/providers/UserProvider'
import { onAuthStateChanged } from 'firebase/auth';
import { myUser } from './common/types/myUser';

function App() {

  const {user, setUser} = useUserContext();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
        if (user) {
            console.log('user', user, ' userId:', user.uid);
            setUser({user: user.displayName, id: user.uid} as myUser);
        } else {
            console.log("No user logged");
            setUser(undefined);
        }
    });
}, []);

  return user ? <Router/> : <Login/>
}

export default App

import { useEffect } from 'react';
import './App.css'
import Router from './app/Router';
import { useChatUserContext } from './app/providers/ChatUserProvider'
import { onAuthStateChanged } from 'firebase/auth';
import { myUser } from './common/types/myUser';
import Login from './pages/Login/Login';
import { auth } from './app/services/firebase';

function App() {
  const {chatUser, setChatUser} = useChatUserContext();
  useEffect(() => {
    onAuthStateChanged(auth, user => {
        if (user) {
          console.log('user', user, ' userId:', user.uid);
          setChatUser({username: user.displayName, id: user.uid, email: user.email} as myUser);
          console.log(chatUser)
        } else {
          console.log("No user logged");
          setChatUser(undefined);
        }
    });
}, []);

  return chatUser ? <Router/> : <Login/>
}

export default App

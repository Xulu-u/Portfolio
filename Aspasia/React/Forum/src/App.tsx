import { useEffect } from 'react';
import './App.css'
import Router from './app/Router';
import { useForumUserContext } from './app/providers/ForumUserProvider'
import { onAuthStateChanged } from 'firebase/auth';
import { myUser } from './common/types/myUser';
import Login from './pages/Login/Login';
import { auth } from './app/services/firebase';

function App() {
  const {forumUser, setForumUser} = useForumUserContext();
  useEffect(() => {
    onAuthStateChanged(auth, user => {
        if (user) {
            console.log('user', user, ' userId:', user.uid);
            setForumUser({username: user.displayName, id: user.uid, email: user.email} as myUser);
        } else {
            console.log("No user logged");
            setForumUser(undefined);
        }
    });
}, []);

  return forumUser ? <Router/> : <Login/>
}

export default App

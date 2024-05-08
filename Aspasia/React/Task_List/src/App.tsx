import './App.css'
import UserProvider from './app/providers/UserIDProvider';
import Router from './app/Router';

const App = () => <UserProvider><Router/></UserProvider>;

export default App;

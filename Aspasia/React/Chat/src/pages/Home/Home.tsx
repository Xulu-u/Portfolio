import { useChatUserContext } from '../../app/providers/ChatUserProvider';
import { logout } from '../../app/services/usersApi';

const Home = () => {
        const {chatUser} = useChatUserContext();

        const handleLogOut = () => {
                console.log("Log out");
                logout();
        }
        return(
                <div>
                        <h2>Home</h2>
                        {chatUser?.username}
                        <br />
                        <button onClick={handleLogOut}>Log Out</button>
                        
                        
                </div>
        )
}

export default Home;
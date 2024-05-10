import { useForumUserContext } from '../../app/providers/ForumUserProvider';
import { logout } from '../../app/services/usersApi';

const Home = () => {
        const {forumUser} = useForumUserContext();

        const handleLogOut = () => {
                console.log("Log out");
                logout();
        }
        return(
                <div>
                        <h2>Home</h2>
                        {forumUser?.username}
                        <br />
                        <button onClick={handleLogOut}>Log Out</button>
                        
                        
                </div>
        )
}

export default Home;
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { User } from "../../common/types/User";
import { access, getUserById } from "../../app/services/usersApi";
import { useUserIDContext } from '../../app/providers/UserIDProvider';

const Home = () => {
        const [user, setUser] = useState<User>({name:''});
        const {userID, setUserID} = useUserIDContext();

        const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
                setUser({...user, name: event.target.value });
        }

        const handleUserAccess = async () => {
                setUserID(await access(user.name || ''));
        }

        return(
                <div>
                        <h2>Introduce your name:</h2>
                        <p>if it's not in the database already, it will be added</p>
                        <input
                                type="text"
                                id="user"
                                onChange={handleUserChange}
                                value={user.name}
                        />
                        <button onClick={handleUserAccess}>Access</button>
                        <br />
                        {userID}
                        <br />
                </div>
        )
}

export default Home;
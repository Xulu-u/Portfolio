import { useState } from "react";
import { myUser } from "../../common/types/myUser";
import { access,  } from "../../app/services/usersApi";
import { useUserContext } from '../../app/providers/UserProvider';

const Home = () => {
        const [user, setUser] = useState<myUser>({user:'', id:''});
        const {myUser, setMyUser} = useUserContext();

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
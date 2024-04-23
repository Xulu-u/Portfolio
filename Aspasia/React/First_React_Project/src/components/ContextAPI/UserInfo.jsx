import { useUserContext } from '../../app/providers/UserProvider';

const UserInfo = () => {
    const [user] = useUserContext();
    return (<p>{user.username}</p>);
}

export default UserInfo;
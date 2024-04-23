import { useUserContext } from '../../app/providers/UserProvider';

const Login = () => {
    const [, setUser] = useUserContext();

    return (
        <button onClick={() => setUser({ username: 'Pedro', uid: 33 })}>Save User</button>
    );
}

export default Login;
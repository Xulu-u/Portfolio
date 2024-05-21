import { Link } from 'react-router-dom'

const Layout = ({ children} : {children:React.ReactNode}) => {
    return (
        <div>
            <h1>Chat</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/chat" >Chat</Link></li>
                </ul>
            </nav>
            <main>{children}</main>
        </div>
    )
}

export default Layout;
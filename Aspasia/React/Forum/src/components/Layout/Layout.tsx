import { Link } from 'react-router-dom'

const Layout = ({ children} : {children:React.ReactNode}) => {
    return (
        <div>
            <h1>Forum</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/threads" >Threads</Link></li>
                </ul>
            </nav>
            <main>{children}</main>
        </div>
    )
}

export default Layout;
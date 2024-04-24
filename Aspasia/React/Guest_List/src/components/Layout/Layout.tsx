import { Link } from 'react-router-dom'

const Layout = ({ children} : {children:React.ReactNode}) => {
    return (
        <div>
            <h1>Guest List Exercise (CRUD)</h1>
            <nav>
                <ul>
                    <li><Link to="/">Read</Link></li>
                    <li><Link to="/create" >Create</Link></li>
                    <li><Link to="/delete" >Delete</Link></li>
                </ul>
            </nav>
            <main>{children}</main>
        </div>
    )
}

export default Layout;
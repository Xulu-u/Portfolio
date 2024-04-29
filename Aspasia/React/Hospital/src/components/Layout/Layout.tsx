import { Link } from 'react-router-dom'

const Layout = ({ children} : {children:React.ReactNode}) => {
    return (
        <div>
            <h1>Hospital Exercise (CRUD)</h1>
            <nav>
                <ul>
                    <li><Link to="/">Read</Link></li>
                    <li><Link to="/create" >Create</Link></li>
                </ul>
            </nav>
            <main>{children}</main>
        </div>
    )
}

export default Layout;
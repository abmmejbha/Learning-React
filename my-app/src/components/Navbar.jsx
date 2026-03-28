// components/Navbar.jsx
import {Link } from 'react-router-dom'

function Navbar() {
    return (
        <div style={{backgroundColor: 'lightblue', padding: '10px'}}>
        <nav>
            <Link to="/"> Home </Link> 
            <Link to="/users"> Users </Link>    
            <Link to="/About"> About </Link> 
            <Link to="/Contact"> Contact </Link>
        </nav>
        </div>
    )
}
export default Navbar
import { Link } from "react-router-dom";

const Navbar = ({onAboutClick}) => {

    return ( 
        <nav className="navbar">
            <h1>Phan Gia Bảo</h1>
            <div className="links">
                <Link to="/" >Home</Link>
                <Link to="/CV">About me</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;
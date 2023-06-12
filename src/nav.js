import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Nav() {
    const { currentUser } = useSelector((state) => state.user);
    //console.log(currentUser);
    return (
        <nav className="nav nav-tabs mb-2">
            <Link className="nav-link" to="/labs/a3">
                A3</Link>
            <Link className="nav-link" to="/labs/a4">
                A4</Link>
            <Link className="nav-link" to="/hello">
                Hello</Link>
            {currentUser && <Link className="nav-link" to="/tuiter">
                Tuiter</Link>}
            {!currentUser && <Link className="nav-link" to="/tuiter/login">
                Login</Link>}
            {!currentUser && <Link className="nav-link" to="/tuiter/register">
                Register</Link>}
            { currentUser && <Link className="nav-link" to="/tuiter/profile">
                Profile</Link>}
        </nav>
    );
}
export default Nav;
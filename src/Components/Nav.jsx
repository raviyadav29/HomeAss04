import { useContext } from 'react'
import "./Nav.css";
import { AuthContext } from './context';

const Nav = () => {
    const { setIsLoggedIn } = useContext(AuthContext);
    return (
        <div className="nav">
            <div id="title">
                <h2>React Context App</h2>
            </div>
            <div id="menu">
                <a href="">Home</a>
                <a href="">Profile</a>
                <a href="">Products</a>
                <a href="">Support</a>
                <button onClick={() => { setIsLoggedIn(false) }}>Logout</button>
                <span style={{ marginLeft: "30px", color: "yellow", fontsize: "22px" }}>
                    <b>Kabir</b>
                </span>
            </div>
        </div>
    )
}

export default Nav

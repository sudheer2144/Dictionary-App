
import { NavLink } from "react-router-dom"
import "../styles/NavBar.css"

export const NavBar = () => {
    return (
        <nav>
            <div id="logo">
                <h1>Dictionary App</h1>
            </div>

            <div className="navLinks">
                <NavLink className={"link"} to={""}>Home</NavLink>
                <NavLink className={"link"} to={"./history"}>History</NavLink>
            </div>

        </nav>
    )
}

import { NavLink } from "react-router-dom";

export function Footer () {
    return (
        <footer>
            <NavLink to={"/userguide"}>User Guide</NavLink>
        </footer>
    )
}
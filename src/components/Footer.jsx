import { NavLink } from "react-router-dom";

export function Footer () {
    return (
        <nav>
            <NavLink to={"/userguide"}>User Guide</NavLink>
        </nav>
    )
}
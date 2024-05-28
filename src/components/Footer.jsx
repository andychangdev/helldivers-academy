import { NavLink } from "react-router-dom";

export function Footer () {
    return (
        <footer className="wrapper">
            <NavLink to={"/userguide"}>User Guide</NavLink>
        </footer>
    )
}
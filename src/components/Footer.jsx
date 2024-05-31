import { Link } from "react-router-dom";

export function Footer () {
    return (
        <footer>
            <Link to={"/about"}>About</Link>
            <p>/</p>
            <Link to={"https://github.com/andychangdev/stratajams"}>Github</Link>
        </footer>
    )
}
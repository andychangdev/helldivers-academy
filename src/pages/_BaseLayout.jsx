import { Outlet } from "react-router-dom";
import { Header, Footer} from "../components";

export function BaseLayout() {
    return (
        <div className="content-grid">
        <Header />
        <Outlet />
        <Footer />
        </div>
    )
}
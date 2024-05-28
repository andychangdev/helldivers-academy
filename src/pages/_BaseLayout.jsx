import { Outlet } from "react-router-dom";
import { Header, Footer} from "../components";

export function BaseLayout() {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}
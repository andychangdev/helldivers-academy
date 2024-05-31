import { Outlet } from "react-router-dom";
import { Header, Footer} from "../components";
import { FloatingBoxes } from "../components/FloatingBoxes";

export function BaseLayout() {
    return (
        <main className="content-grid">
        <Header />
        <Outlet />
        <Footer />
        <FloatingBoxes />
        </main>
    )
}
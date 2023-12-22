import { Outlet } from "react-router-dom";
import Navbar from "../components/Navabar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;
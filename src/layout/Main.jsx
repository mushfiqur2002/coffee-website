import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Main = () => {
    return (
        <div className="max-w-[1400px] mx-10 lg:mx-24 xl:mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
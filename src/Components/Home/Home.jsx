import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";


const Home = () => {
    return (
        <div className="mx-10">
            <Navbar></Navbar>
            <div className="flex gap-2">
                <div className="w-1/4">
                    <Sidebar></Sidebar>
                </div>
                <div className="w-3/4 bg-orange-100">
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default Home;
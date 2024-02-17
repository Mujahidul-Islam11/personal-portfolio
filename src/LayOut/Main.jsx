import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useState } from "react";


const Main = () => {
    const [dark, setDark] = useState(false)
    return (
        <div className={`${dark ?"bg-[#060024] text-white": ""}`}>
            <Navbar dark={dark} setDark={setDark}></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
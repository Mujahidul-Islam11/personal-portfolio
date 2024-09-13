import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import DarkMode from "../DarkMode";
import { useState } from "react";


const Main = () => {
    const [dark, setDark] = DarkMode()
    const [open, setOpen] = useState(false);

    return (
        <div className={`${dark ?"bg-[#060024] text-white": ""} px-4 md:px-0`} onClick={()=> setOpen(false)}>
            <div className="">
            <Navbar open={open} setOpen={setOpen} dark={dark} setDark={setDark}></Navbar>
            </div>
            <div className=" container mx-auto">
            <Outlet dark={dark} setDark={setDark}></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;
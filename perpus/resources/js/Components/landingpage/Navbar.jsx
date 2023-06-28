import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import CButton from "./button";
import Dropdown from "../Dropdown";

export default function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("translate-y-[100vh]");
    };

    return (
        <header className="flex items-center h-14 justify-between md:justify-center z-10 backdrop-blur-lg shadow-lg top-0 px-5 sticky">
            <h3 className="font-bold text-xl md:hidden">Skensa</h3>
            <nav
                className="fixed flex flex-col justify-center items-center gap-1 w-full h-[100vh] md:h-full backdrop-blur-lg bg-gray-300 bg-opacity-60 md:bg-transparent left-0 -top-[100vh] md:top-0 md:flex md:flex-row  duration-1000"
                ref={navRef}
            >
                <CButton />
                <CButton />
                <CButton />
                <button
                    className="absolute top-2 right-2 md:hidden"
                    onClick={showNavbar}
                >
                    <FaTimes className="h-8 w-8" />
                </button>
            </nav>
            <button className="md:hidden" onClick={showNavbar}>
                <FaBars className="h-5 w-5" />
            </button>
        </header>
    );
}

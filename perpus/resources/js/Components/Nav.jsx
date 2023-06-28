import Dropdown from "./landingpage/Dropdown";
import CButton from "./landingpage/button";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

export default function Nav() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };
    return (
        <header className="backdrop-blur-lg shadow-lg top-0 md:flex items-center z-10 sticky">
            <div className="w-full">
                <div className="flex items-center justify-center relative ">
                    <div className="flex  items-center px-4">
                        <nav
                            id="nav-menu"
                            className="py-5 bg-white shadow-lg rounded-lg w-full right-4 top-full md:block md:static md:bg-transparent md:max-w-full md:shadow-none md:rounded-none"
                        >
                            <ul className="hidden md:flex ">
                                <li className="group">
                                    <CButton></CButton>
                                </li>
                                <li className="group">
                                    <Dropdown></Dropdown>
                                </li>
                                <li className="group">
                                    <Dropdown></Dropdown>
                                </li>
                                <li className="group">
                                    <Dropdown></Dropdown>
                                </li>
                            </ul>
                            <button
                                className="nav-btn nav-close-btn md:hidden"
                                onClick={showNavbar}
                            >
                                <FaTimes />
                            </button>
                        </nav>
                        <button
                            className="nav-btn nav-close-btn md:hidden"
                            onClick={showNavbar}
                        >
                            <FaBars />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

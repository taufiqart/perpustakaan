import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import CButton from "./CButton";
import Dropdown from "./Dropdown";
export default function Navbar({ data }) {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("translate-y-[200vh]");
    };

    return (
        <header className="flex items-center w-full h-14 justify-between md:justify-center z-20 backdrop-blur-lg shadow-lg top-0 px-5 sticky">
            <h3 className="font-bold text-xl md:hidden">Skensa</h3>
            <nav
                className="fixed flex flex-col justify-center items-center gap-1 w-full h-screen md:h-full backdrop-blur-lg bg-white bg-opacity-60  left-0 -top-[200vh] md:top-0 md:flex md:flex-row  duration-1000"
                ref={navRef}
            >
                {data &&
                    data.map((dat) => {
                        if (dat.child.length > 0) {
                            return <Dropdown data={dat} />;
                        } else {
                            return <CButton data={dat} />;
                        }
                    })}
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

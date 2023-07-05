import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import CButton from "./CButton";
import Dropdown from "./Dropdown";
export default function Navbar({ data, className }) {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("translate-y-[200vh]");
    };
    
    window.addEventListener('resize',(e)=>{
        if(window.innerWidth >= 768){
            navRef.current.classList.remove("translate-y-[200vh]");
        }
    })

    return (
        <header
            className={`flex items-center h-14 md:h-full w-full  justify-between md:justify-center z-20 backdrop-blur-lg shadow-lg top-0 px-5 sticky bg-white bg-opacity-60 ${className}`}
        >
            <h3 className="font-bold text-xl md:hidden">Skensa</h3>
            <nav
                className="fixed md:relative flex md:max-w-[90%] mx-auto flex-col justify-center md:flex py-4 flex-wrap items-center gap-1 w-full h-screen md:h-full backdrop-blur-lg md:backdrop-blur-none bg-white md:bg-transparent  bg-opacity-60 left-0 -top-[200vh] md:top-0  md:flex-row  duration-1000"
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

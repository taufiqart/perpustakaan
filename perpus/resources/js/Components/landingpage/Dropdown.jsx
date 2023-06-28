import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { useState } from "react";
import CButton from "./button";

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        // <div className="relative flex flex-col items-center w-full md:rounded-xl">
        //     <button
        //         onMouseEnter={() => setIsOpen((prev) => !prev)}
        //         className="relative inline-flex items-center justify-center px-5 py-1 overflow-hidden font-medium transition duration-300 ease-out rounded-full hover:shadow-xl group hover:ring-1 hover:ring-green-500"
        //     >
        //         <span class="absolute inset-0 w-full h-full group-hover:bg-gradient-to-br from-blue-400 to-green-400"></span>
        //         <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-90 translate-x-24 group-hover:bg-green-500 rounded-full opacity-80 group-hover:rotate-45 ease"></span>
        //         <span class="relative text-black group-hover:text-white">
        //             Beranda
        //         </span>
        //         {!isOpen ? (
        //             <AiOutlineCaretDown className=" relative group-hover:text-white h-4" />
        //         ) : (
        //             <AiOutlineCaretUp className="relative group-hover:text-white h-4" />
        //         )}
        //     </button>

        //     {isOpen && (
        //         <div className="backdrop-blur-sm  absolute top-11">
        //             <ul className="block">
        //                 <li className="group">
        //                     <a
        //                         href="/"
        //                         className="text-base bg-white  text-black active:bg-blue-400 hover:bg-green-400 hover:drop-shadow-xl hover:text-white focus:ring focus:ring-green-300 duration-400 py-2 px-7 mx-2 my-[1px] flex"
        //                     >
        //                         Beranda
        //                     </a>
        //                 </li>
        //                 <li className="group">
        //                     <a
        //                         href="/"
        //                         className="text-base bg-white  text-black active:bg-blue-400 hover:bg-green-400 hover:drop-shadow-xl hover:text-white focus:ring focus:ring-green-300 duration-400 py-2 px-7 mx-2 my-[1px] flex"
        //                     >
        //                         Beranda
        //                     </a>
        //                 </li>
        //             </ul>
        //         </div>
        //     )}
        // </div>

        <div className="block w-full md:w-24">
            <a
                onClick={() => setIsOpen((prev) => !prev)}
                class="relative w-full md:w-24 inline-flex items-center justify-center px-4 py-1 overflow-hidden font-medium transition duration-300 ease-out md:rounded-full hover:shadow-xl group hover:ring-1 hover:ring-green-500"
            >
                <span class="absolute inset-0 w-full h-full group-hover:bg-gradient-to-br from-blue-400 to-green-400"></span>
                <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-90 translate-x-24 group-hover:bg-green-500 rounded-full opacity-80 group-hover:rotate-45 ease"></span>
                <span class="relative text-black group-hover:text-white">
                    Drop
                </span>
                {!isOpen ? (
                    <AiOutlineCaretDown className=" relative group-hover:text-white h-4" />
                ) : (
                    <AiOutlineCaretUp className="relative group-hover:text-white h-4" />
                )}
            </a>
            {isOpen && (
                <div className="block md:absolute md:flex md:flex-col">
                    <a
                        href="#_"
                        class="relative bg-white w-full md:w-24 inline-flex items-center justify-center px-4 py-1 font-medium duration-200 md:rounded-tr-sm hover:shadow-xl group hover:ring-1 hover:bg-green-400"
                    >
                        <svg
                            className="absolute -left-3 top-0 fill-white group-hover:fill-green-400 -z-10"
                            xmlns="http://www.w3.org/2000/svg"
                            width="23"
                            height="16"
                            viewBox="0 0 23 16"
                            fill="none"
                        >
                            <path d="M0.750831 0.0224888L22.738 -0.000979136L16.2414 15.6263L0.750831 0.0224888Z" />
                        </svg>
                        issi
                    </a>
                    <a
                        href="#_"
                        class="relative bg-white w-full md:w-24 inline-flex items-center justify-center px-4 py-1 font-medium duration-200 md:rounded-none hover:shadow-xl group hover:ring-1 hover:bg-green-400"
                    >
                        issi
                    </a>
                    <a
                        href="#_"
                        class="relative bg-white w-full md:w-24 inline-flex items-center justify-center px-4 py-1 font-medium duration-200 md:rounded-b-sm hover:shadow-xl group hover:ring-1 hover:bg-green-400"
                    >
                        issi
                    </a>
                </div>
            )}
        </div>
    );
}

export default Dropdown;

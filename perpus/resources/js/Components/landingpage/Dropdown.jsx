import {AiOutlineCaretDown, AiOutlineCaretUp} from "react-icons/ai";
import { useState } from "react";

function Dropdown(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="relative flex flex-col items-center rounded-xl">
            <button onClick={ ()=> setIsOpen((prev) => !prev)} className="text-black group-hover:bg-green-500 group-hover:text-white focus:ring focus:ring-green-300 group-hover:shadow-lg px-8 py-2  rounded-full flex justify-between items-center ">
                Kontol
                {!isOpen ? (
                    <AiOutlineCaretDown className="h-4"/>
                    ) : (
                    <AiOutlineCaretUp className="h-4"/>

                    )}
            </button>

            {isOpen && (
                <div className="backdrop-blur-sm  absolute top-11">
                    <ul className="block">
                        <li className="group">
                            
                            <a href="/" className="text-base bg-white  text-black active:bg-blue-500 hover:bg-green-500 hover:drop-shadow-xl hover:text-white focus:ring focus:ring-green-300 duration-500 py-2 px-7 mx-2 my-[1px] flex">Beranda</a>
                        </li>
                        <li className="group">
                            <a href="/" className="text-base bg-white  text-black active:bg-blue-500 hover:bg-green-500 hover:drop-shadow-xl hover:text-white focus:ring focus:ring-green-300 duration-500 py-2 px-7 mx-2 my-[1px] flex">Beranda</a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Dropdown

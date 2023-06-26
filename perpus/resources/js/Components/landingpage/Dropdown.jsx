import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { useState } from "react";

function Dropdown({ data }) {
    const [isOpen, setIsOpen] = useState(false);
    // data && console.log(data.child[0]);
    return (
        <div className="relative flex flex-col items-center w-full md:rounded-xl">
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="text-black w-full group-hover:bg-green-400 group-hover:text-white focus:ring focus:ring-green-300 group-hover:shadow-lg md:px-8 md:py-2  md:rounded-full flex justify-between items-center "
            >
                {data && data.title}
                {!isOpen ? (
                    <AiOutlineCaretDown className="h-4" />
                ) : (
                    <AiOutlineCaretUp className="h-4" />
                )}
            </button>

            {isOpen && (
                <div className="backdrop-blur-sm  absolute top-11">
                    <ul className="block">
                        {data &&
                            data.child.length > 0 &&
                            data.child.map((child) => {
                                return (
                                    <li className="group" key={child.slug}>
                                        <a
                                            href={child.slug}
                                            className="text-base bg-white  text-black active:bg-blue-400 hover:bg-green-400 hover:drop-shadow-xl hover:text-white focus:ring focus:ring-green-300 duration-400 py-2 px-7 mx-2 my-[1px] flex"
                                        >
                                            {child.title}
                                        </a>
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Dropdown;

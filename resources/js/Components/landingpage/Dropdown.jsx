import React from "react";
import { Link } from "@inertiajs/react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

export default function Dropdown({ data }) {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <>
            {isOpen && (
                <div
                    className="fixed w-screen h-screen"
                    onClick={() => setIsOpen(!isOpen)}
                ></div>
            )}
            <div className="block w-full md:w-auto">
                <a
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="hover:bg-white relative w-full cursor-pointer  inline-flex items-center justify-center px-4 py-1 overflow-hidden font-medium transition duration-300 ease-out md:rounded-full hover:md:shadow-xl group hover:md:ring-1 hover:md:ring-green-500"
                >
                    <span className="absolute inset-0 w-full h-full group-hover:md:bg-gradient-to-br from-blue-400 to-green-400"></span>
                    <span className="absolute bottom-0 right-0 hidden md:block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-90 translate-x-24 group-hover:md:bg-green-500 rounded-full opacity-80 group-hover:md:rotate-45 ease"></span>
                    <span className="relative text-white group-hover:text-black md:text-black group-hover:md:text-white">
                        {data.title}
                    </span>
                    {!isOpen ? (
                        <AiOutlineCaretDown className=" relative text-white group-hover:text-black md:text-black group-hover:md:text-white h-4" />
                    ) : (
                        <AiOutlineCaretUp className="relative text-white group-hover:text-black md:text-black group-hover:md:text-white h-4" />
                    )}
                </a>
                {isOpen && (
                    <div className="block md:absolute md:flex md:flex-col z-10 shadow-md rounded-b-xl ">
                        {data &&
                            data.child.map((dat, idx) => {
                                if (dat.slug.startsWith("http")) {
                                    return (
                                        <a
                                            href={dat.slug}
                                            target="_blank"
                                            className={`relative ${
                                                idx == 0 ? "rounded-tr-lg" : ""
                                            } ${
                                                idx == data.child.length - 1
                                                    ? "rounded-b-lg"
                                                    : ""
                                            } bg-slate-50 md:bg-white w-full inline-flex items-center justify-start px-4 py-1 font-medium duration-200 hover:shadow-xl group hover:ring-1 hover:bg-green-400`}
                                        >
                                            {idx == 0 && (
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
                                            )}
                                            {dat.title}
                                        </a>
                                    );
                                } else {
                                    return (
                                        <Link
                                            href={
                                                data.slug == "/"
                                                    ? `${dat.slug}`
                                                    : `/${data.slug}/${dat.slug}`
                                            }
                                            className={`relative ${
                                                idx == 0 ? "rounded-tr-lg" : ""
                                            } ${
                                                idx == data.child.length - 1
                                                    ? "rounded-b-lg"
                                                    : ""
                                            } bg-slate-50 md:bg-white w-full inline-flex items-center justify-start px-4 py-1 font-medium duration-200 hover:shadow-xl group hover:ring-1 hover:bg-green-400`}
                                        >
                                            {idx == 0 && (
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
                                            )}
                                            {dat.title}
                                        </Link>
                                    );
                                }
                            })}
                    </div>
                )}
            </div>
        </>
    );
}
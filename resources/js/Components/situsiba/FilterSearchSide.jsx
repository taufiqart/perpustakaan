import React from "react";
import { Link } from "@inertiajs/react";

import {
    ChevronsLeft,
    Filter,
    Search,
} from "feather-icons-react/build/IconComponents";

import { Checkbox } from "@/Components/default";

export default function FilterSearchSide() {
    const [show, setShow] = React.useState(false);
    const [load, setLoad] = React.useState(true);
    const [resize, setResize] = React.useState(false);
    const [translateX, setTranslateX] = React.useState(0);
    let navRef = React.useRef();
    const [windowResizing, setWindowResizing] = React.useState(false);

    React.useEffect(() => {
        let timeout;
        const handleResize = () => {
            handleToggle(false);
            clearTimeout(timeout);

            setWindowResizing(true);

            timeout = setTimeout(() => {
                setWindowResizing(false);
            }, 500);
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    let width = 0;

    React.useEffect(() => {
        let ___ = setTimeout(() => {
            setLoad(false);
            clearTimeout(___);
        }, 1000);
    }, []);

    React.useEffect(() => {
        width = Math.ceil(navRef?.current?.getBoundingClientRect().width ?? 0);
        setTranslateX(0 - (width + 500));
    }, [navRef, windowResizing]);

    const handleToggle = (param) => {
        width = Math.ceil(navRef?.current?.getBoundingClientRect().width ?? 0);
        setShow(param);
        param ? setTranslateX(0) : setTranslateX(0 - (width + 500));
    };

    return (
        <>
            <div className="sticky top-20  z-10 max-w-fit lg:hidden">
                <button
                    onClick={() => handleToggle(true)}
                    className={`bg-gradient-to-r from-green-400 to-blue-400 ${
                        show ? "opacity-0" : "opacity-100"
                    } transition-opacity duration-300 px-4 py-1 md:px-10 md:py-3 cursor-pointer w-full text-white  leading-none rounded-tr-md rounded-br-md border-l-0 border-2 border-solid`}
                    type="button"
                >
                    <Search className="text-white w-5" />
                    <p>Filter</p>
                </button>
            </div>

            <div className={load || windowResizing ? "opacity-0" : ""}>
                <nav
                    ref={navRef}
                    style={{
                        transform: `translate(${translateX}px,0)`,
                    }}
                    className={`left-0 fixed z-20 top-0 bottom-0 bg-white/85 overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-2xl backdrop-blur-sm rounded-lg items-center justify-between w-10/12 md:w-2/6 lg:w-2/6 py-4 px-6 duration-1000`}
                >
                    <div className="flex flex-row items-center justify-between ">
                        <div className="">
                            <Link

                                className="text-left-0 text-slate-600 mr-0 whitespace-nowrap text-xs md:text-base uppercase font-bold p-4 px-0 "

                                href="/"
                            >
                                Perpustakaan Skensa
                            </Link>
                        </div>
                        <button
                            onClick={() => handleToggle(false)}
                            className="cursor-pointer text-black opacity-50 px-3 py-1 leading-none bg-transparent rounded border border-solid border-transparent"
                            type="button"
                            title="sembunyikan search"
                        >
                            <ChevronsLeft className="" />
                        </button>
                    </div>
                    <div className="flex flex-col pt-10">
                        <div className="flex items-center justify-between md:justify-start">

                            <Filter className="text-slate-600 w-5" />
                            <Link className="text-left-0 md:pl-10 text-slate-600 mr-0 whitespace-nowrap text-base  uppercase font-bold p-4 px-0">

                                Filter
                            </Link>
                        </div>
                        <div className="flex flex-col justify-between">

                            <Link className="text-left-0 text-slate-600 mr-0 whitespace-nowrap text-base  uppercase font-bold pt-4 px-0">

                                Kategori
                            </Link>
                            <div className="flex flex-wrap p-0">
                                <div className="flex items-center p-2 w-auto">
                                    <Checkbox />{" "}
                                    <p className="pl-2 text-slate-600 mr-0 whitespace-nowrap text-xs md:text-base uppercase font-bold">

                                        {" "}
                                        KEPESENG{" "}
                                    </p>
                                </div>
                            </div>
                            <hr className="w-full" />
                        </div>
                        <div className="flex flex-col justify-between">

                            <Link className="text-left-0 text-slate-600 mr-0 whitespace-nowrap text-base  uppercase font-bold pt-4 px-0">

                                Jenis Karya
                            </Link>
                            <div className="flex flex-wrap p-0">
                                <div className="flex items-center p-2 w-auto">
                                    <Checkbox />{" "}

                                    <p className="pl-2 text-slate-600 mr-0 whitespace-nowrap text-xs md:text-base uppercase font-bold">

                                        {" "}
                                        KEPESENG
                                    </p>
                                </div>
                            </div>
                            <hr className="w-full" />
                        </div>
                    </div>
                </nav>
                {show && (
                    <div
                        className={`bg-black w-screen h-full fixed top-0 transition-opacity duration-500 cursor-pointer z-10 ${
                            !show ? "opacity-0" : "opacity-45"
                        }`}
                        onClick={() => handleToggle(false)}
                    ></div>
                )}
            </div>
        </>
    );
}

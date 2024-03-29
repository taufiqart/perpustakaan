import React from "react";
import { Link, usePage, router } from "@inertiajs/react";

import { ChevronsLeft, Search } from "feather-icons-react/build/IconComponents";

import Filter from "@/Components/situsiba/Filter";

export default function FilterSidebar() {
    const [show, setShow] = React.useState(false);
    const [load, setLoad] = React.useState(true);
    const [resize, setResize] = React.useState(false);
    const [translateX, setTranslateX] = React.useState(0);
    let navRef = React.useRef();
    const [windowResizing, setWindowResizing] = React.useState(false);
    const props = usePage().props;

    const [url, setUrl] = React.useState(new URL(window.location.href));
    const [search, setSearch] = React.useState("");

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

    React.useEffect(() => {
        const dark = window.localStorage.getItem("dark");
        if (dark != null && dark != undefined && dark == "true") {
            document.querySelector("#dark-toggle").checked = true;
        }
    }, []);

    const handleMode = () => {
        const dark = document.querySelector("html").classList.toggle("dark");
        window.localStorage.setItem("dark", dark);
    };

    const handleSearch = () => {
        url.searchParams.set("search", search);
        router.get(`${route("situsiba.search")}${url.search}`);
    };

    const onFilter = (url) => {
        url.searchParams.set("search", search);
        setUrl(url);
    };

    return (
        <>
            <div className="sticky top-0 pt-[10vh] z-10 max-w-fit">
                <button
                    onClick={() => handleToggle(true)}
                    className={` ${
                        show ? "opacity-0" : "dark:opacity-100 opacity-65"
                    } bg-rose-400 transition-opacity duration-300 px-4 py-1 md:px-5 md:py-3 flex items-center gap-2 min-h-16 cursor-pointer w-full text-white  leading-none rounded-tr-md rounded-br-md border-l-0 border-2 border-solid border-gray-200 dark:border-white`}
                    type="button"
                >
                    <Search className="text-white w-5" />
                    <p className="text-white">Cari</p>
                </button>
            </div>

            <div className={`${load || windowResizing ? "opacity-0" : ""} `}>
                <nav
                    ref={navRef}
                    style={{
                        transform: `translate(${translateX}px,0)`,
                    }}
                    className={`dark:bg-gray-900 dark:text-white text-slate-600 left-0 fixed z-20 top-0 bottom-0 bg-white/85 overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-2xl backdrop-blur-sm rounded-lg items-center justify-between w-10/12 md:w-2/4 lg:w-2/6 py-4 px-6 duration-1000`}
                >
                    <div className="flex flex-row items-center justify-between ">
                        <div className="">
                            <Link
                                className="text-left-0  mr-0 whitespace-nowrap text-xs md:text-base uppercase font-bold p-4 px-0 "
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
                            <ChevronsLeft className="dark:text-white" />
                        </button>
                    </div>
                    <div className="flex flex-row items-center justify-center pt-10">
                        {/* Search start */}
                        <div className="flex w-full items-center">
                            <input
                                type="text"
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="cari buku"
                                className="w-full rounded-full text-center p-2 dark:placeholder:text-white text-sm dark:bg-gray-600 border-gray-400  hover:border-blue-400 active:border-blue-700 transition duration-300 ease-in-out"
                            />

                            <button
                                onClick={handleSearch}
                                className="ml-3 w-fit rounded-full text-center p-2 border border-gray-400 bg-white dark:bg-gray-600  text-sm
                                hover:border-blue-400 transition-all duration-300 active:border-blue-700"
                                type="button"
                            >
                                <Search />
                            </button>
                        </div>
                        {/* Search start */}
                    </div>
                    <Filter onFilter={onFilter} />
                    <div className="mt-8">
                        <div className="flex justify-start gap-10 items-center">
                            <i className="fas fa-cog"></i>
                            <h1 className=" text-left-0  mr-0 whitespace-nowrap text-base  uppercase font-bold px-0">
                                Setting
                            </h1>
                        </div>
                        <div className="mt-4">
                            <div className="flex flex-row justify-between toggle">
                                <label
                                    htmlFor="dark-toggle"
                                    className="flex items-center cursor-pointer"
                                >
                                    <div className="relative">
                                        <input
                                            onClick={handleMode}
                                            type="checkbox"
                                            name="dark-mode"
                                            id="dark-toggle"
                                            className="peer checkbox hidden"
                                        />
                                        <div className="block border-[1px] dark:border-white border-gray-400 w-14 h-8 rounded-full"></div>
                                        <div className="peer-checked:translate-x-[100%] absolute left-1 top-1 dark:bg-white bg-gray-600 w-6 h-6 rounded-full transition"></div>
                                    </div>
                                    <div className="ml-3 dark:text-white text-gray-600 font-medium">
                                        Dark Mode
                                    </div>
                                </label>
                            </div>
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

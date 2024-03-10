import { Link, usePage } from "@inertiajs/react";
import React, { useEffect, useState, useRef } from "react";
import {
    ChevronsLeft,
    Filter,
    Search,
} from "feather-icons-react/build/IconComponents";
import Checkbox from "../Checkbox";
import InputLabel from "../InputLabel";

export default function FilterSidebar() {
    const [show, setShow] = useState(false);
    const [load, setLoad] = useState(true);
    const [resize, setResize] = useState(false);
    const [translateX, setTranslateX] = useState(0);
    let navRef = useRef();
    const [windowResizing, setWindowResizing] = useState(false);
    const props = usePage().props;
    console.log(props);
    useEffect(() => {
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

    useEffect(() => {
        let ___ = setTimeout(() => {
            setLoad(false);
            clearTimeout(___);
        }, 1000);
    }, []);

    useEffect(() => {
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
            <div className="sticky top-0 pt-[10vh] z-10 max-w-fit">
                <button
                    onClick={() => handleToggle(true)}
                    className={`bg-rose-400 ${
                        show ? "opacity-0" : "opacity-65"
                    } transition-opacity duration-300 px-4 py-1 md:px-10 md:py-3 cursor-pointer w-full text-white  leading-none rounded-tr-md rounded-br-md border-l-0 border-2 border-solid`}
                    type="button"
                >
                    <Search className="text-white w-5" />
                    <p>Cari</p>
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
                                className="text-left-0 text-blueGray-600 mr-0 whitespace-nowrap text-xs md:text-base uppercase font-bold p-4 px-0 "
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
                    <div className="flex flex-row items-center justify-center pt-10">
                        {/* Search start */}
                        <div className="flex w-full items-center">
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="cari buku"
                                className="w-[85%] rounded-full text-center text-blueGray-500 text-sm border-blueGray-400 hover:border-blue-400 active:border-blue-700 transition delay-150 duration-300 ease-in-out"
                            />
                            <button
                                className="pl-5 w-[15%] cursor-pointer rounded-full text-center text-blueGray-500 text-sm border-blueGray-400 hover:border-blue-400 active:border-blue-700 transition delay-150 duration-300 ease-in-out"
                                type="button"
                            >
                                <Search />
                            </button>
                        </div>
                        {/* Search start */}
                    </div>
                    <div className="flex flex-col pt-10">
                        <div className="flex items-center justify-between md:justify-start">
                            <Filter className="text-blueGray-600 w-5" />
                            <Link className="text-left-0 md:pl-10 text-blueGray-600 mr-0 whitespace-nowrap text-base  uppercase font-bold p-4 px-0">
                                Filter
                            </Link>
                        </div>
                        <div className="flex flex-col justify-between">
                            <Link className="text-left-0 text-blueGray-600 mr-0 whitespace-nowrap text-base  uppercase font-bold pt-4 px-0">
                                Kategori
                            </Link>
                            <div className="flex flex-wrap p-0">
                                {props.categories &&
                                    props.categories.map((e, key) => {
                                        return (
                                            <div
                                                className="flex items-center p-2 w-auto gap-2"
                                                key={e.slug}
                                            >
                                                <Checkbox
                                                    name="category[]"
                                                    id={e.slug + key}
                                                />
                                                <InputLabel
                                                    htmlFor={e.slug + key}
                                                    value={e.category}
                                                />
                                            </div>
                                        );
                                    })}
                            </div>
                            <hr className="w-full" />
                        </div>
                        <div className="flex flex-col justify-between">
                            <Link className="text-left-0 text-blueGray-600 mr-0 whitespace-nowrap text-base  uppercase font-bold pt-4 px-0">
                                Jenis Karya
                            </Link>
                            <div className="flex flex-wrap p-0">
                                {props.genres &&
                                    props.genres.map((e, key) => {
                                        return (
                                            <div
                                                className="flex items-center p-2 w-auto gap-2"
                                                key={e.slug}
                                            >
                                                <Checkbox
                                                    name="genres[]"
                                                    id={e.slug + key}
                                                />
                                                <InputLabel
                                                    htmlFor={e.slug + key}
                                                    value={e.genre}
                                                />
                                            </div>
                                        );
                                    })}
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

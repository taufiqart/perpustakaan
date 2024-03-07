import { Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { ChevronsLeft, Filter, Search } from "feather-icons-react/build/IconComponents";
import Checkbox from "../Checkbox";
import { useRef } from "react";

export default function AdminSidebar() {
    const navRef = useRef();

    const showFilter = () => {
        navRef.current.classList.toggle("-translate-x-[200vh]");
    };

    window.addEventListener("resize", (e) => {
        if (window.innerWidth >= 768) {
            navRef.current.classList.remove("translate-x-[200vh]");
        }
    });


    return (
        <>
            <div className="absolute pt-[10vh] z-10">
                <button
                onClick={showFilter}
                className="bg-rose-400 px-4 py-1 md:px-10 md:py-3 cursor-pointer w-full text-white  leading-none bg-transparent rounded-tr-md rounded-br-md border-l-0 opacity-65 border-2 border-solid"
                type="button"
                >
                    <Search className="text-white w-5"/><p>Cari</p>
                </button>
            </div>
            <nav className="left-0 fixed top-0 bottom-0 overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-2xl backdrop-blur-sm rounded-lg items-center justify-between w-2/3 z-10 py-4 px-6 duration-1000"
            ref={navRef}
            >
                <div className="flex flex-row items-center justify-between ">
                    <div className="">
                        <Link className="text-left-0 text-blueGray-600 mr-0 whitespace-nowrap text-xs md:text-base uppercase font-bold p-4 px-0 " href="/">
                        Perpustakaan Skensa
                        </Link>
                    </div>
                    <button
                    onClick={showFilter}
                    className="cursor-pointer text-black opacity-50 px-3 py-1 leading-none bg-transparent rounded border border-solid border-transparent"
                    type="button"
                    title="sembunyikan search"
                    >
                        <ChevronsLeft className=""/>
                    </button>
                </div>
                <div className="flex flex-row items-center justify-center pt-10">
                    {/* Search start */}
                    <div className="flex w-full items-center">
                        <input type="text" name="" id="" placeholder="cari buku" className="w-[85%] rounded-full text-center text-blueGray-500 text-sm border-blueGray-400 hover:border-blue-400 active:border-blue-700 transition delay-150 duration-300 ease-in-out" />
                        <button
                        className="pl-5 w-[15%] cursor-pointer rounded-full text-center text-blueGray-500 text-sm border-blueGray-400 hover:border-blue-400 active:border-blue-700 transition delay-150 duration-300 ease-in-out"
                        type="button"
                        >
                                <Search/>
                        </button>
                    </div>
                    {/* Search start */}
                </div>
                <div className="flex flex-col pt-10">
                    <div className="flex items-center justify-between md:justify-start">
                        <Filter className="text-blueGray-600 w-5"/>
                        <Link className="text-left-0 md:pl-10 text-blueGray-600 mr-0 whitespace-nowrap text-base  uppercase font-bold p-4 px-0">
                        Filter
                        </Link>
                    </div>
                    <div className="flex flex-col justify-between">
                        <Link className="text-left-0 text-blueGray-600 mr-0 whitespace-nowrap text-base  uppercase font-bold pt-4 px-0">
                        Kategori
                        </Link>
                        <div className="flex flex-wrap p-0">
                            <div className="flex items-center p-2 w-auto">
                            <Checkbox/> <p className="pl-2 text-blueGray-600 mr-0 whitespace-nowrap text-xs md:text-base uppercase font-bold"> KEPESENG </p>
                            </div>
                        </div>
                        <hr className="w-full"/>
                    </div>
                    <div className="flex flex-col justify-between">
                        <Link className="text-left-0 text-blueGray-600 mr-0 whitespace-nowrap text-base  uppercase font-bold pt-4 px-0">
                        Jenis Karya
                        </Link>
                        <div className="flex flex-wrap p-0">
                            <div className="flex items-center p-2 w-auto">
                            <Checkbox/> <p className="pl-2 text-blueGray-600 mr-0 whitespace-nowrap text-xs md:text-base uppercase font-bold"> KEPESENG </p>
                            </div>
                        </div>
                        <hr className="w-full"/>
                    </div>
                </div>
            </nav>
        </>
    );
}

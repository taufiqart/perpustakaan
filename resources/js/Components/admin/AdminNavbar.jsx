import React from "react";
import { Link } from "@inertiajs/react";

export default function AdminNavbar() {
    const pathname = window.location.pathname;
    return (
        <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
            <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
                <Link
                    className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
                    href={pathname}
                >
                    {decodeURIComponent(
                        pathname.split("/")[pathname.split("/").length - 1]
                    )}
                </Link>
                {/* <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto w-full lg:max-w-xl ">
                    <div className="relative flex w-full flex-wrap items-stretch">
                        <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300  bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                            <i className="fas fa-search"></i>
                        </span>
                        <input
                            type="text"
                            placeholder="Search here..."
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                        />
                    </div>
                </form> */}
            </div>
        </nav>
    );
}

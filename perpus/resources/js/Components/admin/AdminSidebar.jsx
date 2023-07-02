import React, { useEffect, useState } from "react";
import Dropdown from "@/Components/admin/Dropdown/Dropdown";
import { Link, usePage } from "@inertiajs/react";

export default function AdminSidebar() {
    const [toggleNavbar, setToggleNavbar] = useState(false);
    const [navigation, setNavigation] = useState();
    const { props } = usePage();
    useEffect(() => {
        setNavigation(props.navigation);
    }, []);

    const getActivePage = (slug) => {
        return (
            (slug.split("/").length == 2 && window.location.pathname == slug) ||
            (slug.split("/").length > 2 &&
                window.location.pathname.startsWith(slug))
        );
    };
    return (
        <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
            <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                <button
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    type="button"
                    onClick={() => {
                        setToggleNavbar(!toggleNavbar);
                    }}
                >
                    <i className="fas fa-bars"></i>
                </button>
                <Link
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    href="/"
                >
                    Perpustakaan SKENSA
                </Link>

                <div
                    className={`transition-all duration-300 md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded  ${
                        toggleNavbar ? " bg-white m-2 py-3 px-6" : "hidden"
                    } `}
                >
                    <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
                        <div className="flex flex-wrap">
                            <div className="w-6/12">
                                <Link
                                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                                    href="../../index.html"
                                >
                                    Perpustakaan SKENSA
                                </Link>
                            </div>
                            <div className="w-6/12 flex justify-end">
                                <button
                                    type="button"
                                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                    onClick={() => {
                                        setToggleNavbar(!toggleNavbar);
                                    }}
                                >
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <form className="mt-6 mb-4 md:hidden">
                        <div className="mb-3 pt-0">
                            <input
                                type="text"
                                placeholder="Search"
                                className="border-0 px-3 py-2 h-12 border border-solid border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                            />
                        </div>
                    </form>
                    {/* <!-- Divider --> */}
                    <hr className="my-4 md:min-w-full" />
                    {/* <!-- Heading --> */}

                    <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                        {navigation &&
                            navigation.map((nav) => {
                                return (
                                    <li className="items-center" key={nav.slug}>
                                        <Link
                                            href={nav.slug}
                                            className={`text-xs uppercase py-3 font-bold block ${
                                                getActivePage(nav.slug)
                                                    ? "text-pink-500 hover:text-pink-600"
                                                    : "text-blueGray-700 hover:text-blueGray-500"
                                            }`}
                                        >
                                            <i
                                                className="fas mr-2 text-sm opacity-75 w-6 align-middle"
                                                dangerouslySetInnerHTML={{
                                                    __html: nav.icon,
                                                }}
                                            ></i>
                                            {nav.title}
                                        </Link>
                                    </li>
                                );
                            })}
                    </ul>

                    {/* <!-- Divider --> */}
                    <hr className="my-4 md:min-w-full" />
                    {/* <!-- Heading --> */}
                    <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                        <li className="items-center">
                            <a
                                href="../auth/login.html"
                                className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                            >
                                <i className="fas fa-fingerprint text-blueGray-300 mr-2 text-sm"></i>
                                Login
                            </a>
                        </li>

                        <li className="items-center">
                            <a
                                href="../auth/register.html"
                                className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                            >
                                <i className="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i>
                                Register
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

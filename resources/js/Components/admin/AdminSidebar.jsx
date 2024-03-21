import React from "react";

import { Link, usePage } from "@inertiajs/react";

const getActivePage = (slug) => {
    return (
        (slug.split("/").length == 2 && window.location.pathname == slug) ||
        (slug.split("/").length > 2 &&
            window.location.pathname.startsWith(slug))
    );
};

const SideMenu = ({ data }) => {
    const [open, setOpen] = React.useState(false);
    const [active, setActive] = React.useState(false);

    if (data.child.length > 0) {
        React.useEffect(() => {
            data.child.map((e) => {
                if (active) return;
                if (getActivePage(e.slug)) {
                    setOpen(true);
                    setActive(true);
                    return;
                }
            });
        }, []);

        return (
            <li className="items-center">
                <button
                    onClick={() => setOpen(!open)}
                    type="button"
                    className={`text-xs uppercase py-3 font-bold flex items-center w-full ${
                        active
                            ? "text-pink-500 hover:text-pink-600"
                            : "text-slate-700 hover:text-slate-500"
                    }`}
                >
                    <i
                        className="fas mr-2 text-sm opacity-75 w-6 align-middle"
                        dangerouslySetInnerHTML={{
                            __html: data.icon,
                        }}
                    ></i>
                    {data.title}
                    <svg
                        className={`w-6 h-6 ml-auto flex-end transition-all duration-150 ${
                            open && "rotate-180"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
                <ul
                    className={`opcity-100 h-auto ${
                        !open && "!h-0 !opacity-0"
                    } transition-all duration-200`}
                >
                    {data.child.map((nav, key) => {
                        return (
                            <li key={nav.slug + key} className="items-center">
                                <Link
                                    href={nav.slug}
                                    {...nav?.props}
                                    className={`text-xs uppercase py-3 font-bold block ${
                                        getActivePage(nav.slug)
                                            ? "text-pink-500 hover:text-pink-600"
                                            : "text-slate-700 hover:text-slate-500"
                                    }`}
                                >
                                    <i className="fas mr-2 text-sm opacity-75 w-6 align-middle"></i>
                                    {nav.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </li>
        );
    }
    return (
        <li className="items-center">
            <Link
                href={data.slug}
                {...data?.props}
                className={`text-xs uppercase py-3 font-bold block ${
                    getActivePage(data.slug)
                        ? "text-pink-500 hover:text-pink-600"
                        : "text-slate-700 hover:text-slate-500"
                }`}
            >
                <i
                    className="fas mr-2 text-sm opacity-75 w-6 align-middle"
                    dangerouslySetInnerHTML={{
                        __html: data.icon,
                    }}
                ></i>
                {data.title}
            </Link>
        </li>
    );
};

export default function AdminSidebar() {
    const [toggleNavbar, setToggleNavbar] = React.useState(false);
    const [navigation, setNavigation] = React.useState();
    const { props } = usePage();
    React.useEffect(() => {
        setNavigation(props.navigation);
    }, []);

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
                    className="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    href="/"
                >
                    Perpustakaan SKENSA
                </Link>

                <div
                    className={`transition-all duration-300 md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded  ${
                        toggleNavbar ? " bg-white m-2 py-3 px-6" : "hidden"
                    } `}
                >
                    <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-slate-200">
                        <div className="flex flex-wrap">
                            <div className="w-6/12">
                                <Link
                                    className="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                                    href="/"
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
                    {/* <form className="mt-6 mb-4 md:hidden">
                        <div className="mb-3 pt-0">
                            <input
                                type="text"
                                placeholder="Search"
                                className="border-0 px-3 py-2 h-12 border border-solid border-slate-500 placeholder-slate-300 text-slate-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                            />
                        </div>
                    </form> */}
                    {/* <!-- Divider --> */}
                    {/* <hr className="my-4 md:min-w-full" /> */}
                    {/* <!-- Heading --> */}

                    <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                        {navigation &&
                            navigation.map((nav, key) => {
                                if (nav?.type == "divider") {
                                    return (
                                        <hr
                                            key={key}
                                            className="my-4 md:min-w-full"
                                        />
                                    );
                                }
                                return (
                                    <SideMenu data={nav} key={nav.slug + key} />
                                );
                            })}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

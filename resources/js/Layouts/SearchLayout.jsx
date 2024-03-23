import React from "react";
import { Link, router } from "@inertiajs/react";

import FilterSearchSide from "@/Components/situsiba/FilterSearchSide";
import { CardBox } from "@/Components/default";

import Filter from "@/Components/situsiba/Filter";

export default function SearchLayout({ children }) {
    const [url, setUrl] = React.useState(new URL(window.location.href));
    const [search, setSearch] = React.useState(
        new URLSearchParams(window.location.search).get("search")
    );

    let _searchDebounce;

    React.useEffect(() => {
        url.searchParams.set("search", search);
        if (
            search != new URLSearchParams(window.location.search).get("search")
        ) {
            _searchDebounce = setTimeout(() => {
                router.get(url.href);
                clearTimeout(_searchDebounce);
            }, 700);
        }
    }, [search]);

    const handleSearch = (_url = null) => {
        if (_url != null) {
            setUrl(_url);
        }
        url.searchParams.set("search", search);
        router.get(url.href);
    };

    return (
        <>
            <div className="flex overflow-hidden ">
                <div className="flex flex-col w-full h-full">
                    <div className="h-40 w-full bg-gradient-to-r xl:hidden from-[#4ade80] to-[#0891B2]"></div>
                    <div className="h-full">
                        <svg
                            className="object-cover opacity-100 block xl:-mt-52"
                            width="100%"
                            height="100%"
                            viewBox="0 0 1440 767"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M709.044 767C420.129 767 185.016 741.903 0 700.13V0H1440V700.13C1248.03 743.707 1004.84 767 709.044 767Z"
                                fill="url(#paint0_linear_271_422)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_271_422"
                                    x1="1440"
                                    y1="330.784"
                                    x2="-0.405161"
                                    y2="313.726"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#0891B2" />
                                    <stop offset="1" stopColor="#4ade80" />
                                    <stop offset="1" stopColor="#60a5fa" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>

                <div className="absolute w-full">
                    <CardBox className=" pt-10 flex flex-col items-center justify-center pb-5 rounded-none !bg-black/30 shadow-none uppercase">
                        <h1 className="text-white text-2xl md:text-3xl break-words text-center">
                            Platfrom bagi warga
                        </h1>
                        <h1 className="text-white text-4xl md:text-6xl break-words text-center">
                            SMKN 1 PASURUAN
                        </h1>
                        <h1 className="text-white text-xl md:text-3xl break-words text-center">
                            Berbagi karya dan bacaan
                        </h1>
                    </CardBox>

                    <CardBox className="w-full p-2 rounded-none sticky top-0 text-center z-10 flex justify-center  !bg-black/30 shadow-none">
                        <div className="w-full md:w-2/4 flex">
                            <input
                                onKeyDown={(e) => {
                                    if (e.key == "Enter") {
                                        handleSearch();
                                    }
                                }}
                                autoFocus
                                type="text"
                                value={search}
                                placeholder="cari judul / kategori"
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full rounded-full text-center text-slate-500 border text-sm border-green-400 hover:border-blue-400 active:border-blue-700 ring-green-400 transition delay-150 duration-300 ease-in-out"
                            />
                            <button
                                onClick={handleSearch}
                                className="w-fit bg-white items-center justify-center py-2 px-4 mx-2 rounded-full text-center text-slate-500 border text-sm border-green-400 hover:bg-green-400 hover:text-white active:border-blue-700 ring-green-400 transition delay-150 duration-300 ease-in-out"
                            >
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </CardBox>

                    <div className="w-full  max-w-full">
                        <FilterSearchSide className="" />
                        <div className="flex lg:flex md:p-10 gap-10 mt-10 2xl:mx-52 justify-center flex-row items-start">
                            <div className="w-1/2 2xl:w-1/3  hidden lg:block">
                                <CardBox className="w-full mx-auto mb-20">
                                    {/* Filter start */}
                                    <div className="flex flex-row items-center justify-between p-5">
                                        <p className="font-bold">
                                            PERPUSTAKAAN SKENSA
                                        </p>
                                    </div>
                                    {/* FILTER */}
                                    <Filter onclickFilter={true} />
                                    {/* Filter end */}
                                </CardBox>
                            </div>
                            <div className="w-full block">{children}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

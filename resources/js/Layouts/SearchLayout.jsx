import { Link } from "@inertiajs/react";
import { Filter } from "feather-icons-react/build/IconComponents";

import FilterSearchSide from "@/Components/situsiba/FilterSearchSide";
import { CardBox, Checkbox } from "@/Components/default";

export default function SearchLayout({ children }) {
    return (
        <>
            <div className="flex overflow-hidden ">
                <svg
                    className="object-cover opacity-100"
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
                <div className="absolute w-[100vw]">
                    <div className="flex flex-col items-center justify-center pt-10">
                        <h1 className="text-white text-xl md:text-2xl">
                            Platfrom bagi warga
                        </h1>
                        <h1 className="text-white text-3xl md:text-4xl">
                            SMKN 1 PASURUAN
                        </h1>
                        <h1 className="text-white text-xl md:text-2xl">
                            Berbagi karya dan bacaan
                        </h1>
                    </div>
                    <div className="w-full p-5 sticky top-0 text-center z-10">
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="cari judul / kategori"
                            className=" w-full md:w-2/3 rounded-2xl text-center text-slate-500 text-xs md:text-base lg:text-lg border-green-400 hover:border-blue-400 active:border-blue-700 ring-green-400 transition delay-150 duration-300 ease-in-out"
                        />
                    </div>

                    <div className="flex flex-row gap-10">
                        <FilterSearchSide />

                        <div className="w-1/3">
                            <CardBox className="w-[100%] mx-auto mb-20">
                                {/* Filter start */}
                                <div className="flex flex-row items-center justify-between p-5">
                                    <Link>
                                        <p className="font-bold">
                                            PERPUSTAKAAN SKENSA
                                        </p>
                                    </Link>
                                </div>
                                <div className="flex flex-col -pt-6 pb-10 ml-4">
                                    <div className="flex items-center justify-start">
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

                                {/* Filter end */}
                            </CardBox>
                        </div>
                        <div className="w-2/3 ">{children}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

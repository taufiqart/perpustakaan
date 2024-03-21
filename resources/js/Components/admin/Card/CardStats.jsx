import React from "react";
import { usePage } from "@inertiajs/react";

export default function CardStats({ data }) {
    const props = usePage().props;
    return (
        <div className="flex flex-wrap">
            {props.auth.user.role != "user" ? (
                <>
                    {data.navigations && (
                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                                <div className="flex-auto p-4">
                                    <div className="flex flex-wrap">
                                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                            <h5 className="text-slate-400 uppercase font-bold text-xs">
                                                Navigations
                                            </h5>
                                            <span className="font-semibold text-xl text-slate-700">
                                                {
                                                    data.navigations
                                                        ?.navigations_count
                                                }
                                            </span>
                                        </div>
                                        <div className="relative w-auto pl-4 flex-initial">
                                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
                                                <i className="far fa-compass"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-slate-400 mt-4">
                                        <span className="text-red-500 mr-2">
                                            <i className="fas fa-arrow-up"></i>{" "}
                                            {data.navigations?.navigations_new}
                                        </span>
                                        <span className="whitespace-nowrap">
                                            Today
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                    {data.pages && (
                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                                <div className="flex-auto p-4">
                                    <div className="flex flex-wrap">
                                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                            <h5 className="text-slate-400 uppercase font-bold text-xs">
                                                Pages
                                            </h5>
                                            <span className="font-semibold text-xl text-slate-700">
                                                {data.pages?.pages_count}
                                            </span>
                                        </div>
                                        <div className="relative w-auto pl-4 flex-initial">
                                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500">
                                                <i className="fas fa-file-alt"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-slate-400 mt-4">
                                        <span className="text-red-500 mr-2">
                                            <i className="fas fa-arrow-up"></i>{" "}
                                            {data.pages?.pages_new}
                                        </span>
                                        <span className="whitespace-nowrap">
                                            Today
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                    {data.files && (
                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                                <div className="flex-auto p-4">
                                    <div className="flex flex-wrap">
                                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                            <h5 className="text-slate-400 uppercase font-bold text-xs">
                                                Files
                                            </h5>
                                            <span className="font-semibold text-xl text-slate-700">
                                                {data.files?.files_count}
                                            </span>
                                        </div>
                                        <div className="relative w-auto pl-4 flex-initial">
                                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500">
                                                <i className="fas fa-folder"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-slate-400 mt-4">
                                        <span className="text-orange-500 mr-2">
                                            <i className="fas fa-arrow-up"></i>{" "}
                                            {data.files?.files_new}
                                        </span>
                                        <span className="whitespace-nowrap">
                                            Today
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                data.paper && (
                    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                            <div className="flex-auto p-4">
                                <div className="flex flex-wrap">
                                    <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                        <h5 className="text-slate-400 uppercase font-bold text-xs">
                                            Pages
                                        </h5>
                                        <span className="font-semibold text-xl text-slate-700">
                                            {data.paper?.pages_count}
                                        </span>
                                    </div>
                                    <div className="relative w-auto pl-4 flex-initial">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500">
                                            <i className="fas fa-file-alt"></i>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-400 mt-4">
                                    <span className="text-red-500 mr-2">
                                        <i className="fas fa-arrow-up"></i>{" "}
                                        {data.paper?.pages_new}
                                    </span>
                                    <span className="whitespace-nowrap">
                                        Today
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                )
            )}

            {/* <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                    <div className="flex-auto p-4">
                        <div className="flex flex-wrap">
                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                <h5 className="text-slate-400 uppercase font-bold text-xs">
                                    Performance
                                </h5>
                                <span className="font-semibold text-xl text-slate-700">
                                    49,65%
                                </span>
                            </div>
                            <div className="relative w-auto pl-4 flex-initial">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-sky-500">
                                    <i className="fas fa-percent"></i>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-slate-400 mt-4">
                            <span className="text-emerald-500 mr-2">
                                <i className="fas fa-arrow-up"></i> 12%
                            </span>
                            <span className="whitespace-nowrap">
                                Since last month
                            </span>
                        </p>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

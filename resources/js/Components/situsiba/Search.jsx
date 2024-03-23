import React from "react";
import { router } from "@inertiajs/react";

export default function Search() {
    const [search, setSearch] = React.useState("");

    const handleSearch = () => {
        const url = new URL(route("situsiba.search"));
        url.searchParams.set("search", search);
        router.get(url);
    };

    return (
        <div className="flex flex-row justify-center pt-10 ">
            {/* Search start */}
            <div className="w-[90%] md:w-2/3 xl:w-2/5 flex gap-1">
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="cari judul / kategori"
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded-lg text-center text-slate-500 border text-sm border-green-400 hover:border-blue-400 active:border-blue-700 ring-green-400 transition delay-150 duration-300 ease-in-out"
                />
                <button
                    onClick={handleSearch}
                    className="w-fit flex- items-center justify-center px-4 rounded-lg text-center text-slate-500 border text-sm border-green-400 hover:bg-green-400 hover:text-white active:border-blue-700 ring-green-400 transition delay-150 duration-300 ease-in-out"
                >
                    <i className="fas fa-search"></i>
                </button>
            </div>
            {/* Search end */}
        </div>
    );
}

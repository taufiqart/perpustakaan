export default function Search() {
    return (
        <div className="flex flex-row justify-center pt-10 ">
            <div className="">
                <div className="w-1"></div>
            </div>

            {/* Search start */}
            <div className="w-2/3">
                <input type="text" name="" id="" placeholder="cari judul / kategori" className="w-full rounded-lg text-center text-slate-500 text-sm border-green-400 hover:border-blue-400 active:border-blue-700 ring-green-400 transition delay-150 duration-300 ease-in-out" />
            </div>
            {/* Search end */}

            <div className="">
                <div className="w-1"></div>
            </div>

            {/* Filter start */}
            <div className="">
                <select name="" id="" className="w-28 rounded-lg text-slate-500 text-sm border-green-400 hover:border-blue-400 active:border-blue-700 ring-green-400 transition delay-150 duration-300 ease-in-out">
                    <option value="" className="text-black">Terbaru</option>
                    <option value="" className="text-black">Terlama</option>
                    <option value="" className="text-black">Terbanyak Dilihat</option>
                </select>
            </div>
            {/* Filter end */}

            <div className="">
                <div className="w-1"></div>
            </div>
        </div>
    )}

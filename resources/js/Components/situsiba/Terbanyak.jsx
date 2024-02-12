import { Link } from "@inertiajs/react";
import BookSlider from "./BookSlider";

export default function Terbanyak({data}) {
    return (
        <div className="w-full mx-auto overflow-auto  my-10 bg-opacity-50 bg-white rounded-lg shadow-md p-5">
            <div className="flex justify-between mx-auto py-3 rounded-lg">
                <h1 className="text-2xl font-bold">
                    Terbanyak dibaca
                </h1>
                <Link className="text-lg font-bold hover:text-blue-500 hover:underline">Lihat lebih banyak</Link>
            </div>
            <div className="flex flex-col justify-between my-2">
                <div className="items-center ">
                    <BookSlider/>
                </div>
            </div>
        </div>
    );
}

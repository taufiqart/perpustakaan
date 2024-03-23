import { Link } from "@inertiajs/react";
import BookSlider from "./BookSlider";

export default function SectionBook({ title, link, data }) {
    return (
        <div className="w-full text-black mx-auto overflow-auto  my-10 bg-opacity-50 bg-white rounded-lg shadow-md p-5">
            <div className="flex justify-between mx-auto py-3 rounded-lg">
                <h1 className="text-2xl font-bold">{title}</h1>
                {link && (
                    <Link
                        href={link?.href}
                        className="text-lg font-bold hover:text-blue-500 hover:underline"
                    >
                        {link?.label}
                    </Link>
                )}
            </div>
            <div className="my-2">
                <div className="flex flex-col">
                    {data && data.length > 0 ? (
                        <BookSlider data={data} />
                    ) : (
                        <div className="flex justify-center items-center w-full h-20">
                            <h1>Belum ada Karya</h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

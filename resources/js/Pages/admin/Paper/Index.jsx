import BookCard from "@/Components/BookCard";

import { Head, Link, useForm, usePage } from "@inertiajs/react";
import AdminLayout from "@/Layouts/admin/AdminLayout";

export default function PaperIndex({ papers }) {
    return (
        <>
            <Head title={`Pages`} />
            <AdminLayout>
                <div className="w-full flex gap-x-3 p-4 pt-0 -mt-5">
                    <Link
                        href={route("paper.create")}
                        className="inline-flex items-center px-4 py-2 bg-blue-400 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                    >
                        <i className="fas fa-plus"></i>
                        Add
                    </Link>
                </div>
                {/* <BookLoader loader={processing} /> */}
                <div className="flex gap-4 items-start flex-wrap justify-center">
                    {papers.map((paper) => {
                        return (
                            <BookCard key={paper.slug}
                                image={paper?.poster}
                                url={`${route('paper.show',paper.slug)}`}
                                title={paper.title}
                            />
                        );
                    })}
                </div>
            </AdminLayout>
        </>
    );
}

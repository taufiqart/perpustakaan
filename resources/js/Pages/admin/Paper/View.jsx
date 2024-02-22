import { Head, Link, useForm, usePage } from "@inertiajs/react";
import AdminLayout from "@/Layouts/admin/AdminLayout";
import BookView from "../../../Components/BookView";

export default function View({ paper }) {
    return (
        <>
            <Head title={`${paper.title}`} />
            <AdminLayout>
                <div className="w-full flex gap-x-3 p-4 pt-0 -mt-5">
                    <Link
                        href={route("paper.edit", paper.slug)}
                        className="inline-flex items-center px-4 py-2 bg-blue-400 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                    >
                        <i className="fas fa-pencil"></i>
                        Edit
                    </Link>
                </div>
                <div className="flex gap-4 items-start flex-wrap justify-center">
                    <BookView paper={paper} />
                </div>
            </AdminLayout>
        </>
    );
}

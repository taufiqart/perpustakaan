import { Head, Link, useForm, usePage } from "@inertiajs/react";
import AdminLayout from "@/Layouts/admin/AdminLayout";
import Modal from "@/Components/Modal";
import BookLoader from "@/Components/BookLoader";
import Alert from "@/Components/Alert";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";

import { useCallback, useState, useEffect } from "react";

import ContentView from "@/Components/shared/ContentView";

export default function View({ paper }) {
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [flash, setFlash] = useState();

    const [file, setFile] = useState(null);
    const [numPages, setNumPages] = useState();
    const [containerRef, setContainerRef] = useState(null);
    const [containerWidth, setContainerWidth] = useState();

    useEffect(() => {
        paper?.post_assets &&
            paper?.post_assets.length > 0 &&
            setFile(paper?.post_assets[0]?.url);
    }, []);

    const onCloseModalDelete = () => {
        setConfirmDelete(false);
        setFlash();
        reset();
        clearErrors();
    };

    const onOpenModalDelete = (paper) => {
        setData("slug", paper);
        setConfirmDelete(true);
    };

    const {
        data,
        setData,
        processing,
        delete: destroy,
        reset,
        clearErrors,
    } = useForm();

    const props = usePage().props;
    useEffect(() => {
        setFlash(props.flash);
    }, [processing]);

    const onDeleteForm = (e) => {
        e.preventDefault();
        destroy(route("paper.destroy", data.slug), {
            onSuccess: () => setTimeout(() => onCloseModalDelete(), [1000]),
        });
    };
    return (
        <>
            <Head title={`${paper.title}`} />
            <AdminLayout>
                <div className="w-full flex gap-x-3 p-4 pt-0 md:-mt-14 cursor-pointer">
                    <Link
                        href={route("paper.index")}
                        className="inline-flex items-center px-4 py-2 bg-blue-400 border border-transparent rounded-md font-semibold 
                        text-xs text-white uppercase tracking-widest hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700 
                        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                    >
                        <i className="fas fa-arrow-left"></i>
                        Back
                    </Link>
                    <Link
                        href={route("paper.edit", paper.slug)}
                        className="inline-flex items-center px-4 py-2 bg-green-400 border border-transparent rounded-md font-semibold 
                        text-xs text-white uppercase tracking-widest hover:bg-green-600 focus:bg-blue-600 active:bg-blue-700 
                        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                    >
                        <i className="far fa-edit"></i>
                        Edit
                    </Link>
                    <div
                        className="inline-flex items-center px-4 py-2 bg-red-500 border border-transparent rounded-md font-semibold 
                        text-xs text-white uppercase tracking-widest hover:bg-red-600 focus:bg-blue-600 active:bg-blue-700 
                        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                        onClick={() => onOpenModalDelete(paper)}
                    >
                        <i className="fas fa-trash"></i> Hapus
                    </div>
                </div>
                <div className="mt-12 md:mt-20 -mx-4 md:mx-0">
                    <ContentView
                        content={paper}
                        fileList={paper?.post_assets}
                        innerScroll={true}
                        height="670px"
                    />
                    <div className="h-40"></div>
                </div>

                <Modal
                    show={confirmDelete}
                    onClose={onCloseModalDelete}
                    maxWidth="sm"
                >
                    <BookLoader loader={processing} />
                    <form className="p-6 w-full h-full" onSubmit={onDeleteForm}>
                        {!processing && flash?.error && (
                            <Alert type="error" message={flash?.error} />
                        )}
                        {!processing && flash?.success && (
                            <Alert type="success" message={flash?.success} />
                        )}
                        <h2 className="text-lg font-medium text-gray-500">
                            Are you sure you want to delete?
                        </h2>
                        <h2 className="text-lg font-medium text-gray-900">
                            {data.title}
                        </h2>

                        <div className="mt-6 flex justify-end">
                            <SecondaryButton onClick={onCloseModalDelete}>
                                Cancel
                            </SecondaryButton>

                            <DangerButton
                                className="ml-3"
                                disabled={processing}
                                as="button"
                            >
                                Delete
                            </DangerButton>
                        </div>
                    </form>
                </Modal>
            </AdminLayout>
        </>
    );
}

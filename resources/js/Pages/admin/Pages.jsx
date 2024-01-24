import Table from "@/Components/Table";
import AdminLayout from "@/Layouts/admin/AdminLayout";
import React, { useEffect, useState } from "react";
import Dropdown from "@/Components/Dropdown";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import Modal from "@/Components/Modal";
import BookLoader from "@/Components/BookLoader";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import Alert from "@/Components/Alert";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Pages({ articles }) {
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [flash, setFlash] = useState();

    const onCloseModalDelete = () => {
        setConfirmDelete(false);
        setFlash();
        reset();
        clearErrors();
    };

    const onOpenModalDelete = (article) => {
        setData(article);
        setConfirmDelete(true);
    };

    const {
        data,
        setData,
        errors,
        processing,
        post,
        put,
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
        destroy(route("pages.destroy", data.id), {
            onSuccess: () => setTimeout(() => onCloseModalDelete(), [1000]),
        });
    };
    return (
        <>
            <Head title="Pages" />
            <AdminLayout>
                <div className="w-full flex gap-x-3 p-4 pt-0 -mt-5">
                    <Link
                        href={route("pages.create")}
                        className="inline-flex items-center px-4 py-2 bg-blue-400 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                    >
                        <i className="fas fa-plus"></i>
                        Add
                    </Link>
                </div>
                <Table>
                    <thead>
                        <tr>
                            <Table.Th>Judul</Table.Th>
                            <Table.Th>Content</Table.Th>
                            <Table.Th>Category</Table.Th>
                            <Table.Th></Table.Th>
                        </tr>
                    </thead>
                    <tbody>
                        {articles &&
                            articles.map((article) => {
                                return (
                                    <tr key={article.slug}>
                                        <Table.Td>{article?.title}</Table.Td>
                                        <Table.Td className="!align-top">
                                            {" "}
                                            <div
                                                className="break-words max-h-20 overflow-hidden"
                                                dangerouslySetInnerHTML={{
                                                    __html: article.content,
                                                }}
                                            ></div>{" "}
                                        </Table.Td>
                                        <Table.Td>
                                            {article?.category?.title}
                                        </Table.Td>
                                        <Table.Td className="text-right">
                                            <Dropdown>
                                                <Dropdown.Trigger>
                                                    <button
                                                        type="button"
                                                        className="inline-flex hover:bg-white rounded-full items-center w-7 justify-center h-7 border border-transparent text-sm font-medium  text-gray-500  hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                    >
                                                        <i className="fas fa-ellipsis-v"></i>
                                                    </button>
                                                </Dropdown.Trigger>

                                                <Dropdown.Content>
                                                    <Dropdown.Link
                                                        className="block w-full px-4 py-2 text-left text-sm leading-5 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out !text-gray-500 hover:!text-gray-700"
                                                        href={route(
                                                            "pages.edit",
                                                            article.id
                                                        )}
                                                    >
                                                        <i className="fas fa-edit"></i>{" "}
                                                        Edit
                                                    </Dropdown.Link>
                                                    <div
                                                        className="block w-full px-4 py-2 text-left text-sm leading-5 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out !text-gray-500 hover:!text-gray-700"
                                                        onClick={() =>
                                                            onOpenModalDelete(
                                                                article
                                                            )
                                                        }
                                                    >
                                                        <i className="fas fa-trash"></i>{" "}
                                                        Hapus
                                                    </div>
                                                </Dropdown.Content>
                                            </Dropdown>
                                        </Table.Td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </Table>
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

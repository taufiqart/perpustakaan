import AdminLayout from "@/Layouts/admin/AdminLayout";
import React, { useEffect, useState } from "react";
import SecondaryButton from "@/Components/SecondaryButton";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import BookLoader from "@/Components/BookLoader";
import Modal from "@/Components/Modal";
import InputLabel from "@/Components/InputLabel";
import { Head, useForm, usePage } from "@inertiajs/react";
import Alert from "@/Components/Alert";
import Table from "@/Components/Table";
import DangerButton from "@/Components/DangerButton";
import Dropdown from "@/Components/Dropdown";

export default function Slider({ sliders }) {
    const [formAdd, setFormAdd] = useState(false);
    const [flash, setFlash] = useState();
    const [confirmDelete, setConfirmDelete] = useState(false);

    const onCloseModalDelete = () => {
        setConfirmDelete(false);
        setFlash();
        reset();
        clearErrors();
    };
    const onOpenModalDelete = (slider) => {
        setData(slider);
        setConfirmDelete(true);
    };
    const onFormAddClose = () => {
        setFormAdd(false);
        setFlash();
        reset();
        clearErrors();
    };
    const onFormAddOpen = () => {
        setFormAdd(true);
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
    } = useForm({
        title: "",
        slug: "",
    });

    const props = usePage().props;
    useEffect(() => {
        setFlash(props.flash);
        if (props.flash?.success) {
            setTimeout(() => {
                onFormAddClose();
            }, [1000]);
        }
    }, [processing]);

    const onSubmit = (e) => {
        e.preventDefault();

        post(route("slider.store"));
    };
    const deleteFile = (e) => {
        e.preventDefault();
        destroy(route("slider.delete", data.id), {
            onSuccess: () => setTimeout(() => onCloseModalDelete(), [1000]),
        });
    };
    return (
        <>
            <Head title="Slider" />
            <AdminLayout>
                <div className="w-full flex gap-x-3 p-4 pt-0 pl-0 -mt-5">
                    <PrimaryButton
                        onClick={() => {
                            onFormAddOpen();
                        }}
                        className="inline-flex items-center px-4 py-2 bg-blue-400 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                    >
                        <i className="fas fa-plus"></i>
                        Add
                    </PrimaryButton>
                </div>
                <Table>
                    <thead>
                        <tr>
                            <Table.Th>No</Table.Th>
                            <Table.Th>Image</Table.Th>
                            <Table.Th></Table.Th>
                        </tr>
                    </thead>
                    <tbody>
                        {sliders &&
                            sliders.map((slider, idx) => {
                                return (
                                    <tr key={idx}>
                                        <Table.Td>{idx + 1}</Table.Td>
                                        <Table.Td className="!align-top">
                                            <img
                                                src={slider.image}
                                                alt=""
                                                className="h-40 object-contain"
                                            />
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
                                                    {/* <Dropdown.Link
                                                        className="block w-full px-4 py-2 text-left text-sm leading-5 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out !text-gray-500 hover:!text-gray-700"
                                                        href={route(
                                                            "slider.edit",
                                                            article.id
                                                        )}
                                                    >
                                                        <i className="fas fa-edit"></i>{" "}
                                                        Edit
                                                    </Dropdown.Link> */}
                                                    <div
                                                        className="block w-full px-4 py-2 text-left text-sm leading-5 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out !text-gray-500 hover:!text-gray-700"
                                                        onClick={() =>
                                                            onOpenModalDelete(
                                                                slider
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

                <Modal show={formAdd} onClose={onFormAddClose}>
                    <BookLoader loader={processing} />

                    <form className="p-6  " onSubmit={onSubmit}>
                        {!processing &&
                            flash?.error &&
                            flash?.error.map((error) => {
                                return (
                                    <Alert
                                        type="error"
                                        message={error.filename}
                                    />
                                );
                            })}
                        {!processing && flash?.success && (
                            <Alert type="success" message={flash?.success} />
                        )}
                        <div className="mt-3">
                            <InputLabel
                                htmlFor="image"
                                value="image"
                                // className="sr-only"
                            />

                            <input
                                id="image"
                                type="file"
                                accept="image/*"
                                required={true}
                                name="image"
                                multiple={true}
                                onChange={(e) =>
                                    setData("image", e.target.files)
                                }
                                className="mt-1 block w-full text-sm text-slate-500 focus:outline-none focus:border-none
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100"
                            />

                            <InputError
                                message={errors.title}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-6 flex justify-end">
                            <SecondaryButton onClick={onFormAddClose}>
                                Cancel
                            </SecondaryButton>

                            <PrimaryButton
                                className="ml-3 bg-blue-400 hover:bg-blue-600 focus:bg-blue-600"
                                disabled={processing}
                                as="button"
                            >
                                Submit
                            </PrimaryButton>
                        </div>
                    </form>
                </Modal>
                <Modal
                    show={confirmDelete}
                    onClose={onCloseModalDelete}
                    maxWidth="sm"
                >
                    <BookLoader loader={processing} />
                    <form className="p-6 w-full h-full" onSubmit={deleteFile}>
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
                            {data.image}
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

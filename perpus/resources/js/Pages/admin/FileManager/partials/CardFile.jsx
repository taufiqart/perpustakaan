import Alert from "@/Components/Alert";
import BookLoader from "@/Components/BookLoader";
import DangerButton from "@/Components/DangerButton";
import Dropdown from "@/Components/Dropdown";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import { useForm, usePage } from "@inertiajs/react";
import React, { Fragment, useEffect, useRef, useState } from "react";

export default function CardFile({ file }) {
    const fileRef = useRef();
    const props = usePage().props;
    const [open, setOpen] = useState(false);
    const {
        data,
        setData,
        put,
        delete: destroy,
        processing,
        errors,
        clearErrors,
        reset,
    } = useForm();

    const [confirmDelete, setConfirmDelete] = useState(false);

    const [formRename, setFormRename] = useState(false);
    const [flash, setFlash] = useState();

    const onCloseModalDelete = () => {
        setConfirmDelete(false);
        setFlash();
        reset();
        clearErrors();
    };
    const onOpenModalDelete = () => {
        setConfirmDelete(true);
    };

    const onFormRenameClose = () => {
        setFormRename(false);
        setFlash();
        reset();
        clearErrors();
    };
    const onFormRenameOpen = () => {
        setFormRename(true);
    };
    useEffect(() => {
        setFlash(props.flash);
    }, [processing]);

    const deleteFile = (e) => {
        e.preventDefault();
        destroy(route("file.delete"), {
            onSuccess: () => setTimeout(() => onCloseModalDelete(), [1000]),
        });
    };
    const renameFile = (e) => {
        e.preventDefault();
        console.log(data);
        put(route("file.rename"), {
            onSuccess: () => setTimeout(() => onFormRenameClose(), [1000]),
        });
        console.log(flash);
    };

    const copyFunction = async (type = "link", file) => {
        let text = "";
        if (type == "link") {
            text = window.location.origin + file.path;
        } else if (type == "code") {
            text =
                '<embed src="' +
                window.location.origin +
                file.path +
                '" height="500" width="100%"></embed>';
        }
        if (text != "") {
            try {
                await navigator.clipboard.writeText(text);
            } catch (err) {
                alert("Failed to copy: ", err);
            }
        }
    };
    return (
        <div className="relative flex flex-col items-center group">
            <div className="overflow-hidden  text-center break-words ">
                <div className="w-20 md:w-32 h-20 md:h-32 overflow-hidden flex justify-center items-center">
                    {file.type == "image" ? (
                        <img
                            src={file.path}
                            alt={file.filename}
                            className="w-full h-full object-contain"
                        />
                    ) : file.type == "video" ? (
                        <video src={file.path}></video>
                    ) : file.type == "audio" ? (
                        <i className="fas fa-headphones text-7xl text-center"></i>
                    ) : (
                        <i className="fas fa-file text-7xl text-center"></i>
                    )}
                </div>
            </div>
            <div className="flex overflow-clip mt-2  ">
                <h1 className="text-xs md:text-sm w-20 md:w-32 break-words text-center">
                    {file.filename}
                </h1>
                <Dropdown>
                    <Dropdown.Trigger>
                        <button
                            type="button"
                            className=" hidden group-hover:inline-flex hover:bg-white rounded-full items-center w-7 justify-center h-7 border border-transparent text-sm font-medium  text-gray-500  hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                        >
                            <i className="fas fa-ellipsis-v"></i>
                        </button>
                    </Dropdown.Trigger>

                    <Dropdown.Content>
                        <div
                            className="block w-full px-4 py-2 text-left text-sm leading-5 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out !text-gray-500 hover:!text-gray-700"
                            onClick={() => {
                                copyFunction("link", file);
                            }}
                        >
                            <i className="fas fa-link"></i> Link
                        </div>
                        <div
                            className="block w-full px-4 py-2 text-left text-sm leading-5 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out !text-gray-500 hover:!text-gray-700"
                            onClick={() => {
                                copyFunction("code", file);
                            }}
                        >
                            <i className="fas fa-code"></i> Embed
                        </div>
                        <div
                            className="block w-full px-4 py-2 text-left text-sm leading-5 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out !text-gray-500 hover:!text-gray-700"
                            onClick={() => {
                                setData(file);
                                onFormRenameOpen();
                            }}
                        >
                            <i className="fas fa-edit"></i> Rename
                        </div>
                        <div
                            className="block w-full px-4 py-2 text-left text-sm leading-5 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out !text-gray-500 hover:!text-gray-700"
                            onClick={() => {
                                setData(file);
                                onOpenModalDelete();
                            }}
                        >
                            <i className="fas fa-trash"></i> Hapus
                        </div>
                    </Dropdown.Content>
                </Dropdown>
            </div>
            <Modal show={formRename} onClose={onFormRenameClose}>
                <BookLoader loader={processing} />

                <form className="p-6  " onSubmit={renameFile}>
                    {!processing && flash?.error && (
                        <Alert type="error" message={flash?.error} />
                    )}
                    {!processing && flash?.success && (
                        <Alert type="success" message={flash?.success} />
                    )}

                    <div className="mt-3">
                        <InputLabel
                            htmlFor="filename"
                            value="filename"
                            // className="sr-only"
                        />

                        <TextInput
                            id="filename"
                            type="text"
                            name="filename"
                            value={data.filename || ""}
                            onChange={(e) =>
                                setData("filename", e.target.value)
                            }
                            className="mt-1 block w-full "
                            placeholder="filename"
                        />

                        <InputError message={errors.slug} className="mt-2" />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={onFormRenameClose}>
                            Cancel
                        </SecondaryButton>

                        <PrimaryButton
                            className="ml-3 bg-blue-400 hover:bg-blue-600 focus:bg-blue-600"
                            disabled={processing}
                            as="button"
                        >
                            Rename
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
                        {file.filename}
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
        </div>
    );
}

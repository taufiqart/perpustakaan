import { useEffect, useRef, useState } from "react";
import { Link, useForm } from "@inertiajs/react";
import Modal from "@/Components/Modal";
import BookLoader from "../../Components/BookLoader";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";

export default function FilePreview({ dataFiles, deleteRoute, ...props }) {
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

    let styleRef = useRef(null);
    const [files, setFiles] = useState(
        dataFiles?.map((file) => {
            file["type"] = file.mime_type;
            file["name"] = file.title;
            return file;
        })
    );

    const [fileDragging, setFileDragging] = useState(null);
    const [fileDropping, setFileDropping] = useState(null);
    const [errorFiles, setErrorFiles] = useState([]);

    const [deleteModal, setDeleteModal] = useState(false);

    const onDeleteForm = (e) => {
        e.preventDefault();
        destroy(deleteRoute, {
            onSuccess: () => {
                dataFileDnD.remove(data["index"]);
                onCloseDeleteForm();
            },
        });
    };

    const onCloseDeleteForm = () => {
        setDeleteModal(false);
        data["index"] = null;
        data["asset"] = null;
    };
    const dataFileDnD = {
        humanFileSize(size) {
            const i = Math.floor(Math.log(size) / Math.log(1024));
            return (
                (size / Math.pow(1024, i)).toFixed(2) * 1 +
                " " +
                ["B", "kB", "MB", "GB", "TB"][i]
            );
        },
        remove(index) {
            let _files = [...files];
            _files.splice(index, 1);

            setFiles(_files);
        },
        drop(e) {
            let removed, add;
            let _files = [...files];

            removed = _files.splice(fileDragging, 1);
            _files.splice(fileDropping, 0, ...removed);

            setFiles(createFileList(_files));

            setFileDropping(null);
            setFileDragging(null);
        },
        dragenter(e) {
            let targetElem = e.target.closest("[draggable]");

            setFileDropping(targetElem.getAttribute("data-index"));
        },
        dragstart(e) {
            setFileDragging(
                e.target.closest("[draggable]").getAttribute("data-index")
            );
            e.dataTransfer.effectAllowed = "move";
        },
        loadFile(file) {
            const preview = document.querySelectorAll(".preview");
            const blobUrl = URL.createObjectURL(file);
            preview.forEach((elem) => {
                elem.onload = () => {
                    URL.revokeObjectURL(elem.src); // free memory
                };
            });

            return blobUrl;
        },
        addFiles(e) {
            const _f = [...e.target.files].filter((file) => {
                if (file.size / 1024 >= maxFileSize) {
                    setErrorFiles((errorFile) => [...errorFile, file]);
                }
                return file.size / 1024 <= maxFileSize;
            });

            if (multiple) {
                const _files = createFileList([...files], [..._f]);
                setFiles(_files);
            } else {
                setFiles(e.target.files);
            }
        },
    };
    if (files == undefined || files?.length == 0) {
        return <></>;
    }
    return (
        <>
            <Modal show={deleteModal} onClose={onCloseDeleteForm} maxWidth="sm">
                <BookLoader loader={processing} />
                <div className="p-6 w-full h-full">
                    <h2 className="text-lg font-medium text-gray-500">
                        Are you sure you want to delete?
                    </h2>
                    <h2 className="text-lg font-medium text-gray-900">
                        {data?.asset?.title}
                    </h2>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={onCloseDeleteForm}>
                            Cancel
                        </SecondaryButton>

                        <DangerButton
                            className="ml-3"
                            disabled={processing}
                            as="button"
                            onClick={onDeleteForm}
                        >
                            Delete
                        </DangerButton>
                    </div>
                </div>
            </Modal>
            <div className={`bg-white rounded mx-auto ${props.className}`}>
                <div className="relative flex flex-col p-4 text-gray-400 border border-gray-200 rounded">
                    {files?.length > 0 && (
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                            {Array.from({
                                length: files.length,
                            }).map((_, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={`relative flex flex-col items-center overflow-hidden text-center bg-gray-100 border rounded hover:border hover:border-blue-500 select-none`}
                                        style={{ paddingTop: "100%" }}
                                    >
                                        <button
                                            className="absolute top-0 right-0 z-50 p-1 bg-white rounded-bl focus:outline-none"
                                            type="button"
                                            onClick={() => {
                                                data["asset"] = {
                                                    url: files[index].url,
                                                    title: files[index].title,
                                                };
                                                data["index"] = index;
                                                setDeleteModal(true);
                                            }}
                                        >
                                            <svg
                                                className="w-4 h-4 text-gray-700"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                />
                                            </svg>
                                        </button>
                                        <a
                                            href={files[index].url}
                                            download={files[index].title}
                                        >
                                            {files[index].type.includes(
                                                "audio/"
                                            ) && (
                                                <svg
                                                    className="absolute w-12 h-12 text-gray-400 transform top-1/2 -translate-y-2/3"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                                                    />
                                                </svg>
                                            )}
                                            {(files[index].type.includes(
                                                "application/"
                                            ) ||
                                                files[index].type === "") && (
                                                <div className="w-full h-full flex flex-col justify-center items-center">
                                                    <svg
                                                        className="absolute w-12 h-12 text-gray-400 transform top-1/2 -translate-y-2/3"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                                        />
                                                    </svg>
                                                </div>
                                            )}
                                            {files[index].type.includes(
                                                "image/"
                                            ) && (
                                                <img
                                                    className="absolute inset-0 z-0 object-cover w-full h-full border-4 border-white preview"
                                                    src={files[index].url}
                                                />
                                            )}
                                            {files[index].type.includes(
                                                "video/"
                                            ) && (
                                                <video className="absolute inset-0 object-cover w-full h-full border-4 border-white pointer-events-none preview">
                                                    <source
                                                        src={files[index].url}
                                                        type="video/mp4"
                                                    />
                                                </video>
                                            )}
                                            <div className="absolute bottom-0 left-0 right-0 flex flex-col p-2 text-xs bg-white bg-opacity-50">
                                                <span className="w-full font-bold text-gray-900 truncate">
                                                    {files[index].name ??
                                                        "Loading"}
                                                </span>
                                                <span className="text-xs text-gray-900">
                                                    {dataFileDnD.humanFileSize(
                                                        files[index].size
                                                    ) ?? "..."}
                                                </span>
                                            </div>

                                            <div
                                                className={`absolute inset-0 z-40 transition-colors duration-300`}
                                            ></div>
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

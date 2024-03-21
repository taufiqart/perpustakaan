import { useState } from "react";
import "@/config/createFileList";
import ModalFilePreview from "@/Components/ModalFilePreview";
import { usePage } from "@inertiajs/react";
export default function FilePreviewShow({ dataFiles, deleteRoute, ...props }) {
    const _props = usePage().props;

    const [show, setShow] = useState(false);
    const [files, setFiles] = useState(
        dataFiles?.map((file) => {
            file["type"] = file.mime_type;
            file["name"] = file.title;
            return file;
        })
    );

    const dataFileDnD = {
        humanFileSize(size) {
            const i = Math.floor(Math.log(size) / Math.log(1024));
            return (
                (size / Math.pow(1024, i)).toFixed(2) * 1 +
                " " +
                ["B", "kB", "MB", "GB", "TB"][i]
            );
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
    };
    if (files == undefined || files?.length == 0) {
        return <></>;
    }
    return (
        <>
            <div
                className={`bg-white dark:bg-gray-600 rounded mx-auto ${props.className}`}
            >
                <div className="relative flex flex-col p-4 text-gray-400 border border-gray-200 rounded dark:border-gray-400">
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
                                        <div
                                            onClick={() => setShow(true)}
                                            className="cursor-pointer"
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
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
            <ModalFilePreview
                show={show}
                onClose={() => setShow(!show)}
                data={files.map((file) => {
                    file.fileName = file.title;
                    file.uri = `${_props.ziggy.url}${file.url}`;
                    return file;
                })}
            />
        </>
    );
}

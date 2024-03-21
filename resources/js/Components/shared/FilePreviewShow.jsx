import React from "react";
import { usePage } from "@inertiajs/react";

import { ModalFilePreview, RenderFileIcon } from "@/Components/shared";

export default function FilePreviewShow({ dataFiles, deleteRoute, ...props }) {
    const _props = usePage().props;

    const [show, setShow] = React.useState(false);
    const [files, setFiles] = React.useState(
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
                                            <RenderFileIcon
                                                file={files[index]}
                                            />
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

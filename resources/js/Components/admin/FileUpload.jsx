import { useEffect, useRef, useState } from "react";
import "@/config/createFileList";
import Modal from "@/Components/Modal";
import InputError from "@/Components/InputError";

export default function FileUpload({
    accept = "*",
    multiple = true,
    setData,
    maxFileSize = 2048,
    ...props
}) {
    let styleRef = useRef(null);
    const [files, setFiles] = useState([]);
    const [fileDragging, setFileDragging] = useState(null);
    const [fileDropping, setFileDropping] = useState(null);
    const [errorFiles, setErrorFiles] = useState([]);

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

            setFiles(createFileList(_files));
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

    useEffect(() => {
        setData(files);
    }, [files]);

    return (
        <>
            <Modal
                show={errorFiles.length > 0}
                onClose={() => setErrorFiles([])}
            >
                <div className="min-h-80 p-5">
                    {errorFiles.map((file) => (
                        <InputError
                            message={`${
                                file.name
                            } max size must ${dataFileDnD.humanFileSize(
                                maxFileSize * 1024
                            )}`}
                        />
                    ))}
                </div>
            </Modal>
            <div className="bg-white rounded mx-auto">
                <div className="relative flex flex-col p-4 text-gray-400 border border-gray-200 rounded">
                    <div
                        ref={(e) => (styleRef = e)}
                        className="relative flex flex-col text-gray-400 border border-gray-200 border-dashed rounded cursor-pointer"
                    >
                        <input
                            {...props}
                            accept={accept}
                            type="file"
                            multiple={multiple}
                            className="absolute inset-0 z-50 w-full h-full p-0 m-0 outline-none opacity-0 cursor-pointer"
                            onChange={dataFileDnD.addFiles}
                            onDragOver={() => {
                                styleRef?.classList.add("border-blue-400");
                                styleRef?.classList.add("ring-4");
                                styleRef?.classList.add("ring-inset");
                            }}
                            onDragLeave={() => {
                                styleRef?.classList.remove("border-blue-400");
                                styleRef?.classList.remove("ring-4");
                                styleRef?.classList.remove("ring-inset");
                            }}
                            onDrop={(e) => {
                                styleRef?.classList.remove("border-blue-400");
                                styleRef?.classList.remove("ring-4");
                                styleRef?.classList.remove("ring-inset");
                            }}
                            title=""
                        />

                        <div className="flex flex-col items-center justify-center py-10 text-center">
                            <svg
                                className="w-6 h-6 mr-1 text-current-50"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                            <p className="m-0">
                                Drag your files here or click in this area.
                            </p>
                        </div>
                    </div>
                    {files.length > 0 && (
                        <div
                            className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                            onDrop={(e) => {
                                e.preventDefault();
                                dataFileDnD.drop(e);
                            }}
                            onDragOver={(e) => {
                                e.preventDefault();
                                e.dataTransfer.dropEffect = "move";
                            }}
                        >
                            {Array.from({
                                length: files.length,
                            }).map((_, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={`relative flex flex-col items-center overflow-hidden text-center bg-gray-100 border rounded cursor-move select-none ${
                                            fileDragging == index &&
                                            "border-blue-600"
                                        }`}
                                        style={{ paddingTop: "100%" }}
                                        onDragStart={dataFileDnD.dragstart}
                                        onDragEnd={() => setFileDragging(null)}
                                        draggable="true"
                                        data-index={index}
                                    >
                                        <button
                                            className="absolute top-0 right-0 z-50 p-1 bg-white rounded-bl focus:outline-none"
                                            type="button"
                                            onClick={() =>
                                                dataFileDnD.remove(index)
                                            }
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
                                        )}
                                        {files[index].type.includes(
                                            "image/"
                                        ) && (
                                            <img
                                                className="absolute inset-0 z-0 object-cover w-full h-full border-4 border-white preview"
                                                src={dataFileDnD.loadFile(
                                                    files[index]
                                                )}
                                            />
                                        )}
                                        {files[index].type.includes(
                                            "video/"
                                        ) && (
                                            <video className="absolute inset-0 object-cover w-full h-full border-4 border-white pointer-events-none preview">
                                                <source
                                                    src={dataFileDnD.loadFile(
                                                        files[index]
                                                    )}
                                                    type="video/mp4"
                                                />
                                            </video>
                                        )}
                                        <div className="absolute bottom-0 left-0 right-0 flex flex-col p-2 text-xs bg-white bg-opacity-50">
                                            <span className="w-full font-bold text-gray-900 truncate">
                                                {files[index].name ?? "Loading"}
                                            </span>
                                            <span className="text-xs text-gray-900">
                                                {dataFileDnD.humanFileSize(
                                                    files[index].size
                                                ) ?? "..."}
                                            </span>
                                        </div>

                                        <div
                                            className={`absolute inset-0 z-40 transition-colors duration-300 ${
                                                fileDropping == index &&
                                                fileDragging != index &&
                                                "bg-blue-200 bg-opacity-80"
                                            }`}
                                            onDragEnter={dataFileDnD.dragenter}
                                            onDragLeave={() =>
                                                setFileDropping(null)
                                            }
                                        ></div>
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

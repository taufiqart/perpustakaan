import { useEffect, useRef, useState } from "react";
import "@/config/createFileList";
import Modal from "@/Components/Modal";
import InputError from "@/Components/InputError";
export default function SimpleFileUpload({
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
        </>
    );
}

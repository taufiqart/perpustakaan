import React from "react";

import { TextInput } from "@/Components/default";

export default function FileUploadPreview({
    accept = "*",
    setData,
    maxFileSize = 2048,
    imgClassName = "w-[180px] h-[255px] overflow-hidden rounded-lg",
    containerImgClassName = "",
    className = "",
    ...props
}) {
    let imagePreview = React.useRef(null);
    let inputFile = React.useRef(null);
    const [files, setFiles] = React.useState(null);

    const remove = () => {
        setFiles(null);
        URL.revokeObjectURL(imagePreview.src);
        inputFile.files = undefined;
        inputFile.value = "";
    };

    React.useEffect(() => {
        files && (imagePreview.src = URL.createObjectURL(files));
        setData(files);
    }, [files]);
    return (
        <div className="flex flex-col mt-3 gap-y-3">
            {files && (
                <div className={"relative " + className ?? imgClassName}>
                    <button
                        className="absolute top-0 right-0 z-50 p-1 bg-white rounded-bl focus:outline-none"
                        type="button"
                        onClick={() => remove()}
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
                    <div className={containerImgClassName}>
                        <img
                            className={imgClassName}
                            ref={(e) => (imagePreview = e)}
                            onLoad={(e) =>
                                URL.revokeObjectURL(imagePreview.src)
                            }
                        />
                    </div>
                </div>
            )}
            <TextInput
                {...props}
                accept={accept}
                onChange={(e) => {
                    setFiles(e.target.files[0]);
                }}
                ref={(e) => (inputFile = e)}
                type="file"
                className="block w-full text-sm text-slate-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700
                                hover:file:bg-violet-100"
            />
        </div>
    );
}

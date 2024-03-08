export default function FilePreview() {
    return (
        <div
            key={index}
            className={`relative flex flex-col items-center overflow-hidden text-center bg-gray-100 border rounded cursor-move select-none ${
                fileDragging == index && "border-blue-600"
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
                onClick={() => dataFileDnD.remove(index)}
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
            {files[index].type.includes("audio/") && (
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
            {(files[index].type.includes("application/") ||
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
            {files[index].type.includes("image/") && (
                <img
                    className="absolute inset-0 z-0 object-cover w-full h-full border-4 border-white preview"
                    src={dataFileDnD.loadFile(files[index])}
                />
            )}
            {files[index].type.includes("video/") && (
                <video className="absolute inset-0 object-cover w-full h-full border-4 border-white pointer-events-none preview">
                    <source
                        src={dataFileDnD.loadFile(files[index])}
                        type="video/mp4"
                    />
                </video>
            )}
            <div className="absolute bottom-0 left-0 right-0 flex flex-col p-2 text-xs bg-white bg-opacity-50">
                <span className="w-full font-bold text-gray-900 truncate">
                    {files[index].name ?? "Loading"}
                </span>
                <span className="text-xs text-gray-900">
                    {dataFileDnD.humanFileSize(files[index].size) ?? "..."}
                </span>
            </div>

            <div
                className={`absolute inset-0 z-40 transition-colors duration-300 ${
                    fileDropping == index &&
                    fileDragging != index &&
                    "bg-blue-200 bg-opacity-80"
                }`}
                onDragEnter={dataFileDnD.dragenter}
                onDragLeave={() => setFileDropping(null)}
            ></div>
        </div>
    );
}

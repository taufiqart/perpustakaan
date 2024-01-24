import React from "react";

export default function Alert({ type, message }) {
    let bg;
    switch (type) {
        case "error":
            bg = "bg-red-500";
            break;
        case "info":
            bg = "bg-blue-500";
            break;
        case "success":
            bg = "bg-green-500";
            break;
        case "warning":
            bg = "bg-orange-500";
            break;
        default:
            bg = "bg-green-500";
            break;
    }
    return (
        <div
            className={`${bg} font-regular relative mb-4 block w-full rounded-lg  p-4 text-base leading-5 text-white opacity-100`}
        >
            {message}
        </div>
    );
}

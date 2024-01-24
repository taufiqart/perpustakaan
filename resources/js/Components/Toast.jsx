import React from "react";

export default function Toast({ children, className = "" }) {
    return (
        <div
            className={`fixed bottom-[10%]  w-full z-50 left-0 flex justify-center items-center ${className}`}
        >
            <div className="bg-white px-4 py-1 rounded-full shadow-md">
                {children}
            </div>
        </div>
    );
}

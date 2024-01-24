import React, { useState } from "react";

export default function Dropdown({ children, component }) {
    const [openDropdown, setOpenDropdown] = useState(false);
    window.addEventListener("click", () => {
        setOpenDropdown(!openDropdown);
    });
    return (
        <>
            <a
                className="text-blueGray-500 block relative"
                href="#"
                onClick={() => {
                    setOpenDropdown(!openDropdown);
                }}
            >
                {component}
            </a>
            <div
                className={`${
                    openDropdown ? "block" : "hidden"
                } bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 absolute  right-0`}
            >
                {children}
            </div>
        </>
    );
}

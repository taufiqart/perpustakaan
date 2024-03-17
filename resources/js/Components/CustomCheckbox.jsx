import { useRef, useState } from "react";

export default function CustomCheckbox({
    label,
    checked = false,
    className,
    ...props
}) {
    const [_checked, setChecked] = useState(checked);
    return (
        <div className={`relative flex items-start m-1`}>
            <input
                {...props}
                type="checkbox"
                className={`hidden peer `}
                checked={_checked}
                onChange={() => {}}
            />
            <label
                onClick={() => {
                    setChecked(!_checked);
                }}
                className={`"inline-flex items-center justify-between w-auto p-2 
                font-medium tracking-tight border 
                rounded-lg cursor-pointer bg-brand-light 
                text-brand-black border-gray-400 dark:border-white peer-checked:border-white dark:peer-checked:border-rose-300 peer-checked:bg-rose-400 
                peer-checked:text-white peer-checked:font-semibold select-none
                peer-checked:decoration-brand-dark decoration-2 ${className}`}
            >
                {label}
            </label>
        </div>
    );
}

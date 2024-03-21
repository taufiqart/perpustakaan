import React from "react";

import InputLabel from "./InputLabel";
import TextInput from "./TextInput";
import InputError from "./InputError";

export default function Input({
    label,
    name,
    error,
    value = "",
    className = "",
    ...props
}) {
    const [show, setShow] = React.useState(false);
    if (props?.type == "password") {
        return (
            <div className="mt-3 w-full">
                <InputLabel htmlFor={name} value={label} />

                <div className="flex items-center w-full">
                    <div className="w-full">
                        <TextInput
                            {...props}
                            type={show ? "text" : "password"}
                            value={value}
                            //@ts-ignore
                            id={name}
                            name={name}
                            className={`mt-1 block w-full ${className}`}
                        />
                    </div>

                    <button
                        className="-ml-8 mt-1"
                        type="button"
                        onClick={() => setShow(!show)}
                    >
                        <i
                            className={`fas fa-eye-slash ${!show && "hidden"}`}
                        ></i>
                        <i className={`fas fa-eye ${show && "hidden"}`}></i>
                    </button>
                </div>
                <InputError message={error} className="mt-2" />
            </div>
        );
    }
    return (
        <div className="mt-3 w-full">
            <InputLabel htmlFor={name} value={label} />
            <TextInput
                value={value}
                {...props}
                //@ts-ignore
                id={name}
                name={name}
                className={`mt-1 block w-full ${className}`}
            />
            <InputError message={error} className="mt-2" />
        </div>
    );
}

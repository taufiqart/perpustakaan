import InputLabel from "./InputLabel";
import TextInput from "./TextInput";
import InputError from "./InputError";
import React from "react";

export default function Input({ label, name, error, ...props }) {
    return (
        <div className="mt-3">
            <InputLabel htmlFor={name} value={label} />
            <TextInput
                {...props}
                //@ts-ignore
                id={name}
                name={name}
                className="mt-1 block w-full"
            />
            <InputError message={error} className="mt-2" />
        </div>
    );
}

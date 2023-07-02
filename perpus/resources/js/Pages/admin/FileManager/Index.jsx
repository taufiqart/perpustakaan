import AdminLayout from "@/Layouts/admin/AdminLayout";
import React, { useEffect, useState } from "react";
import CardFile from "./partials/CardFile";
import SecondaryButton from "@/Components/SecondaryButton";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import BookLoader from "@/Components/BookLoader";
import Modal from "@/Components/Modal";
import InputLabel from "@/Components/InputLabel";
import { useForm, usePage } from "@inertiajs/react";
import Alert from "@/Components/Alert";

export default function Index({ files }) {
    const [formAdd, setFormAdd] = useState(false);
    const [flash, setFlash] = useState();

    const onFormAddClose = () => {
        setFormAdd(false);
        setFlash();
        reset();
        clearErrors();
    };
    const onFormAddOpen = () => {
        setFormAdd(true);
    };

    const {
        data,
        setData,
        errors,
        processing,
        post,
        put,
        delete: destroy,
        reset,
        clearErrors,
    } = useForm({
        title: "",
        slug: "",
    });

    const props = usePage().props;
    useEffect(() => {
        setFlash(props.flash);
        if(props.flash?.success){
          setTimeout(()=>{

            onFormAddClose();
          },[1000])

        }
    }, [processing]);

    const onSubmit = (e) => {
        e.preventDefault();

        post(route("file.store"));
    };
    return (
        <AdminLayout>
            <div className="w-full flex gap-x-3 p-4 pt-0 pl-0 -mt-5">
                <PrimaryButton
                    onClick={() => {
                        onFormAddOpen();
                    }}
                    className="inline-flex items-center px-4 py-2 bg-blue-400 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                >
                    <i className="fas fa-plus"></i>
                    Add
                </PrimaryButton>
            </div>
            <div className="w-full h-full bg-slate-100 rounded-md relative justify-evenly flex flex-wrap p-4 gap-4">
                {files &&
                    files.map((file, idx) => {
                        return <CardFile file={file} key={idx} />;
                    })}
            </div>

            <Modal show={formAdd} onClose={onFormAddClose}>
                <BookLoader loader={processing} />

                <form className="p-6  " onSubmit={onSubmit}>
                    {!processing &&
                        flash?.error &&
                        flash?.error.map((error) => {
                            return (
                                <Alert type="error" message={error.filename} />
                            );
                        })}
                    {!processing && flash?.success && (
                        <Alert type="success" message={flash?.success} />
                    )}
                    <div className="mt-3">
                        <InputLabel
                            htmlFor="file"
                            value="file"
                            // className="sr-only"
                        />

                        <input
                            id="file"
                            type="file"
                            name="file"
                            multiple={true}
                            onChange={(e) => setData("file", e.target.files)}
                            className="mt-1 block w-full text-sm text-slate-500 focus:outline-none focus:border-none
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100"
                            placeholder="title"
                        />

                        <InputError message={errors.title} className="mt-2" />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={onFormAddClose}>
                            Cancel
                        </SecondaryButton>

                        <PrimaryButton
                            className="ml-3 bg-blue-400 hover:bg-blue-600 focus:bg-blue-600"
                            disabled={processing}
                            as="button"
                        >
                            Submit
                        </PrimaryButton>
                    </div>
                </form>
            </Modal>
        </AdminLayout>
    );
}

import React, { useEffect, useState } from "react";
import AdminLayout from "@/Layouts/admin/AdminLayout";
import Dropdown from "@/Components/Dropdown";

// import Dropdown from "@/Components/admin/Dropdown/Dropdown";
import CardCategory from "../../Components/admin/Card/CardCategory";
import Modal from "@/Components/Modal";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import { useForm, usePage } from "@inertiajs/react";
import { convertToSlug } from "@/config/function";
import PrimaryButton from "@/Components/PrimaryButton";
import Alert from "../../Components/Alert";
import BookLoader from "../../Components/BookLoader";
export default function Navigation({ categories }) {
    const [confirmDelete, setConfirmDelete] = useState(false);

    const [formAdd, setFormAdd] = useState(false);
    const [flash, setFlash] = useState();

    const onCloseModalDelete = () => {
        setConfirmDelete(false);
        setFlash();
        reset();
        clearErrors();
    };
    const onOpenModalDelete = () => {
        setConfirmDelete(true);
    };

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
    }, [processing]);

    const onSubmitCategory = (e) => {
        e.preventDefault();
        // console.log(data);
        if (data?.edit) {
            put(route("navigation.update", data.id), {
                onSuccess: () => setTimeout(() => onFormAddClose(), [1000]),
            });
        } else {
            post(route("navigation.store"), {
                onSuccess: () => setTimeout(() => onFormAddClose(), [1000]),
            });
        }
    };

    const onDeleteForm = (e) => {
        e.preventDefault();
        destroy(route("navigation.destroy", data.id), {
            onSuccess: () => setTimeout(() => onCloseModalDelete(), [1000]),
        });
    };

    const handleOrder = () => {};
    return (
        <AdminLayout>
            <div className="w-full flex gap-x-3 p-4 pt-0 pl-0 -mt-5">
                <PrimaryButton
                    onClick={() => {
                        setData({
                            ...data,
                            ["create"]: true,
                            ["order"]: categories.length,
                        });
                        onFormAddOpen();
                    }}
                    className="inline-flex items-center px-4 py-2 bg-blue-400 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                >
                    <i className="fas fa-plus"></i>
                    Add
                </PrimaryButton>
            </div>
            <div className="flex flex-col gap-y-1">
                {categories &&
                    categories.map((category) => {
                        return (
                            <div
                                className="w-full max-w-lg flex flex-col gap-y-1 relative"
                                key={category.slug}
                            >
                                <CardCategory
                                    onAdd={onFormAddOpen}
                                    onDelete={onOpenModalDelete}
                                    setDataAdd={setData}
                                    category={category}
                                    key={category}
                                />
                                {category.child.length > 0 &&
                                    category.child.map((child) => {
                                        return (
                                            <CardCategory
                                                key={child.slug}
                                                category={child}
                                                child={true}
                                                onAdd={onFormAddOpen}
                                                onDelete={onOpenModalDelete}
                                                setDataAdd={setData}
                                                className="pl-10"
                                            />
                                        );
                                    })}
                            </div>
                        );
                    })}
            </div>
            <Modal show={formAdd} onClose={onFormAddClose}>
                <BookLoader loader={processing} />

                <form className="p-6  " onSubmit={onSubmitCategory}>
                    {!processing && flash?.error && (
                        <Alert type="error" message={flash?.error} />
                    )}
                    {!processing && flash?.success && (
                        <Alert type="success" message={flash?.success} />
                    )}
                    <div className="mt-3">
                        <InputLabel
                            htmlFor="title"
                            value="Title"
                            // className="sr-only"
                        />

                        <TextInput
                            id="title"
                            type="text"
                            name="title"
                            value={data.title || ""}
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    ["title"]: e.target.value,

                                    ["slug"]: convertToSlug(
                                        e.target.value != undefined
                                            ? e.target.value
                                            : ""
                                    ),
                                });
                            }}
                            className="mt-1 block w-full"
                            placeholder="title"
                        />

                        <InputError message={errors.title} className="mt-2" />
                    </div>
                    <div className="mt-3">
                        <InputLabel
                            htmlFor="slug"
                            value="Slug"
                            // className="sr-only"
                        />

                        <TextInput
                            id="slug"
                            type="text"
                            name="slug"
                            value={data.slug || ""}
                            onChange={(e) => setData("slug", e.target.value)}
                            className="mt-1 block w-full "
                            placeholder="slug"
                        />

                        <InputError message={errors.slug} className="mt-2" />
                    </div>

                    {data?.child?.length > 0 || data?.create ? (
                        <div className=""></div>
                    ) : (
                        <div className="mt-3">
                            <InputLabel
                                htmlFor="parent_id"
                                value="Parent"
                                // className="sr-only"
                            />

                            <select
                                id="parent_id"
                                type="text"
                                name="parent_id"
                                defaultValue={data.parent_id}
                                onChange={(e) =>
                                    setData("parent_id", e.target.value)
                                }
                                className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                                placeholder="parent"
                            >
                                <option value="">Parent</option>
                                {categories.map((category) => {
                                    return (
                                        <option
                                            value={category.id}
                                            key={category.id}
                                        >
                                            {category.title}
                                        </option>
                                    );
                                })}
                            </select>

                            <InputError
                                message={errors.parent_id}
                                className="mt-2"
                            />
                        </div>
                    )}

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
            <Modal
                show={confirmDelete}
                onClose={onCloseModalDelete}
                maxWidth="sm"
            >
                <BookLoader loader={processing} />
                <form className="p-6 w-full h-full" onSubmit={onDeleteForm}>
                    {!processing && flash?.error && (
                        <Alert type="error" message={flash?.error} />
                    )}
                    {!processing && flash?.success && (
                        <Alert type="success" message={flash?.success} />
                    )}
                    <h2 className="text-lg font-medium text-gray-500">
                        Are you sure you want to delete?
                    </h2>
                    <h2 className="text-lg font-medium text-gray-900">
                        {data.title}
                    </h2>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={onCloseModalDelete}>
                            Cancel
                        </SecondaryButton>

                        <DangerButton
                            className="ml-3"
                            disabled={processing}
                            as="button"
                        >
                            Delete
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </AdminLayout>
    );
}

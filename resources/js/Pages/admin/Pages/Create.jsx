import React from "react";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { Editor } from "@tinymce/tinymce-react";

import AdminLayout from "@/Layouts/admin/AdminLayout";

// LOCAL COMPONENT
import {
    Alert,
    TextInput,
    InputError,
    InputLabel,
    PrimaryButton,
} from "@/Components/default";

import { BookLoader } from "@/Components/shared";

import { tinymceInit } from "@/config/tinymce";

export default function Create({ article, categories }) {
    const [flash, setFlash] = React.useState();
    const editorRef = React.useRef(null);

    if (article?.content) {
        article["content"] = article.content.replaceAll('src="../..', 'src="');
    }

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
    } = useForm(article);

    const props = usePage().props;

    React.useEffect(() => {
        setFlash(props.flash);
    }, [processing]);

    const onSubmit = (e) => {
        e.preventDefault();
        data["content"] = editorRef.current.getContent();
        data.id
            ? put(route("pages.update", data.id), {
                  onSuccess: () => {
                      setTimeout(() => {
                          window.location = route("pages.index");
                      }, 1000);
                  },
              })
            : post(route("pages.store"), {
                  onSuccess: () => {
                      setTimeout(() => {
                          window.location = route("pages.index");
                      }, 1000);
                  },
              });
    };
    return (
        <>
            <Head title={`Pages ${article?.title == null ? "Add" : "Edit"}`} />
            <AdminLayout>
                <BookLoader loader={processing} />

                <div className="bg-white rounded-md">
                    <form className="p-6  " onSubmit={onSubmit}>
                        {!processing && flash?.error && (
                            <Alert type="error" message={flash?.error} />
                        )}
                        {!processing && flash?.success && (
                            <Alert type="success" message={flash?.success} />
                        )}
                        <div className="mt-3">
                            <InputLabel htmlFor="title" value="Title" />

                            <TextInput
                                id="title"
                                type="text"
                                name="title"
                                value={data.title}
                                onChange={(e) => {
                                    setData("title", e.target.value);
                                }}
                                className="mt-1 block w-full"
                                placeholder="title"
                            />

                            <InputError
                                message={errors.title}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-3">
                            <InputLabel
                                htmlFor="category_id"
                                value="Category"
                            />

                            <select
                                id="category_id"
                                type="text"
                                name="category_id"
                                defaultValue={data.category_id}
                                onChange={(e) =>
                                    setData("category_id", e.target.value)
                                }
                                className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                                placeholder="category"
                            >
                                <option value="">Select Category</option>
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
                        <div className="mt-3">
                            <InputLabel htmlFor="content" value="Content" />

                            <Editor
                                tinymceScriptSrc="/assets/tinymce/tinymce.min.js"
                                onInit={(evt, editor) =>
                                    (editorRef.current = editor)
                                }
                                initialValue={data.content}
                                init={tinymceInit}
                            />
                            <InputError
                                message={errors.content}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-6 flex justify-end">
                            <Link
                                className="inline-flex justify-center items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 "
                                href={route("pages.index")}
                            >
                                <i className="fas fa-arrow-left"></i> Back
                            </Link>

                            <PrimaryButton
                                className="ml-3 bg-blue-400 hover:bg-blue-600 focus:bg-blue-600"
                                disabled={processing}
                                as="button"
                            >
                                Submit
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </AdminLayout>
        </>
    );
}

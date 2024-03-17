import Alert from "@/Components/Alert";
import BookLoader from "@/Components/BookLoader";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/admin/AdminLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { Editor } from "@tinymce/tinymce-react";
import React, { useEffect, useRef, useState } from "react";
import FileUpload from "@/Components/admin/FileUpload";

import CreatableSelect from "react-select/creatable";
import SimpleFileUpload from "@/Components/admin/SimpleFileUpload";
import ImageFromText from "@/Components/admin/ImageFromText";
import FileUploadPreview from "@/Components/admin/FileUploadPreview";
import { tinymceInitPaper } from "@/config/tinymce";
import { createOption } from "@/config/function";
import FilePreview from "@/Components/admin/FilePreview";

export default function Create({ paper, categories, genres }) {
    const [flash, setFlash] = useState();
    const [cover, setCover] = useState(null);
    const [coverFile, setCoverFile] = useState(null);
    const editorRef = useRef(null);
    
    const [optionCategories, setOptionCategories] = useState(
        categories.map((category) =>
            createOption(category.id, category.category)
        )
    );

    const [optionGenres, setOptionGenres] = useState(
        genres.map((genre) => createOption(genre.id, genre.genre))
    );

    const [valueCategories, setValueCategories] = useState(
        paper?.categories.map((e) => createOption(e.id, e.category))
    );
    const [valueGenres, setValueGenres] = useState(
        paper?.genres.map((e) => createOption(e.id, e.genre))
    );

    if (paper?.content) {
        paper["content"] = paper.content.replaceAll('src="../..', 'src="');
    }

    const { data, setData, errors, processing, post, clearErrors } = useForm(
        paper
            ? {
                  id: paper.id,
                  slug: paper.slug,
                  title: paper.title,
                  content: paper.content,
                  poster: paper.poster,
                  categories: paper.categories,
                  genres: paper.genres,
              }
            : { title: "", cover: null }
    );

    const props = usePage().props;

    useEffect(() => {
        setFlash(props.flash);
    }, [processing]);

    const onSubmit = (e) => {
        e.preventDefault();
        data["categories"] = valueCategories;
        data["genres"] = valueGenres;
        data["content"] = editorRef.current.getContent();
        data["cover"] = coverFile || cover;

        clearErrors();
        post(
            data.slug ? route("paper.update", data.slug) : route("paper.store"),
            {
                onSuccess: () => {
                    setTimeout(() => {
                        window.location = route("paper.index");
                    }, 1000);
                },
            }
        );
    };

    return (
        <>
            <Head title={`Paper ${paper?.title == null ? "Add" : "Edit"}`} />
            <AdminLayout>
                <BookLoader loader={processing} />

                <div className="bg-white rounded-md">
                    <form className="p-6" onSubmit={onSubmit}>
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
                                required
                                value={data.title}
                                onChange={(e) => {
                                    setData("title", e.target.value);
                                }}
                                className="mt-1 block w-full"
                                placeholder="title"
                            />

                            <InputError
                                message={errors?.title}
                                className="mt-2"
                            />
                        </div>
                        <div className="flex flex-col md:flex-row gap-x-4">
                            <div className="mt-3 w-full">
                                <InputLabel
                                    htmlFor="categories"
                                    value="Category"
                                />
                                <CreatableSelect
                                    className="relative z-10 mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                                    inputId="categories"
                                    name="categories"
                                    // required
                                    isClearable
                                    isMulti
                                    options={optionCategories}
                                    value={valueCategories}
                                    onChange={(value) =>
                                        setValueCategories(value)
                                    }
                                />

                                <InputError
                                    message={errors.categories}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-3 w-full">
                                <InputLabel htmlFor="genres" value="Genre" />
                                <CreatableSelect
                                    className="relative z-10 mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                                    inputId="genres"
                                    name="genres"
                                    isClearable
                                    isMulti
                                    options={optionGenres}
                                    value={valueGenres}
                                    onChange={(value) => setValueGenres(value)}
                                />

                                <InputError
                                    message={errors.genres}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                        <div className="mt-3">
                            <InputLabel htmlFor="cover" value="cover" />
                            {coverFile == null && data?.poster == null && (
                                <ImageFromText
                                    text={data.title}
                                    setData={(_cover) => setCover(_cover)}
                                />
                            )}
                            {/* <SimpleFileUpload required accept={".jpg,.jpeg,.png,.gif"} setData={(data) => setData("cover", data)}/> */}
                            {data?.poster && coverFile == null && (
                                <img
                                    className="w-[180px] h-[255px] overflow-hidden rounded-lg"
                                    src={data.poster}
                                />
                            )}
                            <p className="text-sm text-red-400 mt-4">
                                or Upload File
                            </p>
                            <FileUploadPreview
                                accept={".jpg,.jpeg,.png,.gif"}
                                setData={(data) => setCoverFile(data)}
                            />

                            <InputError
                                message={errors?.cover}
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
                                init={tinymceInitPaper}
                            />

                            <InputError
                                message={errors.content}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-3">
                            <InputLabel value="Assets" />
                            <FileUpload
                                setData={(_data_) => setData("assets", _data_)}
                            />
                            {paper?.post_assets &&
                                paper?.post_assets.length > 0 && (
                                    <FilePreview
                                        className="mt-2"
                                        dataFiles={paper?.post_assets}
                                        deleteRoute={route("asset.delete")}
                                    />
                                )}
                        </div>
                        <div className="mt-6 flex justify-end">
                            <Link
                                className="inline-flex justify-center items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 "
                                href={route("paper.index")}
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

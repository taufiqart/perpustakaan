import Alert from "@/Components/Alert";
import BookLoader from "@/Components/BookLoader";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/admin/AdminLayout";
import { convertToSlug, tiny_image_upload_handler } from "@/config/function";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { Editor } from "@tinymce/tinymce-react";
import React, { useEffect, useRef, useState } from "react";
import FileUpload from "@/Components/admin/FileUpload";

import CreatableSelect from "react-select/creatable";
import SimpleFileUpload from "@/Components/admin/SimpleFileUpload";
import ImageFromText from "@/Components/admin/ImageFromText";
import FileUploadPreview from "@/Components/admin/FileUploadPreview";

const createOption = (value, label) => {
    return { value, label };
};
const tinymceInit = {
    automatic_uploads: true,
    images_upload_url: route("upload.images"),
    images_upload_handler: tiny_image_upload_handler,
    images_upload_credentials: true,
    height: 500,
    menubar: true,
    pagebreak_split_block: true,
    plugins: [
        "advlist autolink lists link image charmap print preview anchor",
        "searchreplace visualblocks code fullscreen",
        "insertdatetime media table paste code help wordcount",
        "print code preview importcss searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons",
    ],

    content_style:
        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",

    toolbar:
        "undo redo | code  bold italic underline strikethrough | pagebreak | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | charmap emoticons | fullscreen preview save print | image media pageembed link anchor codesample | ltr rtl",
    fontsize_formats: "8pt 10pt 12pt 14pt 18pt 24pt 36pt",
    importcss_append: true,
    template_cdate_format: "[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]",
    template_mdate_format: "[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]",
    toolbar_mode: "sliding",
    font_formats:
        "Andale Mono=andale mono,times;Poppins; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
};

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

    const [valueCategories, setValueCategories] = useState(paper?.categories);
    const [valueGenres, setValueGenres] = useState(paper?.genres);

    if (paper?.content) {
        paper["content"] = paper.content.replaceAll('src="../..', 'src="');
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
    } = useForm(paper ?? { title: "", cover: null });

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
        console.log(data);
        clearErrors()
        data.id
            ? put(route("paper.update", data.id), {
                  onSuccess: () => {
                      setTimeout(() => {
                          window.location = route("paper.index");
                      }, 1000);
                  },
              })
            : post(route("paper.store"), {
                  onSuccess: (e) => {
                      console.log(e);
                      setTimeout(() => {
                          window.location = route("paper.index");
                      }, 1000);
                  },
              });
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
                            {coverFile == null && (
                                <ImageFromText
                                    text={data.title}
                                    setData={(_cover) => setCover(_cover)}
                                />
                            )}
                            {/* <SimpleFileUpload required accept={".jpg,.jpeg,.png,.gif"} setData={(data) => setData("cover", data)}/> */}
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
                                init={tinymceInit}
                            />

                            <InputError
                                message={errors.content}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-3">
                            <InputLabel value="Assets" />
                            <FileUpload
                                setData={(data) => setData("assets", data)}
                            />
                        </div>
                        <div className="mt-6 flex justify-end">
                            <Link
                                className="inline-flex justify-center items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 "
                                href={route("paper.store")}
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

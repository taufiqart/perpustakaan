import Alert from "@/Components/Alert";
import BookLoader from "@/Components/BookLoader";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/admin/AdminLayout";
import { convertToSlug, tiny_image_upload_handler } from "@/config/function";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { Editor } from "@tinymce/tinymce-react";
import React, { useEffect, useRef, useState } from "react";

export default function Create({ article, categories }) {
    const [flash, setFlash] = useState();
    const editorRef = useRef(null);
    // const navigate = use()
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

    useEffect(() => {
        setFlash(props.flash);
    }, [processing]);

    const onSubmit = (e) => {
        e.preventDefault();
        data["content"] = editorRef.current.getContent();

        data.id
            ? put(route("pages.update", data.id), {
                  onSuccess: () => {
                      // if (errors == Object) {
                      setTimeout(() => {
                          window.location = route("pages.index");
                      }, 1000);
                      // }
                  },
              })
            : post(route("pages.store"), {
                  onSuccess: () => {
                      // if (errors == Object) {
                      setTimeout(() => {
                          window.location = route("pages.index");
                      }, 1000);
                      // }
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
                            <InputLabel
                                htmlFor="title"
                                value="Title"
                                // className="sr-only"
                            />

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
                                // className="sr-only"
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
                                <option value="">Category</option>
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
                            <InputLabel
                                htmlFor="content"
                                value="Content"
                                // className="sr-only"
                            />

                            <Editor
                                tinymceScriptSrc="/assets/tinymce/tinymce.min.js"
                                onInit={(evt, editor) =>
                                    (editorRef.current = editor)
                                }
                                initialValue={data.content}
                                // value={data.content}
                                // onEditorChange={(e) =>
                                //     // console.log(e)
                                //     setData("content2", e)
                                // }
                                // onChange={(e) =>
                                //     setData("content", e.target.getContent())
                                // }
                                init={{
                                    automatic_uploads: true,
                                    images_upload_url: route("upload.images"),
                                    images_upload_handler:
                                        tiny_image_upload_handler,
                                    images_upload_credentials: true,
                                    height: 500,
                                    menubar: true,
                                    plugins: [
                                        "advlist autolink lists link image charmap print preview anchor",
                                        "searchreplace visualblocks code fullscreen",
                                        "insertdatetime media table paste code help wordcount",
                                        "print code preview importcss searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons",
                                    ],

                                    content_style:
                                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",

                                    toolbar:
                                        "undo redo | code  bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen preview save print | image media pageembed link anchor codesample | ltr rtl",
                                    fontsize_formats:
                                        "8pt 10pt 12pt 14pt 18pt 24pt 36pt",
                                    importcss_append: true,
                                    template_cdate_format:
                                        "[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]",
                                    template_mdate_format:
                                        "[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]",
                                    toolbar_mode: "sliding",
                                    font_formats:
                                        "Andale Mono=andale mono,times;Poppins; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
                                }}
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
                                {" "}
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

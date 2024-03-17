function tiny_image_upload_handler(blobInfo, success, failure, progress) {
    var xhr, formData;

    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open("POST", route("upload.images"));
    xhr.upload.onprogress = function (e) {
        progress((e.loaded / e.total) * 100);
    };

    xhr.onload = function (e) {
        var json;

        if (xhr.status === 403) {
            failure("HTTP Error: " + xhr.status, { remove: true });
            return;
        }

        if (xhr.status < 200 || xhr.status >= 300) {
            failure("HTTP Error: " + xhr.status);
            return;
        }
        console.log(xhr);
        console.log(e);
        console.log(blobInfo.blob());

        json = JSON.parse(xhr.responseText);

        if (!json || typeof json.location != "string") {
            failure("Invalid JSON: " + xhr.responseText);
            return;
        }

        success(json.location);
    };

    xhr.onerror = function () {
        failure(
            "Image upload failed due to a XHR Transport error. Code: " +
                xhr.status
        );
    };

    formData = new FormData();
    formData.append("file", blobInfo.blob(), blobInfo.filename());

    xhr.send(formData);
}

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

const _tinymceInitPaper = () => {
    let config = {
        ...tinymceInit,
    };
    delete config.images_upload_credentials;
    delete config.images_upload_handler;
    config.toolbar =
        "undo redo | bold italic underline strikethrough | pagebreak | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | charmap emoticons | fullscreen preview | link anchor codesample | ltr rtl";
    config.plugins = [
        "advlist autolink lists link charmap preview anchor",
        "searchreplace visualblocks fullscreen",
        "insertdatetime table paste help wordcount",
        "preview importcss searchreplace autolink autosave save directionality visualblocks visualchars fullscreen link table charmap hr toc insertdatetime advlist lists wordcount textpattern noneditable help charmap emoticons",
    ];
    return config;
};

const tinymceInitPaper = _tinymceInitPaper();
export { tinymceInit, tiny_image_upload_handler, tinymceInitPaper };

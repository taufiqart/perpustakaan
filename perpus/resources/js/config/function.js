import { useForm } from "@inertiajs/react";

function convertToSlug(str) {
    //replace all special characters | symbols with a space
    str = str
        .replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, " ")
        .toLowerCase();

    // trim spaces at start and end of string
    str = str.replace(/^\s+|\s+$/gm, "");

    // replace space with dash/hyphen
    str = str.replace(/\s+/g, "-");
    return str;
}

// async function tiny_image_upload_handler(blobInfo, success, failure, progress) {
//     const formData = new FormData();
//     formData.append("file", blobInfo.blob(), blobInfo.filename());

//     const res = await fetch(route("upload.images"), {
//         method: "POST",
//         body: formData,
//     }).then((res) => res.text());
//     console.log(res);
// }

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

export { convertToSlug, tiny_image_upload_handler };


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



const createOption = (value, label) => {
    return { value, label };
};

export { createOption,convertToSlug };

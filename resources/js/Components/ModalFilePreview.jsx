import React from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import Modal from "@/Components/Modal";
import BookLoader from "@/Components/BookLoader";
import PrimaryButton from "@/Components/PrimaryButton";

export const LoadingRenderer = ({ document, fileName }) => {
    // console.clear();
    return <BookLoader loader={true} className="!z-[0]" />;
};

export const NoRenderer = ({ document, fileName }) => {
    const fileText = fileName || document?.fileType || "";
    if (fileText) {
        return (
            <div className="h-full w-full mt-auto flex flex-col items-center justify-center">
                Can't view ({fileText})
                <a href={document.uri} download={fileName} className="mt-1">
                    <PrimaryButton>download file</PrimaryButton>
                </a>
            </div>
        );
    }

    return (
        <div className="h-full w-full mt-auto flex flex-col items-center justify-center">
            Can't view
            <a href={document.uri} download className="mt-1">
                <PrimaryButton>download file</PrimaryButton>
            </a>
        </div>
    );
};
export const config = {
    loadingRenderer: {
        overrideComponent: LoadingRenderer,
        showLoadingTimeout: false,
    },
    header: {
        // disableHeader: true,
    },
    noRenderer: {
        overrideComponent: NoRenderer,
    },
    pdfVerticalScrollByDefault: true,
};
export const css = `
    #react-doc-viewer{
        position: relative;
        z-index: 99999;
        display:flex;
        flex-direction: column-reverse;
    }
    #modal .react-pdf__Document{
        overflow: auto;
    }
`;

const _config = config;
const _css = css;

export const FilePreview = ({ data = [], config = _config, css = _css }) => {
    const docViewerRef = React.useRef(null);
    const _DocViewerRenderers = DocViewerRenderers.filter(
        (r) => !r.name.includes("HTML")
    );

    React.useEffect(() => {
        let interval = setInterval(() => {
            // console.clear();
            clearInterval(interval);
        }, 200);
    });
    return (
        <>
            <style>{css}</style>
            <DocViewer
                // onDocumentChange={(e) => console.clear()}
                ref={docViewerRef}
                documents={data}
                config={config}
                pluginRenderers={_DocViewerRenderers}
                className="bg-white"
                theme={{
                    disableThemeScrollbar: false,
                }}
            />
        </>
    );
};

export const ModalFilePreview = ({
    data,
    show = false,
    onClose = () => {},
}) => {
    return (
        <>
            <Modal
                show={show}
                maxWidth="2xl"
                className="bg-red-300"
                onClose={onClose}
            >
                <div className="h-[calc(100vh-100px)] overflow-auto">
                    <FilePreview data={data} />
                </div>
            </Modal>
        </>
    );
};

// export const ModalPreviewPDF = () => {
//     return (
//         <ReactPDF
//             url="/uploads/posts/1710588095-7550-802223.pdf"
//             showProgressBar
//             showToolbox
//         />
//     );
// };

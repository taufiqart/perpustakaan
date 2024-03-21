import React from "react";

import BookViewCustom from "@/Components/BookViewCustom";
import FilePreviewShow from "@/Components/admin/FilePreviewShow";

import { useResizeObserver } from "@wojtekmaj/react-hooks";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "/public/assets/pdfjs-dist/build/pdf.worker.js",
    import.meta.url
).toString();

const options = {
    cMapUrl: "/public/assets/pdfjs-dist/web/cmaps/",
    standardFontDataUrl: "/public/assets/pdfjs-dist/web/standard_fonts/",
};

const resizeObserverOptions = {};

const maxWidth = 1080;
export default function ContentView({ content, fileList = [] }) {
    const [file, setFile] = React.useState(fileList[0]?.url);
    const [numPages, setNumPages] = React.useState();
    const [containerRef, setContainerRef] = React.useState(null);
    const [containerWidth, setContainerWidth] = React.useState();

    const onResize = React.useCallback((entries) => {
        const [entry] = entries;

        if (entry) {
            setContainerWidth(entry.contentRect.width);
        }
    }, []);

    useResizeObserver(containerRef, resizeObserverOptions, onResize);

    function onFileChange(event) {
        const { files } = event.target;

        if (files && files[0]) {
            setFile(files[0] || null);
        }
    }

    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages);
    }
    return (
        <>
            <div className="min-h-screen flex flex-col justify-center items-center px-3 md:px-14 transition-all duration-500">
                <div className="-mt-14 md:mt-52 w-full lg:max-w-[50vw] transition-all duration-500">
                    <BookViewCustom paper={content} height="100%" width="100%">
                        {content?.content
                            ?.replace(/<[^>]*>?|&nbsp;/gm, "")
                            .trim().length > 0 ? (
                            <div
                                className="w-full h-full"
                                dangerouslySetInnerHTML={{
                                    __html: content?.content,
                                }}
                            ></div>
                        ) : (
                            fileList &&
                            fileList.length > 0 && (
                                <div
                                    className="-mx-5 sm:-mx-10 md:-mx-[25px]"
                                    ref={setContainerRef}
                                >
                                    <Document
                                        file={file}
                                        onLoadSuccess={onDocumentLoadSuccess}
                                        options={options}
                                        className={
                                            "w-full h-full flex flex-col items-center"
                                        }
                                    >
                                        {Array.from(
                                            new Array(numPages),
                                            (el, index) => (
                                                <Page
                                                    className={
                                                        "!w-full !object-contain !min-w-full !max-w-full"
                                                    }
                                                    key={`page_${index + 1}`}
                                                    pageNumber={index + 1}
                                                    width={
                                                        containerWidth
                                                            ? Math.min(
                                                                  containerWidth,
                                                                  maxWidth
                                                              )
                                                            : maxWidth
                                                    }
                                                />
                                            )
                                        )}
                                    </Document>
                                </div>
                            )
                        )}
                    </BookViewCustom>
                </div>
                {fileList && fileList.length > 0 && (
                    <div className="mt-14 w-full lg:max-w-[50vw] transition-all duration-500">
                        <div className="[box-shadow:36px_36px_50px_15px_#eed7d1d1] p-10 rounded-[25px] dark:[box-shadow:11px_14px_50px_0px_#ffffff8a]">
                            <FilePreviewShow dataFiles={fileList} />
                        </div>
                    </div>
                )}

                <div className="h-96"></div>
            </div>
        </>
    );
}

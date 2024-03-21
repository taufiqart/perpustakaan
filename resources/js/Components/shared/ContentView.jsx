import React from "react";

import BookViewCustom from "@/Components/BookViewCustom";
import FilePreviewShow from "@/Components/admin/FilePreviewShow";
import { FilePreview, config } from "@/Components/ModalFilePreview";

export default function ContentView({ content, fileList = [], ...props }) {
    const _css = `
      
        #custom-file-viewer #pdf-page-info,
        #custom-file-viewer #header-bar,
        #custom-file-viewer #pdf-download,
        #custom-file-viewer #pdf-toggle-pagination{
            display:none;
        }

        #custom-file-viewer #react-doc-viewer #image-renderer,
        #custom-file-viewer #react-doc-viewer:has(#image-renderer) {
            background-image: none;
            background-color: transparent;
        }

    `;

    const [file, setFile] = React.useState(fileList[0]);

    React.useEffect(() => {
        file.uri = file.url;
    }, []);

    console.log(file);
    return (
        <>
            <div className="flex flex-col justify-center items-center px-3 md:px-14 transition-all duration-500">
                <div className="w-full lg:max-w-[50vw] transition-all duration-500">
                    <BookViewCustom
                        paper={content}
                        height={props.height ?? "100%"}
                        width="100%"
                        innerScroll={props.innerScroll}
                    >
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
                                    className="-mx-5 sm:-mx-10 md:-mx-[25px] mt-5"
                                    id="custom-file-viewer"
                                >
                                    <FilePreview
                                        data={[file]}
                                        config={config}
                                        css={_css}
                                    />
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
            </div>
        </>
    );
}

import React from "react";
import "@/lib/pdfjs-dist/web/pdf_viewer";
import "./index.scss";

const PDFJS = {...window.pdfjsViewer,...window.pdfjsLib,...window.PDFJS};

PDFJS.workerSrc = new URL(
    "/public/assets/pdfjs-dist/build/pdf.worker.js",
    import.meta.url
).toString();

const SCROLL_TOP_PADDING = 200;
console.log(PDFJS);

export class PdfPages extends React.Component {
    componentDidMount() {
        // document.getElementById("pdf-pages").style +=
        //     "overflow: auto; position: absolute; width: 100%; height: 100%;";
        this.PDFJS = PDFJS
        this.setupViewer();
        this.stream(this.props);

        this.docViewer = document.getElementById("viewer-container");

        this.docViewer.addEventListener("scroll", this.onScrollCheck);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.scale && newProps.scale !== this.props.scale) {
            this.zoom(newProps.scale);
        }
    }

    componentWillUnmount() {
        this.docViewer.removeEventListener("scroll", this.onScrollCheck);
    }

    setupViewer = () => {
        PDFJS.disableTextLayer = false;
        PDFJS.externalLinkTarget = PDFJS.LinkTarget.PARENT;
        this._eventBus = new PDFJS.EventBus();
        // PDF Link Service
        console.log(this._eventBus);
        this._pdfLinkService = new PDFJS.PDFLinkService({
            eventBus: this._eventBus,
        });

        // PDF Viewer
        this._pdfViewer = new PDFJS.PDFViewer({
            container: document.getElementById("pdf-pages"),
            removePageBorders: true,
            linkService: this._pdfLinkService,
            eventBus: this._eventBus,
        });
        this._pdfLinkService.setViewer(this._pdfViewer);

        // PDF Find Controller
        this._pdfFindController = new PDFJS.PDFFindController({
            pdfViewer: this._pdfViewer,
        });
        this._pdfViewer.setFindController(this._pdfFindController);

        // Set external Refs
        this.props.setPdfViewer(this._pdfViewer);
        this.props.setFindController(this._pdfFindController);
    };

    onScrollCheck = () => {
        if (this._pdfViewer) {
            const { scrollTop, scrollHeight } = this.docViewer;
            const currentPage = Math.ceil(
                (scrollTop + SCROLL_TOP_PADDING) /
                    (scrollHeight / this._pdf.numPages)
            );
            this.props.setCurrentPage(currentPage);
        }
    };

    stream = (props) => {
        const url = props.url;
        if (url) {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.responseType = "arraybuffer";

            xhr.onprogress = (e) => {
                if (e.lengthComputable) {
                    const percent = Math.round((e.loaded / e.total) * 100);
                    this.props.updateProgressBar(percent);
                }
            };

            xhr.onload = () => {
                if (xhr.status === 200) {
                    const _ab = xhr.response;
                    this.pdf = _ab;
                    this.loadPDF(_ab);
                } else {
                    console.error("Error while requesting", url);
                }
            };

            xhr.onerror = () => {
                console.error("Error while requesting", url);
            };

            xhr.send();
        }
    };

    loadPDF = () => {
        const src = this.pdf;
        if (!src) {
            return;
        }

        PDFJS.getDocument(src).then(
            (pdf) => {
                this._pdf = pdf;
                this.props.setPdf(this._pdf);
                this.update();
            },
            (err) => {
                const error = err.name || err.toString();
                this.pdfLoadError.emit(error);
            }
        );
    };

    zoom = (scale) => {
        this._zoom = scale;
        this._pdfViewer.currentScale = this._zoom;
    };

    update() {
        if (this._pdfViewer) {
            this._pdfViewer.setDocument(this._pdf);
        }
        if (this._pdfLinkService) {
            this._pdfLinkService.setDocument(this._pdf, null);
        }
        this.render();
    }

    render() {
        return <div />;
    }
}

export default PdfPages;

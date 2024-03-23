import React from "react";
import Select from "react-select";

import { TextInput, InputLabel } from "@/Components/default";

export default function ImageFromText({ text, setData }) {
    let canvas = React.useRef(null);

    const [bgColor, setBgColor] = React.useState(
        `#${Math.floor(Math.random() * 16777215).toString(16)}`
    );
    const [textColor, setTextColor] = React.useState("#ffffff");
    const [textSize, setTextSize] = React.useState(80);
    const [font, setFont] = React.useState("Monospace");
    const [margin, setMargin] = React.useState({
        top: 50,
        right: 50,
        bottom: 50,
        left: 120,
    });

    let fontLists =
        "Poppins|Abel|Abril+Fatface|Acme|Alegreya|Alegreya+Sans|Anton|Archivo|Archivo+Black|Archivo+Narrow|Arimo|Arvo|Asap|Asap+Condensed|Bitter|Bowlby+One+SC|Bree+Serif|Cabin|Cairo|Catamaran|Crete+Round|Crimson+Text|Cuprum|Dancing+Script|Dosis|Droid+Sans|Droid+Serif|EB+Garamond|Exo|Exo+2|Faustina|Fira+Sans|Fjalla+One|Francois+One|Gloria+Hallelujah|Hind|Inconsolata|Indie+Flower|Josefin+Sans|Julee|Karla|Lato|Libre+Baskerville|Libre+Franklin|Lobster|Lora|Mada|Manuale|Maven+Pro|Merriweather|Merriweather+Sans|Montserrat|Montserrat+Subrayada|Mukta+Vaani|Muli|Noto+Sans|Noto+Serif|Nunito|Open+Sans|Open+Sans+Condensed:300|Oswald|Oxygen|PT+Sans|PT+Sans+Caption|PT+Sans+Narrow|PT+Serif|Pacifico|Passion+One|Pathway+Gothic+One|Play|Playfair+Display|Poppins|Questrial|Quicksand|Raleway|Roboto|Roboto+Condensed|Roboto+Mono|Roboto+Slab|Ropa+Sans|Rubik|Saira|Saira+Condensed|Saira+Extra+Condensed|Saira+Semi+Condensed|Sedgwick+Ave|Sedgwick+Ave+Display|Shadows+Into+Light|Signika|Slabo+27px|Source+Code+Pro|Source+Sans+Pro|Spectral|Titillium+Web|Ubuntu|Ubuntu+Condensed|Varela+Round|Vollkorn|Work+Sans|Yanone+Kaffeesatz|Zilla+Slab|Zilla+Slab+Highlight";
    fontLists = fontLists.replaceAll("+", " ");
    fontLists = fontLists.split("|");
    fontLists = fontLists.map((value) => {
        return { label: value, value };
    });
    let ctx;
    function getLines(ctx, text, maxWidth) {
        var words = text.split(" ");
        var lines = [];
        var currentLine = words[0];

        for (var i = 1; i < words.length; i++) {
            var word = words[i];
            var width = ctx.measureText(currentLine + " " + word).width;
            if (width < maxWidth) {
                currentLine += " " + word;
            } else {
                lines.push(currentLine);
                currentLine = word;
            }
        }
        lines.push(currentLine);
        return lines;
    }

    const draw = (ctx) => {
        ctx.width = canvas.width;
        ctx.height = canvas.height;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.font = `${textSize}px ${font}`;
        ctx.font = `${textSize}px ${font}`;
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = textColor;
        let lines = getLines(
            ctx,
            text,
            canvas.width - (margin.left + margin.right)
        );
        let metrics = ctx.measureText(text);
        let fontHeight =
            metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
        let actualHeight =
            metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
        let line = fontHeight * (lines.length - 1);
        let center =
            canvas.height / 2 -
            line / 2 +
            (fontHeight / 6) * lines.length +
            (margin.top - margin.bottom);
        // ctx.beginPath();
        // ctx.moveTo(0, canvas.height / 2);
        // ctx.lineTo(canvas.width, canvas.height / 2);
        // ctx.moveTo(0, margin.top);
        // ctx.lineTo(canvas.width, margin.top);
        // ctx.moveTo(canvas.width - margin.right, 0);
        // ctx.lineTo(canvas.width - margin.right, canvas.height);
        // ctx.moveTo(0, canvas.height - margin.bottom);
        // ctx.lineTo(canvas.width, canvas.height - margin.bottom);
        // ctx.moveTo(margin.left, 0);
        // ctx.lineTo(margin.left, canvas.height);
        // ctx.stroke();

        lines.map((text, i) => {
            ctx.fillText(text, margin.left, center + actualHeight * i);
        });
    };

    React.useEffect(() => {
        canvas.width = canvas.clientWidth * 4;
        canvas.height = canvas.clientHeight * 4;
        ctx = canvas.getContext("2d");
    }, []);

    React.useEffect(() => {
        ctx = canvas.getContext("2d");
        if (ctx != undefined) {
            draw(ctx);
            canvas.toBlob(
                (image) =>
                    setData(
                        new File(
                            [image],
                            `cover-${text
                                .replace(/[^A-Z0-9]+/gi, "-")
                                .toLowerCase()}.png`,
                            {
                                type: "image/png",
                            }
                        )
                    ),
                "image/png"
            );
        }
    }, [bgColor, textColor, textSize, font, margin, text]);
    return (
        <div className="flex gap-4 flex-wrap">
            <div className="overflow-hidden rounded-lg w-[180px] h-[255px]">
                <canvas
                    ref={(e) => (canvas = e)}
                    className="w-[180px] h-[255px]"
                />
            </div>
            <div className="flex flex-col gap-y-4">
                <div className="flex gap-x-4 justify-start items-center">
                    <TextInput
                        id="bgColorInput"
                        value={bgColor}
                        onChange={(e) => setBgColor(e.target.value)}
                        type="color"
                    />
                    <InputLabel
                        htmlFor="bgColorInput"
                        value="Background Color"
                    />
                </div>
                <div className="flex gap-x-4 justify-start items-center">
                    <TextInput
                        id="textColorInput"
                        value={textColor}
                        onChange={(e) => setTextColor(e.target.value)}
                        type="color"
                    />
                    <InputLabel htmlFor="textColorInput" value="Text Color" />
                </div>
                <div className="flex gap-x-4 justify-start items-center">
                    <TextInput
                        id="textSizeInput"
                        value={textSize}
                        onChange={(e) => setTextSize(e.target.value)}
                        type="number"
                        className="w-12 h-7 p-1"
                    />
                    <InputLabel htmlFor="textSizeInput" value="Text Size" />
                </div>
                <div className="flex gap-x-2 justify-center items-start flex-col">
                    <InputLabel htmlFor="" value="Margin" />

                    <div className="ml-3 flex gap-x-2 justify-start items-center">
                        <div className="flex gap-x-2 flex-col">
                            <InputLabel
                                htmlFor="m_top"
                                className="text-md"
                                value="Top"
                            />
                            <TextInput
                                id="m_top"
                                value={margin.top}
                                onChange={(e) =>
                                    setMargin({
                                        ...margin,
                                        ["top"]: parseInt(e.target.value),
                                    })
                                }
                                type="number"
                                className="w-12 h-7 p-1"
                            />
                        </div>
                        <div className="flex gap-x-2 flex-col">
                            <InputLabel
                                htmlFor="m_right"
                                className="text-md"
                                value="Right"
                            />
                            <TextInput
                                id="m_right"
                                value={margin.right}
                                onChange={(e) =>
                                    setMargin({
                                        ...margin,
                                        ["right"]: parseInt(e.target.value),
                                    })
                                }
                                type="number"
                                className="w-12 h-7 p-1"
                            />
                        </div>
                        <div className="flex gap-x-2 flex-col">
                            <InputLabel
                                htmlFor="m_bottom"
                                className="text-md"
                                value="Bottom"
                            />
                            <TextInput
                                id="m_bottom"
                                value={margin.bottom}
                                onChange={(e) =>
                                    setMargin({
                                        ...margin,
                                        ["bottom"]: parseInt(e.target.value),
                                    })
                                }
                                type="number"
                                className="w-12 h-7 p-1"
                            />
                        </div>
                        <div className="flex gap-x-2 flex-col">
                            <InputLabel
                                htmlFor="m_left"
                                className="text-md"
                                value="Left"
                            />
                            <TextInput
                                id="m_left"
                                value={margin.left}
                                onChange={(e) =>
                                    setMargin({
                                        ...margin,
                                        ["left"]: parseInt(e.target.value),
                                    })
                                }
                                type="number"
                                className="w-12 h-7 p-1"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex gap-x-4 justify-start items-center">
                    <Select
                        id="fontFamilyInput"
                        className="basic-single z-3"
                        defaultValue={font}
                        isSearchable={true}
                        options={fontLists}
                        onChange={(value) => {
                            setFont(value.value);
                        }}
                    />

                    <InputLabel htmlFor="fontFamilyInput" value="Font Family" />
                </div>
            </div>
        </div>
    );
}

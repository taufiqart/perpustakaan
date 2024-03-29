import React from "react";

import ChevronLeft from "feather-icons-react/build/IconComponents/ChevronLeft";
import ChevronRight from "feather-icons-react/build/IconComponents/ChevronRight";

import Card from "./Card";

export default function CardSlider({ data }) {
    const contentRef = React.useRef();
    const scrollLeft = () => {
        contentRef.current.scrollLeft -=
            contentRef.current.firstChild.getBoundingClientRect().width;
    };
    const scrollRight = () => {
        contentRef.current.scrollLeft +=
            contentRef.current.firstChild.getBoundingClientRect().width;
    };

    return (
        <div className="relative justify-center group">
            <div className="absolute right-0 top-5 md:group-hover:block md:hidden">
                <button
                    onClick={scrollLeft}
                    className="p-2 m-2 rounded-full bg-white shadow-md"
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={scrollRight}
                    className="p-2 m-2 rounded-full bg-white shadow-md lg:z-3"
                >
                    <ChevronRight />
                </button>
            </div>
            <div
                id="content"
                ref={contentRef}
                className="flex overflow-auto scroll-smooth scrollbar-hide snap-mandatory snap-x py-2"
            >
                {data.map((article, idx) => {
                    return (
                        <div key={idx}>
                            <Card article={article} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
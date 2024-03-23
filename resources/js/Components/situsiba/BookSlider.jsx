import React from "react";

import {
    ChevronLeft,
    ChevronRight,
} from "feather-icons-react/build/IconComponents";

import { BookCard } from "@/Components/shared";

function BookSlider({ data }) {
    const [showBtn, setShowBtn] = React.useState(false);
    const contentRef = React.useRef();

    const scrollLeft = () => {
        contentRef.current.scrollLeft -=
            contentRef.current.getBoundingClientRect().width -
            contentRef.current.firstChild.getBoundingClientRect().width;
    };

    const scrollRight = () => {
        contentRef.current.scrollLeft +=
            contentRef.current.getBoundingClientRect().width -
            contentRef.current.firstChild.getBoundingClientRect().width;
    };

    window.addEventListener("resize", () => {
        if (contentRef?.current) {
            setShowBtn(
                contentRef.current.getBoundingClientRect().width <
                    contentRef.current.scrollWidth
            );
        }
    });

    React.useEffect(() => {
        if (contentRef?.current) {
            setShowBtn(
                contentRef.current.getBoundingClientRect().width <
                    contentRef.current.scrollWidth
            );
        }
    }, []);

    return (
        <div className="flex flex-col justify-center group 2xl:mx-auto">
            {showBtn && (
                <div className="ml-auto right-0 top-5 2xl:group-hover:block">
                    <button
                        onClick={scrollLeft}
                        className="p-2 m-2 rounded-full bg-white shadow-md"
                    >
                        <ChevronLeft />
                    </button>
                    <button
                        onClick={scrollRight}
                        className="p-2 m-2 rounded-full bg-white shadow-md"
                    >
                        <ChevronRight />
                    </button>
                </div>
            )}
            <div className="flex justify-center scrollbar-hide">
                <div
                    id="content"
                    ref={contentRef}
                    className="transition-all duration-1000 scrollbar-hide overflow-auto flex flex-row items-center gap-4 snap-mandatory snap-x scroll-smooth"
                >
                    {data &&
                        data.length > 0 &&
                        data.map((paper) => {
                            return (
                                <div key={paper.slug} className="snap-center">
                                    <BookCard
                                        key={paper.slug}
                                        image={paper.poster}
                                        title={paper.title}
                                        url={route(
                                            "situsiba.paper.show",
                                            paper.slug
                                        )}
                                    />
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default BookSlider;

import {
    ChevronLeft,
    ChevronRight,
} from "feather-icons-react/build/IconComponents";
import BookCard from "../BookCard";
import { useRef } from "react";

function BookSlider({ data }) {
    const contentRef = useRef();
    const scrollLeft = () => {
        contentRef.current.scrollLeft -=
            contentRef.current.firstChild.getBoundingClientRect().width;
    };
    const scrollRight = () => {
        contentRef.current.scrollLeft +=
            contentRef.current.firstChild.getBoundingClientRect().width;
    };

    return (
        <div className="relative justify-center group 2xl:mx-auto">
            <div className="absolute right-0 top-5 2xl:group-hover:block 2xl:hidden">
                <button
                    onClick={scrollLeft}
                    className="2xl:hidden p-2 m-2 rounded-full bg-white shadow-md"
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={scrollRight}
                    className="2xl:hidden p-2 m-2 rounded-full bg-white shadow-md lg:z-3"
                >
                    <ChevronRight />
                </button>
            </div>
            <div
                id="content"
                ref={contentRef}
                className="transition-all flex overflow-auto scroll-smooth scrollbar-hide snap-mandatory snap-x py-2 duration-1000"
            >
                <div className="flex flex-row items-center justify-center gap-16 my-20">
                    {(data &&
                        data.length > 0) ?
                        data.map((paper) => {
                            return (
                                <BookCard
                                    key={paper.slug}
                                    image={paper.poster}
                                    title={paper.title}
                                    url={route(
                                        "situsiba.paper.show",
                                        paper.slug
                                    )}
                                />
                            );
                        }): <h1>Belum ada Karya</h1>  }
                </div>
            </div>
        </div>
    );
}

export default BookSlider;


import { ChevronLeft, ChevronRight } from "feather-icons-react/build/IconComponents";
import BookCard from "../BookCard";

function BookSlider({data}) {
    // const contentRef = useRef();
    const scrollLeft = () => {
        contentRef.current.scrollLeft -=
            contentRef.current.firstChild.getBoundingClientRect().width;
    };
    const scrollRight = () => {
        contentRef.current.scrollLeft +=
            contentRef.current.firstChild.getBoundingClientRect().width;
    };

    return (
        <div className="relative lg:hi justify-center group">
            <div className="absolute right-0 top-5 md:group-hover:block md:hidden">
                <button
                    onClick={scrollLeft}
                    className="lg:hidden p-2 m-2 rounded-full bg-white shadow-md"
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={scrollRight}
                    className="lg:hidden p-2 m-2 rounded-full bg-white shadow-md lg:z-3"
                >
                    <ChevronRight />
                </button>
            </div>
            <div
                id="content"
                // ref={contentRef}
                className="flex overflow-auto scroll-smooth scrollbar-hide snap-mandatory snap-x py-2"
            >
                {/* {data.map((title,idx) => {
                    return (
                         <div key={idx}> */}
                        <div className="flex flex-row items-center justify-center gap-16 my-20">
                        {data.map((paper) => {
                        return (
                            <BookCard
                                key={paper.slug}
                                image={paper.poster}
                                title={paper.title}
                                url={route("situsiba.paper.show", paper.slug)}
                            />
                        );
                    })}
                        </div>
                    {/* );
                })} */}
            </div>
        </div>
    );
}

export default BookSlider;

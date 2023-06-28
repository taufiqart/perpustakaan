import Card from "./Card";
import ChevronLeft from "feather-icons-react/build/IconComponents/ChevronLeft";
import ChevronRight from "feather-icons-react/build/IconComponents/ChevronRight";

function CardSlider() {
    const scrollLeft = () => {
        document.getElementById("content").scrollLeft -= 270;
    };
    const scrollRight = () => {
        document.getElementById("content").scrollLeft += 270;
    };

    return (
        <div className="relative">
            <div className="absolute right-0 top-5 ">
                <button
                    onClick={scrollLeft}
                    className="p-2 m-2 rounded-full bg-white"
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={scrollRight}
                    className="p-2 m-2 rounded-full bg-white"
                >
                    <ChevronRight />
                </button>
            </div>
            <div
                id="content"
                className="flex items-center justify-start overflow-auto scroll-smooth scrollbar-hide"
            >
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
            </div>
        </div>
    );
}

export default CardSlider;

import { useState } from "react";
import BookBottom from "@/Image/BookBottom";

export default function BookView({ paper }) {
    const [scrollTransform, setScrollTransform] = useState("");
    return (
        <div
            onScroll={(e) => {
                let transform =
                    e.target.scrollTop/5 <= 90 ? e.target.scrollTop/5 : 90;
                e.target.scrollTop == 0
                    ? setScrollTransform(``)
                    : setScrollTransform(
                          `rotateX(${transform}deg) translateZ(3px) scale(0.75)`
                      );
            }}
            style={{
                "--scroll-transform": scrollTransform,
                "--mobile-width": "1080px",
                "--mobile-height": "670px",
                "--mobile-radius": "25px",
                "--separator-height": "500px",
                "--bg": "#fdf3f2",
                "--mobile-bg": "#fdeae6",
                "--intro-bg": "#eed7d1",
                "--font-color": "#807b7b",
                "--transition": "transform 0.7s ease-in-out",
            }}
            className=" w-[var(--mobile-width)]
            h-[var(--mobile-height)]
            rounded-[var(--mobile-radius)] text-[var(--font-color)] 
            bg-[var(--mobile-bg)] overflow-x-hidden
            [box-shadow:36px_36px_50px_15px_#eed7d1d1]
            [perspective:500px] flex flex-col items-center justify-start 
            scrollbar scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-thumb-[#a87d72] scrollbar-track-[#fad3ca]"
        >
            <div
                className="flex flex-col relative
                    rounded-t-[var(--mobile-radius)] items-center justify-center
                    bg-[var(--intro-bg)] [transform-style:preserve-3d]
                    w-[200%] [transform-origin:50%_100%] [transition:var(--transition)] z-1 [transform:var(--scroll-transform)] gap-y-15"
            >
                <div className="mt-24 flex flex-col items-center justify-center relative [transform-style:preserve-3d]">
                    <img
                        className="w-64
                    [transform:translateZ(40px)] mb-[-2px] rounded-lg"
                        src={paper.poster}
                        alt={paper.title}
                        onError={(e) =>
                            (e.target.src = "/assets/img/book-cover.png")
                        }
                    />
                    <BookBottom
                        className=" w-64
                    [transform:translateY(-15px)_translateX(0px)_translateZ(20px)_rotateX(104deg)]
                    "
                    />
                </div>
            </div>
            <div className="bg-white transition-[var(--transition)] p-[50px] relative z-20 w-full">
                <div className="flex flex-col w-full h-full">
                    <div className="flex items-center">
                        <div className="font-[Quicksand] text-[26px] mb-[10px]">
                            {paper.title}
                        </div>
                    </div>
                    <div className="font-[Open_Sans] italic mb-[20px]">
                        by {paper?.user.user_detail.full_name || "Anonymous"}
                    </div>
                    <div
                        className="w-full h-full"
                        dangerouslySetInnerHTML={{
                            __html: paper?.content,
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}

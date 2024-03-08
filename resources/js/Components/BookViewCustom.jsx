import { useState, useRef, useEffect } from "react";
import BookBottom from "../Image/BookBottom";

export default function BookViewCustom({
    paper,
    width = "1080px",
    height = "670px",
    radius = "25px",
}) {
    const [scrollTransform, setScrollTransform] = useState("");
    const [perspective, setPerspective] = useState(1080 / 2);
    let containerRef = useRef();
    const changeperspective = () => {
        let container = containerRef?.current?.getBoundingClientRect();
        if (container.width >= 1080) {
            setPerspective(500);
        } else if (container.width >= 720) {
            setPerspective(Math.max(container.width, container.width / 2));
        } else {
            setPerspective(Math.max(500, container.width * 10));
        }
    };
    useEffect(() => {
        changeperspective();
    }, []);
    window.addEventListener("size", (e) => {
        changeperspective();
    });

    window.addEventListener("scroll", (e) => {
        let container = containerRef?.current?.getBoundingClientRect();
        let transform =
            container.y * -1 <= 90 ? Math.max(0, container.y * -1) : 90;
        console.log(transform);
        transform == 0
            ? setScrollTransform(``)
            : setScrollTransform(
                  `rotateX(${transform}deg) translateZ(3px) scale(0.75)`
              );
        changeperspective();
    });
    return (
        <div
            ref={containerRef}
            style={{
                "--scroll-transform": scrollTransform,
                "--mobile-width": width,
                "--mobile-height": height,
                "--mobile-radius": radius,
                "--separator-height": "500px",
                "--bg": "#fdf3f2",
                "--mobile-bg": "#fdeae6",
                "--intro-bg": "#eed7d1",
                "--font-color": "#807b7b",
                "--transition": "all 0.7s ease-in-out",
                "--c-perspective": `${perspective}px`,
            }}
            className={`w-[var(--mobile-width)]
            h-[var(--mobile-height)]
            rounded-[var(--mobile-radius)] text-[var(--font-color)] 
            bg-[var(--mobile-bg)] overflow-x-hidden
            [box-shadow:36px_36px_50px_15px_#eed7d1d1]
            [perspective:var(--c-perspective)] flex flex-col items-center justify-start 
            scrollbar scrollbar-track-rounded-full  scrollbar-thumb-rounded-full scrollbar-thumb-[#a87d72] scrollbar-track-[#fad3ca]`}
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
                        className={`w-64
                    ${
                        scrollTransform == 0
                            ? "[transform:translateY(-32px)_translateX(0px)_translateZ(20px)_rotateX(65deg)]"
                            : "[transform:translateY(-15px)_translateX(0px)_translateZ(20px)_rotateX(104deg)]"
                    }`}
                    />
                </div>
            </div>
            <div className="bg-white transition-[var(--transition)] p-5 sm:p-10 md:p-[50px] relative z-20">
                <div className="flex flex-col w-full h-full">
                    <div className="flex items-center">
                        <div className="font-[Quicksand] text-[26px] mb-[10px]">
                            {paper.title}
                        </div>
                    </div>
                    <div className="font-[Open_Sans] italic mb-[20px]">
                        <div className="flex gap-4">
                            <p>
                                by{" "}
                                {paper?.user.user_detail.full_name ||
                                    "Anonymous"}
                            </p>
                            |<p>{paper?.total_view || 0} Reads</p>
                        </div>
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

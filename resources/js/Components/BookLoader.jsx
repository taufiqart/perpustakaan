import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

export default function BookLoader({ loader }) {
    return (
        <div
            className={`${
                loader ? "flex" : "hidden"
            } absolute w-full h-full bg-white/80  justify-center items-center z-[9999]`}
        >
            <Player
                src="/assets/animations/book-loader.json"
                className="w-40 bg-transparent fill-transparent"
                autoplay
                loop
            />
        </div>
    );
}

import Card from "@/Components/landingpage/Card";
import CardSlider from "./SliderCard";

export default function Aktifitas() {
    return (
        <div className="w-full lg:max-w-lg mx-5 my-1 bg-opacity-50 bg-white rounded-lg shadow-md p-5">
            <div className="mx-auto bg-gradient-to-r from-green-400 to-blue-400 py-3 rounded-lg">
                <h1 className="text-white text-center text-lg font-bold">
                    Aktifitas Terbaru
                </h1>
            </div>
            <div className="flex flex-col justify-between mx-5 mt-5 mb-5">
                <div className="items-center max-w-lg">
                    <CardSlider />
                </div>
            </div>
        </div>
    );
}

import CardSlider from "../landingpage/SliderCard";

export default function Terbanyak({data}) {
    return (
        <div className="w-full md:w-2/3 mx-auto lg:w-full  overflow-auto  my-1 bg-opacity-50 bg-white rounded-lg shadow-md p-5">
            <div className="mx-auto bg-gradient-to-r from-green-400 to-blue-400 py-3 rounded-lg">
                <h1 className="text-white text-center text-lg font-bold">
                    Terbanyak Dibaca
                </h1>
            </div>
            <div className="flex flex-col justify-between my-2">
                <div className="items-center ">
                    <CardSlider data={data}/>
                </div>
            </div>
        </div>
    );
}

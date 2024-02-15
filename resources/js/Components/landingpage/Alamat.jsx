export default function Alamat() {
    return (
        <div className="w-full md:w-2/3 mx-auto lg:w-full my-1 bg-opacity-50 bg-white rounded-lg shadow-md p-5">
            <div className="mx-auto bg-gradient-to-r from-green-400 to-blue-400 py-3 rounded-lg">
                <h1 className="text-white text-center text-lg font-bold">
                    Alamat
                </h1>
            </div>
            <div className="flex flex-row justify-items-center mb-auto">
                <div className="items-center ">
                    <div>
                        <svg
                            className="w-16 md:w-24 h-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 64 64"
                            baseProfile="basic"
                        >
                            <ellipse
                                cx="32"
                                cy="61"
                                opacity=".3"
                                rx="19"
                                ry="3"
                            />
                            <ellipse
                                cx="32"
                                cy="47"
                                fill="#98c900"
                                rx="21"
                                ry="7"
                            />
                            <path
                                fill="#fd3c4f"
                                d="M32,5c-8.837,0-16,7.262-16,16.221c0,8.501,7.812,18.19,12.519,23.256c1.886,2.03,5.076,2.03,6.962,0 C40.188,39.411,48,29.722,48,21.221C48,12.262,40.837,5,32,5z M32,27.025c-3.314,0-6-2.694-6-6.017s2.686-6.017,6-6.017 s6,2.694,6,6.017S35.314,27.025,32,27.025z"
                            />
                            <path
                                d="M48,21.221c0-1.717-0.268-3.37-0.755-4.924C44.844,16.664,43,18.719,43,21.221 c0,4.968-4.076,12.204-11.182,19.853c-1.219,1.312-1.585,3.101-1.149,4.711c1.664,0.488,3.534,0.068,4.812-1.308 C40.188,39.411,48,29.722,48,21.221z"
                                opacity=".15"
                            />
                            <path
                                fill="#fff"
                                d="M21,21.221C21,15.034,25.935,10,32,10c2.491,0,4.54-1.827,4.92-4.21 C35.369,5.281,33.718,5,32,5c-8.837,0-16,7.262-16,16.221c0,1.611,0.283,3.265,0.77,4.922C19.163,25.771,21,23.719,21,21.221z"
                                opacity=".3"
                            />
                            <path
                                fill="#fff"
                                d="M20.483,17.774c-0.192,0-0.388-0.037-0.576-0.115c-0.765-0.318-1.127-1.196-0.809-1.961 c0.704-1.691,1.712-3.212,2.996-4.519c1.282-1.307,2.779-2.334,4.45-3.056c0.761-0.33,1.644,0.022,1.972,0.782 c0.329,0.761-0.022,1.644-0.782,1.972c-1.312,0.566-2.49,1.375-3.498,2.403c-1.015,1.033-1.811,2.233-2.367,3.569 C21.629,17.427,21.071,17.774,20.483,17.774z"
                            />
                        </svg>
                    </div>
                </div>
                <div className="items-center">
                    <p className="text-black font-bold text-center mt-5 text-sm">
                        {" "}
                        Jalan Veteran Panggungrejo, Bugul Lor, Panggungrejo,
                        Kota Pasuruan, Jawa Timur 67122
                    </p>
                </div>
            </div>
        </div>
    );
}

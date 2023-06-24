import Nav from '@/Components/Nav';
import Tanggal from '@/Components/landingpage/Date';
import Card from '@/Components/landingpage/card';
import Slider from '@/Components/landingpage/slider';
import { Link, Head } from '@inertiajs/react';
import Typical from "react-typical";

const slides = [
    "/WhatsApp Image 2023-06-07 at 13.32.39 (1).jpeg",
    "/WhatsApp Image 2023-06-07 at 13.32.39.jpeg",
    "/WhatsApp Image 2023-06-07 at 13.32.41.jpeg",
    "/WhatsApp Image 2023-06-07 at 13.32.42.jpeg",
];

export default function gatau(props) {
    return (
        <>
            <Head title="Selamat datang" />
            <Nav />
            <div className="flex max-h-[50%] overflow-hidden">
                {/* <img src="coba.svg" alt="" className="object-cover" /> */}
                <svg
                    className="object-cover"
                    width="100%"
                    height="100%"
                    viewBox="0 0 1440 767"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M709.044 767C420.129 767 185.016 741.903 0 700.13V0H1440V700.13C1248.03 743.707 1004.84 767 709.044 767Z"
                        fill="url(#paint0_linear_271_422)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_271_422"
                            x1="1440"
                            y1="330.784"
                            x2="-0.405161"
                            y2="313.726"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#0891B2" />
                            <stop offset="1" stop-color="#4ade80" />
                            <stop offset="1" stop-color="#60a5fa" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            {/* isi bang start */}
            <section className="pt-36">
                <div className="w-[90%] mx-auto">
                    <div className="flex flex-col md:flex-col lg:flex-row">
                        {/* kiri start */}
                        <div className=" w-full ">
                            <div className="backdrop-blur-sm bg-white h-auto w-full rounded-lg shadow-md">
                                <div className="h-96"></div>
                            </div>
                        </div>
                        {/* kiri end */}

                        {/* kanan start */}
                        <div className="flex flex-col md:basis-7/12 lg:basis-4/12 w-full backdrop-blur-sm">
                            {/* Tanggal guys start*/}
                            <div className="max-w-lg mx-5 my-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg shadow-md p-5">
                                <Tanggal />
                            </div>
                            {/* Tanggal guys end*/}

                            {/* waktu operasional start */}
                            <div className="max-w-lg mx-5 my-1 bg-opacity-50 bg-white rounded-lg shadow-md p-5">
                                <div className="mx-auto bg-gradient-to-r from-green-400 to-blue-400 py-3 rounded-lg">
                                    <h1 className="text-white text-center text-lg font-bold">
                                        Waktu Operasional
                                    </h1>
                                </div>
                                <div className="flex flex-row justify-center mx-auto mt-5 mb-5">
                                    <div className="items-center ">
                                        <div className="h-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="65"
                                                height="73"
                                                viewBox="0 0 65 73"
                                                fill="none"
                                            >
                                                <path
                                                    d="M4.98237 52.3794L0.713802 57.0712C0.0455948 57.7403 0.0455948 58.9475 0.713802 59.7516C1.01826 60.0686 1.41623 60.2788 1.84884 60.351C2.28145 60.4233 2.72572 60.3537 3.11594 60.1528L8.18522 57.0712L4.98237 52.3794Z"
                                                    fill="#22272E"
                                                />
                                                <path
                                                    d="M43.9466 63.7704L45.1467 70.0686C45.2811 71.0077 44.7473 72.0799 43.8217 72.3498C43.3782 72.4926 42.8974 72.4614 42.4759 72.2625C42.0544 72.0635 41.7237 71.7117 41.5501 71.2777L38.8811 65.9167L43.9466 63.7704Z"
                                                    fill="#22272E"
                                                />
                                                <path
                                                    d="M29.6682 69.2645C45.7335 69.2645 58.7569 56.1852 58.7569 40.0511C58.7569 23.9171 45.7335 10.8378 29.6682 10.8378C13.6029 10.8378 0.579407 23.9171 0.579407 40.0511C0.579407 56.1852 13.6029 69.2645 29.6682 69.2645Z"
                                                    fill="#6DAFA7"
                                                />
                                                <path
                                                    d="M42.8573 53.3455C50.1521 46.0195 50.1521 34.1416 42.8573 26.8156C35.5625 19.4895 23.7353 19.4895 16.4405 26.8156C9.14566 34.1416 9.14566 46.0195 16.4405 53.3455C23.7353 60.6715 35.5625 60.6715 42.8573 53.3455Z"
                                                    fill="#FFE779"
                                                />
                                                <path
                                                    d="M34.8737 46.7523L29.6682 40.0511L32.4716 30.6714"
                                                    stroke="#63737A"
                                                    stroke-width="4"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M11.1212 11.7865C10.9199 11.8552 10.7067 11.8817 10.4949 11.8643C10.283 11.847 10.077 11.7862 9.88943 11.6857C9.70189 11.5852 9.53688 11.4472 9.40459 11.2801C9.2723 11.113 9.17555 10.9204 9.12032 10.7143C8.82251 8.78917 9.19255 6.81976 10.1685 5.13604C11.1444 3.45232 12.6668 2.15659 14.4807 1.46597C16.2946 0.775349 18.2898 0.731797 20.1319 1.34261C21.974 1.95343 23.551 3.18149 24.5989 4.82104C25.1327 5.62518 24.7314 6.56239 23.7982 6.96541L11.1212 11.7865Z"
                                                    fill="#6DAFA7"
                                                />
                                                <path
                                                    d="M60.3584 26.2496C60.493 26.417 60.6609 26.5543 60.8515 26.6527C61.042 26.7511 61.2509 26.8084 61.4648 26.8209C61.6787 26.8335 61.8929 26.8009 62.0935 26.7255C62.2941 26.65 62.4769 26.5332 62.6299 26.3827C65.299 23.4341 65.5659 19.0123 63.0293 15.6627C60.4928 12.313 56.228 11.3739 52.7526 13.1172C51.9519 13.5183 51.685 14.5905 52.2188 15.2597L60.3584 26.2496Z"
                                                    fill="#6DAFA7"
                                                />
                                                <path
                                                    d="M42.879 8.69346L35.2732 6.54909C34.0806 6.14797 33.2723 4.94271 33.6718 3.61198C34.0731 2.40482 35.2732 1.60067 36.6077 2.0037L44.2135 4.14807C45.4136 4.54919 46.2144 5.75635 45.8149 7.09469C45.4136 8.29234 44.0791 9.09648 42.879 8.69346Z"
                                                    fill="#6DAFA7"
                                                />
                                                <path
                                                    d="M36.6667 5.3901L34.5817 12.5974L40.0914 14.205L42.1764 6.99766L36.6667 5.3901Z"
                                                    fill="#6DAFA7"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="w-[10%]"></div>
                                    <div className="items-center">
                                        <h1 className="text-black font-bold text-center text-lg">
                                            <Typical
                                                steps={[
                                                    "Senin - Kamis",
                                                    6000,
                                                    "Jum'at",
                                                    7000,
                                                ]}
                                                loop={Infinity}
                                                wrapper="p"
                                            />
                                            <br />
                                            <Typical
                                                steps={[
                                                    "07:30 - 15:30",
                                                    7000,
                                                    "07:30 - 14:00",
                                                    7000,
                                                ]}
                                                loop={Infinity}
                                                wrapper="p"
                                            />
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            {/* waktu operasional start */}

                            {/* Aktifitas start */}
                            <div className="max-w-lg mx-5 my-1 bg-opacity-50 bg-white rounded-lg shadow-md p-5">
                                <div className="mx-auto bg-gradient-to-r from-green-400 to-blue-400 py-3 rounded-lg">
                                    <h1 className="text-white text-center text-lg font-bold">
                                        Aktifitas Terbaru
                                    </h1>
                                </div>
                                <div className="flex flex-col justify-between mx-5 mt-5 mb-5">
                                    <div className="items-center ">
                                        <Card/>
                                    </div>
                                </div>
                            </div>
                            {/* Aktifitas start */}

                            {/* Alamat start */}
                            <div className="max-w-lg mx-5 my-1 bg-opacity-50 bg-white rounded-lg shadow-md p-5">
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
                                            Jalan Veteran Panggungrejo, Bugul
                                            Lor, Panggungrejo, Kota Pasuruan,
                                            Jawa Timur 67122
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Alamat start */}

                            {/* Kontak start */}
                            <div className="max-w-lg mx-5 my-1 bg-opacity-50 bg-white rounded-lg shadow-md p-5">
                                <div className="mx-auto bg-gradient-to-r from-green-400 to-blue-400 py-3 rounded-lg">
                                    <h1 className="text-white text-center text-lg font-bold">
                                        Kontak
                                    </h1>
                                </div>

                                <div className="flex flex-row justify-items-center mx-5 mt-5 mb-5">
                                    <div className="items-center ">
                                        <div>
                                            <svg
                                                className="w-10 h-auto"
                                                viewBox="0 0 32 32"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M3.77082 1.02039C4.12076 0.670949 4.54096 0.399875 5.00358 0.225131C5.4662 0.0503863 5.96066 -0.0240391 6.45422 0.00678674C6.94777 0.0376126 7.42914 0.172986 7.86642 0.403935C8.3037 0.634885 8.68692 0.956137 8.99066 1.3464L12.5805 5.95861C13.2385 6.80465 13.4705 7.9067 13.2105 8.94675L12.1166 13.327C12.06 13.5538 12.0631 13.7915 12.1254 14.0168C12.1878 14.2421 12.3074 14.4475 12.4726 14.613L17.3864 19.5272C17.5521 19.6927 17.7578 19.8125 17.9835 19.8749C18.2092 19.9373 18.4472 19.9402 18.6744 19.8833L23.0522 18.7892C23.5654 18.6609 24.1011 18.6509 24.6187 18.7601C25.1364 18.8692 25.6224 19.0946 26.0401 19.4192L30.652 23.0074C32.3099 24.2975 32.4619 26.7476 30.978 28.2296L28.91 30.2977C27.4301 31.7778 25.2182 32.4278 23.1562 31.7018C17.8787 29.8448 13.0871 26.8232 9.13666 22.8614C5.17536 18.9112 2.15409 14.1199 0.296933 8.84275C-0.427045 6.78265 0.222935 4.56855 1.70289 3.08848L3.77082 1.02039Z"
                                                    fill="url(#paint0_linear_71_193)"
                                                />
                                                <defs>
                                                    <linearGradient
                                                        id="paint0_linear_71_193"
                                                        x1="16"
                                                        y1="0"
                                                        x2="16"
                                                        y2="32"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stop-color="#0891B2" />
                                                        <stop
                                                            offset="1"
                                                            stop-color="#059669"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="items-center mx-5">
                                        <p className="text-black text-center font-bold text-base md:text-lg">
                                            (0343) 421380
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-row justify-items-center mx-5 mt-5 mb-5">
                                    <div className="items-center ">
                                        <div>
                                            <svg
                                                className="w-10 h-auto"
                                                viewBox="0 0 32 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M0.1 3.11C0.301636 2.22649 0.797311 1.43763 1.50584 0.872617C2.21438 0.307607 3.09377 -6.09889e-05 4 9.06828e-09H28C28.9062 -6.09889e-05 29.7856 0.307607 30.4942 0.872617C31.2027 1.43763 31.6984 2.22649 31.9 3.11L16 12.828L0.1 3.11ZM0 5.394V19.602L11.606 12.486L0 5.394ZM13.522 13.66L0.382 21.714C0.706653 22.3986 1.21905 22.9769 1.85956 23.3816C2.50007 23.7863 3.24235 24.0007 4 24H28C28.7575 24.0002 29.4995 23.7852 30.1397 23.3802C30.7798 22.9751 31.2918 22.3966 31.616 21.712L18.476 13.658L16 15.172L13.522 13.66ZM20.394 12.488L32 19.602V5.394L20.394 12.486V12.488Z"
                                                    fill="url(#paint0_linear_71_200)"
                                                />
                                                <defs>
                                                    <linearGradient
                                                        id="paint0_linear_71_200"
                                                        x1="16"
                                                        y1="0"
                                                        x2="16"
                                                        y2="24"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stop-color="#059669" />
                                                        <stop
                                                            offset="1"
                                                            stop-color="#0891B2"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="items-center mx-5">
                                        <p className="text-black text-center font-bold text-base md:text-lg">
                                            smk1pasuruan@yahoo.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Kontak start */}

                            {/* Developer start */}
                            <div className="max-w-lg mx-5 my-1 bg-opacity-50 bg-white rounded-lg shadow-md p-5">
                                <div className="mx-auto bg-gradient-to-r from-green-400 to-blue-400 py-3 rounded-lg">
                                    <h1 className="text-white text-center text-lg font-bold">
                                        Developer
                                    </h1>
                                </div>
                                <div className="flex flex-col justify-between mx-5 mt-5 mb-5">
                                    <div className="items-center ">
                                        <h1 className="text-black font-bold text-center text-lg">
                                            RPLPOJOK
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            {/* Developer start */}
                        </div>
                        {/* kanan end */}
                    </div>
                </div>
                <div className="flex max-h-[50%] bg-bottom">
                    <svg
                        className="w-full h-full fill-gradient-to-r"
                        viewBox="0 0 1440 191"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M418 126.513C343.734 98.4664 106 56.1799 0 191H1440C1440 191 1387.88 46.4432 1316.94 56.1799C1279.57 61.3094 1271.73 95.7941 1236.55 109.321C1126.84 151.509 1072.28 -14.7933 955.7 1.07092C868.73 12.9055 835.54 152.298 759.201 109.321C720.448 87.5042 700.5 56.1799 652 56.1799C557.223 56.1799 492.266 154.559 418 126.513Z"
                            fill="url(#paint0_linear_318_424)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_318_424"
                                x1="0%"
                                y1="100%"
                                x2="100%"
                                y2="0%"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#4ade80" />
                                <stop offset="1" stop-color="#60a5fa" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </section>
            {/* isi bang end */}

            {/* footer start */}
            <section className="flex flex-col bg-gradient-to-r from-green-400 to-blue-400  ">
                <div className="flex items-center justify-center pt-5 pb-5">
                    <h1 className="text-white text-xs md:text-sm lg:text-base font-bold">
                        Copyright 2023 | Created with{" "}
                        <span className="text-rose-600">❤</span> by
                        tuttifruitti.org & RPLPOJOK SKENSA
                    </h1>
                </div>
            </section>
            {/* footer end */}
        </>
    );
}

import Nav from '@/Components/Nav';
import Aktifitas from '@/Components/landingpage/Aktifitas';
import Alamat from '@/Components/landingpage/Alamat';
import Tanggal from '@/Components/landingpage/Date';
import Footer from '@/Components/landingpage/Footer';
import Isi from '@/Components/landingpage/Isi';
import Kontak from '@/Components/landingpage/Kontakt';
import Operasional from '@/Components/landingpage/Operasional';
import Card from '@/Components/landingpage/card';
import { Link, Head } from '@inertiajs/react';
import Carousel from '@/Components/landingpage/Carousel';


const slides = [
    "/1.jpeg",
    "/2.jpeg",
    "/3.jpeg",
    "/4.jpeg",
];

export default function gatau(props) {
    return (
        <>
            <Head title="Selamat datang" />

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
                <div className="absolute flex flex-col w-full">
                    <div className="h-[50%] w-[65%]">
                        <Carousel autoSlide={true} autoSlideInterval={5000}>
                            {
                                slides.map((s) => (
                                    <img src={s}/>
                                ))
                            }
                        </Carousel>
                    </div>
                    <Nav />
                </div>
            </div>

            {/* content bang start */}
            <section className="pt-36">
                <div className="w-[90%] mx-auto">
                    <div className="flex flex-col md:flex-col lg:flex-row">
                        {/* isi start */}
                        <Isi/>
                        {/* isi end */}

                        {/* kanan start */}
                        <div className="flex flex-col md:basis-7/12 lg:basis-4/12 w-full backdrop-blur-sm">
                            {/* Tanggal guys start*/}
                                <Tanggal />
                            {/* Tanggal guys end*/}

                            {/* waktu operasional start */}
                                <Operasional/>
                            {/* waktu operasional start */}

                            {/* Aktifitas start */}
                                <Aktifitas/>
                            {/* Aktifitas start */}

                            {/* Alamat start */}
                                <Alamat/>
                            {/* Alamat start */}

                            {/* Kontak start */}
                                <Kontak/>
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
            {/* content bang end */}

            {/* footer start */}
            <Footer/>
            {/* footer end */}
        </>
    );
}

import Navbar from "@/Components/landingpage/Navbar";
import Footer from "@/Components/landingpage/Footer";
import Carousel from "@/Components/landingpage/Carousel";
import Modal from "@/Components/Modal";
import { Link, Head } from "@inertiajs/react";
import Cookies from "universal-cookie";
import { usePage } from "@inertiajs/react";
import React from "react";

export default function ClientLayout({ children, situsiba = false }) {
    const [show, setShow] = React.useState(false);
    const props = usePage().props;
    const cookies = new Cookies();
    if (situsiba) {
        React.useEffect(() => {
            let show_popup = cookies.get("show_popup");

            if (show_popup == null || show_popup == undefined) {
                let expires = new Date();
                expires.setTime(expires.getTime() + 5000 * 1000);
                cookies.set("show_popup", true, {
                    path: "/",
                    expires,
                    secure: true,
                });
                setShow(true);
            }
        }, []);
    }
    React.useEffect(() => {
        document
            .querySelector("#app")
            .classList.remove("transition-all", "duration-300");
    }, []);

    return (
        <>
            {situsiba && (
                <Modal show={show} onClose={() => setShow(!show)}>
                    <div className="max-h-full w-full overflow-y-auto sm:rounded-2xl bg-white">
                        <div className="w-full">
                            <div className="m-8 my-20 max-w-[400px] md:max-w-[450px] mx-auto text-center">
                                <div className="mb-8 p-4">
                                    <h1 className="mb-4 text-xl md:text-3xl font-extrabold">
                                        SELAMAT DATANG DI
                                        <br /> SITU SIBA
                                    </h1>
                                    <p className="text-base mx-2 md:mx-0 md:text-xl text-gray-600">
                                        Silahkan Tulis dan Baca kami menyediakan
                                        platform bagi siswa siswi SMKN 1
                                        Pasuruan
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <button
                                        onClick={() => setShow(!show)}
                                        className="p-3 w-2/3 md:w-full  relative inline-flex items-center justify-center overflow-hidden font-medium transition duration-300 ease-out rounded-full hover:shadow-xl group hover:ring-1 hover:ring-green-500"
                                    >
                                        <span className="absolute inset-0 w-full h-full group-hover:bg-gradient-to-br from-blue-400 to-green-400"></span>
                                        <span className="absolute bottom-0 right-0 hidden md:block w-64 h-64 mb-32 mr-4 transition duration-700 origin-bottom-left transform rotate-90 translate-x-24 group-hover:bg-green-500 rounded-full opacity-80 group-hover:rotate-45 ease"></span>
                                        <span className="text-base md:text-lg relative text-black group-hover:text-white ">
                                            LANJUT
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}

            <div className="flex max-h-[50%] overflow-hidden ">
                {/* <img src="coba.svg" alt="" className="object-cover" /> */}
                <svg
                    className="object-cover opacity-0 md:opacity-100"
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
                            <stop stopColor="#0891B2" />
                            <stop offset="1" stopColor="#4ade80" />
                            <stop offset="1" stopColor="#60a5fa" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="absolute overflow-hidden flex flex-col w-full ">
                    <div className="w-full lg:w-[67%]">
                        <Carousel autoSlide={true} autoSlideInterval={5000}>
                            {props.sliders &&
                                props.sliders.map((s, idx) => (
                                    <img
                                        src={s.image}
                                        className="object-cover h-[50vh] md:h-auto"
                                        key={idx}
                                    />
                                ))}
                        </Carousel>
                    </div>
                    {/* kotak - kotak ga jelas bangsat */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute right-0 -z-50 lg:z-10 lg:h-full opacity-0 md:opacity-100"
                        viewBox="0 0 829 605"
                        fill="none"
                    >
                        <path
                            d="M298.5 604.5L865.5 604.5C865.5 604.5 865.5 252.528 865.5 27.0004C865.5 16.4562 865.5 10.5445 865.5 0.000244141C744.242 0.000324644 274.5 0.000792468 274.5 0.000792468L0 142.286L298.5 604.5Z"
                            fill="#059669"
                        />
                        <path
                            d="M352 604.5L865.5 604.5C865.5 604.5 865.5 252.528 865.5 27.0004C865.5 16.4562 865.5 10.5445 865.5 0.000244141C777.632 0.00031794 360 0.000773395 360 0.000773395L61.207 157.783L352 604.5Z"
                            fill="#065F46"
                        />
                        <path
                            d="M409.5 604.5L865.5 604.5C865.5 604.5 865.5 553 865.5 520C865.5 520 865.5 203.073 865.5 0.000244141C810.046 0.000310677 443 0.000754321 443 0.000754321L119.259 172.954L409.5 604.5Z"
                            fill="url(#paint0_linear_392_441)"
                            fillOpacity="0.541176"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_392_441"
                                x1="843.465"
                                y1="615.294"
                                x2="489.616"
                                y2="-30.1011"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#002118" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className="absolute right-10 xl:right-4 -z-10 lg:z-10 lg:top-10 xl:top-20 text-white items-center justify-center">
                        <div className="flex flex-col items-center justify-center">
                            <div className="">
                                <img
                                    src="/assets/icons/laptop-book.svg"
                                    alt=""
                                    className="w-48 xl:w-56 2xl:w-72"
                                />
                            </div>
                            <div className="">
                                <h1 className="text-3xl xl:text-4xl text-center">
                                    Perpustakaan
                                </h1>
                            </div>
                            <div className="">
                                <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-center">
                                    SMKN 1 PASURUAN
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar
                data={props.category}
                className="-mt-[calc(50%+3.5rem)] md:mt-7 md:mb-0 lg:-mt-[15.6%]"
            />
            {/* content bang start */}
            <section className="mt-[50vh] md:mt-0 pt-20 md:pt-36 min-h-96">
                {children}
            </section>
            {/* footer start */}
            <Footer />
            {/* footer end */}
        </>
    );
}

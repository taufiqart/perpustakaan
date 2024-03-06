import { useEffect, useState } from "react";
import SituSiba from "@/Components/situsiba/Isi";
import SectionBook from "@/Components/situsiba/SectionBook";

import { usePage } from "@inertiajs/react";
import SitusibaLayout from "@/Layouts/SitusibaLayout";

export default function Index() {
    const props = usePage().props;
    console.log(props);
    return (
        <SitusibaLayout>
            {/* content bang start */}
            <section className="mt-[50vh] md:mt-0 pt-20 md:pt-36">
                <div className="w-[90%] xl:w-[85%] mx-auto mb-20">
                    {/* isi start */}
                    <SituSiba
                        papers={props.papers}
                        className="lg:col-span-2 xl:col-span-3"
                    />
                    {/* isi end */}
                </div>

                {/* kanan start */}
                <div className="w-[90%] xl:w-[85%] mx-auto my-10 backdrop-blur-sm mb-20">
                    {/* Terbaru start */}
                    <SectionBook
                        data={props.paper_latests}
                        title={"Terbaru"}
                        link={{ label: "Lainnya", href: "/situsiba/latest" }}
                    />
                    {/* Terbaru end */}

                    {/* Terbanyak start */}
                    <SectionBook
                        data={props.paper_latests}
                        title={"Terbanyak dibaca"}
                        link={{ label: "Lainnya", href: "/situsiba/mostreads" }}
                    />
                    {/* Terbanyak end */}
                </div>
                {/* kanan end */}
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
                                <stop stopColor="#4ade80" />
                                <stop offset="1" stopColor="#60a5fa" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </section>
        </SitusibaLayout>
    );
}

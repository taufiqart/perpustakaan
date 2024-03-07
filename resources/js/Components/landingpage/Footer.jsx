export default function Footer() {
    return (
        <div className="mt-auto">
            <div className="bg-bottom relative">
                <svg
                    className="w-full h-full fill-gradient-to-r relative -bottom-[2px]"
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
                <section className="flex flex-col bg-gradient-to-r from-green-400 to-blue-400  ">
                    <div className="flex items-center justify-center pt-5 pb-5">
                        <h1 className="text-white text-xs md:text-sm lg:text-base font-bold text-center">
                            Copyright 2023 | Created with{" "}
                            <span className="text-rose-600">❤</span> by
                            tuttifruitti.org & RPLPOJOK SKENSA
                        </h1>
                    </div>
                </section>
            </div>
        </div>
    );
}

import Typical from "react-typical";

export default function Operasional() {
    return (
        <div className="w-full lg:max-w-lg mx-5 my-1 bg-opacity-50 bg-white rounded-lg shadow-md p-5">
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
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
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
                            steps={["Senin - Kamis", 6000, "Jum'at", 7000]}
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
    );
}

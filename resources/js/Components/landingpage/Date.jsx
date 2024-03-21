import React from "react";

export default function Tanggal() {
    const [date, setDate] = React.useState(new Date());
    React.useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);
    const transform = (tes) => {
        return tes < 10 ? "0" + tes : tes;
    };
    const hari = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jum'at",
        "Sabtu",
    ];
    const bulan = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ];

    return (
        <div className="w-full md:w-2/3 mx-auto lg:w-full my-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg shadow-md p-5">
            <h1 className="text-xl font-bold text-white text-center">
                {hari[date.getDay()] +
                    ", " +
                    transform(date.getDate()) +
                    " " +
                    bulan[date.getMonth()] +
                    " " +
                    date.getFullYear() +
                    "   " +
                    transform(date.getHours()) +
                    ":" +
                    transform(date.getMinutes())}
            </h1>
        </div>
    );
}
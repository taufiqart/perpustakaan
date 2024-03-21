import React from "react";
import { Head } from "@inertiajs/react";

import Aktifitas from "@/Components/landingpage/Aktifitas";
import Alamat from "@/Components/landingpage/Alamat";
import Tanggal from "@/Components/landingpage/Date";
import Isi from "@/Components/landingpage/Isi";
import Kontak from "@/Components/landingpage/Kontak";
import Operasional from "@/Components/landingpage/Operasional";

import ClientLayout from "@/Layouts/ClientLayout";

export default function Index(props) {
    const [show, setShow] = React.useState(true);
    return (
        <ClientLayout>
            <Head
                title={
                    props?.article?.title == "/"
                        ? "Selamat Datang"
                        : props?.article?.title
                }
            />

            <div className="w-[90%] xl:w-[85%] mx-auto ">
                <div className="grid grid-flow-row  gap-10 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
                    {/* isi start */}
                    <Isi
                        article={props.article}
                        className="lg:col-span-2 xl:col-span-3"
                    />
                    {/* isi end */}

                    {/* kanan start */}
                    <div className="flex flex-col col-span-1 backdrop-blur-sm mb-20">
                        {/* Tanggal guys start*/}
                        <Tanggal />
                        {/* Tanggal guys end*/}

                        {/* waktu operasional start */}
                        <Operasional />
                        {/* waktu operasional start */}

                        {/* Aktifitas start */}
                        {props.other && props.other.length > 0 && (
                            <Aktifitas data={props.other} />
                        )}
                        {/* Aktifitas start */}

                        {/* Alamat start */}
                        <Alamat />
                        {/* Alamat start */}

                        {/* Kontak start */}
                        <Kontak />
                        {/* Kontak start */}

                        {/* Developer start */}
                        <div className="w-full md:w-2/3 mx-auto lg:w-full  my-1 bg-opacity-50 bg-white rounded-lg shadow-md p-5">
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
        </ClientLayout>
    );
}

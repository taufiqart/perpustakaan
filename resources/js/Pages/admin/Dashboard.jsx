import React, { useEffect } from "react";
import AdminLayout from "@/Layouts/admin/AdminLayout";
import CardStats from "@/Components/admin/Card/CardStats";
import CardLineChart from "@/Components/admin/Card/CardLineChart";
import CardBarChart from "@/Components/admin/Card/CardBarChart";
import TableTrafik from "@/Components/admin/Table/TableTrafik";
import TableVisitor from "@/Components/admin/Table/TableVisitor";
import { Head } from "@inertiajs/react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import CardBox from "../../Components/CardBox";
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "January",
        },
    },
};

export default function Dashboard(props) {
    let _unique = props.reads.map((e) => {
        console.log(e);
        return {
            major_class_short: e.major_class_short,
            major_class: e.major_class,
        };
    });
    _unique = [
        ..._unique,
        ...props.total_post.map((e) => {
            return {
                major_class_short: e.major_class_short,
                major_class: e.major_class,
            };
        }),
    ];

    const labels = Array.from(new Set(_unique.map(JSON.stringify))).map(
        JSON.parse
    );

    const data = {
        labels: [...labels.map((e) => e.major_class_short)],
        datasets: [
            {
                label: "Karya",
                data: labels.map(
                    (e) =>
                        props.total_post.find(
                            (o) => e.major_class_short == o.major_class_short
                        )?.total || 0
                ),
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
                label: "Pembaca",
                data: labels.map(
                    (e) =>
                        props.reads.find(
                            (o) => e.major_class_short === o.major_class_short
                        )?.count_read ?? 0
                ),
                backgroundColor: "rgba(10, 99, 132, 0.5)",
            },
        ],
    };

    return (
        <>
            <Head title="Dashboard" />
            <AdminLayout>
                <div className="flex flex-wrap">
                    <div className="mx-auto w-full">
                        <CardStats data={props} />
                        <div className="h-8"></div>
                        <div className="mx-4 grid grid-cols-1 2xl:grid-cols-2 gap-5 h-full">
                            <CardBox className="rounded-md overflow-hidden p-5 !bg-white ">
                                <Bar
                                    options={options}
                                    data={data}
                                    className="h-full w-full md:min-h-96"
                                />
                            </CardBox>
                            {/* <CardBox className="rounded-md overflow-hidden p-5 w-full !bg-white">
                                <Bar options={options} data={data} />
                            </CardBox> */}
                        </div>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}

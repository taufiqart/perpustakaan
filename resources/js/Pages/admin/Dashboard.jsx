import React from "react";
import AdminLayout from "@/Layouts/admin/AdminLayout";
import CardStats from "@/Components/admin/Card/CardStats";
import CardLineChart from "@/Components/admin/Card/CardLineChart";
import CardBarChart from "@/Components/admin/Card/CardBarChart";
import TableTrafik from "@/Components/admin/Table/TableTrafik";
import TableVisitor from "@/Components/admin/Table/TableVisitor";
import { Head } from "@inertiajs/react";
export default function Dashboard(props) {
    console.log(props)
    return (
        <>
        <Head title="Dashboard"/>
        <AdminLayout>
            <div className="flex flex-wrap">
                <div className="mx-auto w-full">
                    <CardStats data={props}/>
                </div>
            </div>
            {/* <div className="flex flex-wrap mt-10">
                <CardLineChart />
                <CardBarChart />
            </div>
            <div className="flex flex-wrap mt-4">
                <TableVisitor />
                <TableTrafik />
            </div> */}
        </AdminLayout>
        </>
    );
}

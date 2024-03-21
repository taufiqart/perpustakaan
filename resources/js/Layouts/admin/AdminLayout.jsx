import React from "react";
import AdminFooter from "@/Components/admin/AdminFooter";
import AdminNavbar from "@/Components/admin/AdminNavbar";
import AdminSidebar from "@/Components/admin/AdminSidebar";

export default function AdminLayout({ children }) {
    return (
        <>
            <AdminSidebar />
            <div className="relative md:ml-64 bg-slate-50 min-h-screen h-full flex flex-col">
                <AdminNavbar />
                <div className="relative bg-pink-600 md:pt-32 pb-60 pt-12 "></div>
                <div className="px-4 md:px-10 mx-auto w-full -mt-60 relative ">
                    {children}
                </div>
                <div className="mt-auto mb-0 ">
                    <AdminFooter />
                </div>
            </div>
        </>
    );
}

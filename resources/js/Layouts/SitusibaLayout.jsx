import { useEffect } from "react";
import AdminSidebar from "../Components/admin/AdminSidebar";
import FilterSide from "../Components/situsiba/FilterSide";

export default function SitusibaLayout({ children }) {
    useEffect(() => {
        document
            .querySelector("body")
            .classList.add(
                "dark:bg-gray-800",
                "transition-all",
                "duration-300"
            );
    }, []);
    return (
        <>
            {/* <div className="sidebar"></div> */}
            <FilterSide />
            <div>{children}</div>
        </>
    );
}

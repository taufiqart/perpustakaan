import AdminSidebar from "../Components/admin/AdminSidebar";
import FilterSide from "../Components/situsiba/FilterSide";

export default function SitusibaLayout({ children }) {
    return (
        <>
            {/* <div className="sidebar"></div> */}
            <FilterSide/>
            <div>{children}</div>
        </>
    );
}

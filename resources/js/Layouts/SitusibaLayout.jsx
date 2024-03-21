import FilterSide from "@/Components/situsiba/FilterSide";

const dark = window.localStorage.getItem("dark");
if (dark != null && dark != undefined && dark == "true") {
    document.querySelector("html").classList.add("dark");
}

export default function SitusibaLayout({ children }) {
    return (
        <div className="dark:bg-gray-800 transition-all duration-300">
            <FilterSide />
            <div>{children}</div>
        </div>
    );
}

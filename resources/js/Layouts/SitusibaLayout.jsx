export default function SitusibaLayout({ children }) {
    return (
        <>
            <div className="sidebar"></div>
            <div>{children}</div>
        </>
    );
}

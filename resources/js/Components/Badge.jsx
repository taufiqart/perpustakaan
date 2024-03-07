export default function Badge({ type = "success", text = "", children }) {
    let bg = "bg-green-300";

    switch (type) {
        case "danger":
            bg = "bg-red-400 text-slate-200";
            break;
        case "primary":
            bg = "bg-blue-400 text-slate-200";
            break;
        default:
            bg = "bg-green-400 text-white";
            break;
    }

    return (
        <>
            <div className={`rounded-lg px-4 py-1 w-fit ${bg}  `}>
                {children ?? text}
            </div>
        </>
    );
}

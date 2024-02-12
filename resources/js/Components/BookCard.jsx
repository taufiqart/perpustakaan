import { Link } from "@inertiajs/react";

export default function BookCard({ image, url, title, textClassName = "text-md" }) {
    return (
        <Link href={url} className="flex justify-center items-center flex-col m-2">
                <div className="book" style={{ "--bg-image": `url(${image})` }}>
                    <div></div>
                </div>
                <h1 className={`pt-3 ${textClassName} break-words w-48 text-center`}>{title}</h1>
        </Link>
    );
}

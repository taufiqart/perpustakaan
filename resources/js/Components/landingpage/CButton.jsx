import { Link } from "@inertiajs/react";

export default function CButton({ data }) {
    if (data.slug.startsWith("http")) {
        return (
            <a
                href={data.slug}
                target="_blank"
                className="hover:bg-white relative w-full md:w-auto inline-flex items-center justify-center px-4 py-1 overflow-hidden font-medium transition duration-300 ease-out md:rounded-full hover:md:shadow-xl group hover:md:ring-1 hover:md:ring-green-500"
            >
                <span className="absolute inset-0 w-full h-full group-hover:md:bg-gradient-to-br from-blue-400 to-green-400"></span>
                <span className="absolute bottom-0 right-0 hidden md:block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-90 translate-x-24 group-hover:md:bg-green-500 rounded-full opacity-80 group-hover:md:rotate-45 ease"></span>
                <span className="relative text-white group-hover:text-black md:text-black group-hover:md:text-white ">
                    {data.title}
                </span>
            </a>
        );
    } else {
        return (
            <Link
                href={`${data.slug!='/'?'/'+data.slug:'/'}`}
                className="hover:bg-white relative w-full md:w-auto inline-flex items-center justify-center px-4 py-1 overflow-hidden font-medium transition duration-300 ease-out md:rounded-full hover:md:shadow-xl group hover:md:ring-1 hover:md:ring-green-500"
            >
                <span className="absolute inset-0 w-full h-full group-hover:md:bg-gradient-to-br from-blue-400 to-green-400"></span>
                <span className="absolute bottom-0 right-0 hidden md:block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-90 translate-x-24 group-hover:md:bg-green-500 rounded-full opacity-80 group-hover:md:rotate-45 ease"></span>
                <span className="relative text-white group-hover:text-black md:text-black group-hover:md:text-white ">
                    {data.title}
                </span>
            </Link>
        );
    }
}

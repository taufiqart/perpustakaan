export default function Card({ article }) {
    console.log(article);
    return (
        <div className="flex-1 w-64 sm:w-72 mx-2 ">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-2xl">
                <div className="p-5">
                    <a href={article.category.slug}>
                        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                            {article.title}
                        </h5>
                    </a>
                    <div
                        className="font-normal text-gray-700 mb-3 h-72 overflow-hidden"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    ></div>
                    <a
                        href={article.category.slug}
                        className="text-white bg-gradient-to-r from-green-400 to-blue-400 hover:bg-green-400 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                    >
                        Selengkapnya
                        <svg
                            className="-mr-1 ml-2 h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

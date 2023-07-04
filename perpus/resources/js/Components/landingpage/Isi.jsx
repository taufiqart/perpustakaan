export default function Isi({ article }) {
    return (
        <div className=" w-full mx-10">
            <div className="backdrop-blur-sm bg-white bg-opacity-60 h-auto w-full rounded-lg shadow-md">
                <div
                    className="min-h-[24rem] p-4"
                    dangerouslySetInnerHTML={{
                        __html: article
                            ? article.content
                            : "<p class='text-center'>content belum tersedia</p>",
                    }}
                ></div>
            </div>
        </div>
    );
}

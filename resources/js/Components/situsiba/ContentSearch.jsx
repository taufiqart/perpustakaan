import { BookCard } from "@/Components/shared";

export default function ContentSearch({ papers, className = "" }) {
    return (
        <>
            {/* BookCard start */}
            <div className={`flex flex-wrap items-center justify-center gap-2 py-4 md:gap-5 md:py-10 ${className}`}>
                {papers && papers.length > 0 ? (
                    papers.map((paper) => {
                        return (
                            <BookCard
                                key={paper.slug}
                                image={paper.poster}
                                title={paper.title}
                                url={route("situsiba.paper.show", paper.slug)}
                                className="scale-[0.8] md:scale-100 relative -m-5 md:m-1"
                            />
                        );
                    })
                ) : (
                    <h1>Tidak ditemukan</h1>
                )}
            </div>
            {/* BookCard end */}
        </>
    );
}

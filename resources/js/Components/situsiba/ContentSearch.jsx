import { BookCard } from "@/Components/shared";

export default function ContentSearch({ papers, className = "" }) {
    return (
        <>
            {/* BookCard start */}
            <div className="flex flex-wrap justify-center md:gap-5 py-10">
                {papers && papers.length > 0 ? (
                    papers.map((paper) => {
                        return (
                            <BookCard
                                key={paper.slug}
                                image={paper.poster}
                                title={paper.title}
                                url={route("situsiba.paper.show", paper.slug)}
                            />
                        );
                    })
                ) : (
                    <h1>Belum ada Karya</h1>
                )}
            </div>
            {/* BookCard end */}
        </>
    );
}

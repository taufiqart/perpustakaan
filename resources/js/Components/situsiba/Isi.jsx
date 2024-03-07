import BookCard from "../BookCard";
import Search from "./Search";

export default function SituSiba({ papers, className = "" }) {
    return (
        <>
            {/* Judul SITU SIBA start */}
            <div className="flex flex-col items-center pt-10">
                <div className="text-center">
                    <h1 className="font-extrabold text-xl md:text-3xl">
                        SITU SIBA
                    </h1>
                </div>
                <div className="text-center">
                    <h1 className="text-lg md:text-2xl">
                        Silahkan Tulis Silahkan Baca
                    </h1>
                </div>
                <div className="text-center text-base w-full px-5 md:w-2/3 pt-5">
                    <p>
                        Selamat datang di SITU SIBA disini kami menyediakan
                        platform bagi siswa siswi SMKN 1 Pasuruan agar Karya
                        Tulis seperti Cerpen, Novel ataupun karya ilmiah agar
                        dapat dipublish dan dibaca oleh umum.
                    </p>
                </div>
            </div>
            {/* Judul SITU SIBA end */}
            {/* Input Search start */}
            <Search />
            {/* Input Search end */}
            {/* BookCard start */}
            <div className="flex flex-wrap justify-center gap-10 py-20">
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

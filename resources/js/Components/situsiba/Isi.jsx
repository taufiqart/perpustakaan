import BookCard from "../BookCard";
import Search from "./Search";

export default function SituSiba({ article,className='' }) {
    return (
        <div className={`w-full ${className}`}>
            <div className="backdrop-blur-sm bg-white bg-opacity-60 h-auto w-full rounded-lg shadow-md">
                {/* Judul SITU SIBA start */}
                <div className="flex flex-col items-center pt-10">
                    <div className="text-center">
                        <h1 className="font-extrabold text-xl md:text-3xl">SITU SIBA</h1>
                    </div>
                    <div className="text-center">
                        <h1 className="text-lg md:text-2xl">Silahkan Tulis Silahkan Baca</h1>
                    </div>
                    <div className="text-center text-base w-full px-5 md:w-2/3 pt-5">
                        <p>Selamat datang di SITU SIBA disini kami menyediakan platform bagi siswa siswi SMKN 1 Pasuruan agar Karya Tulis seperti Cerpen, Novel ataupun karya ilmiah agar dapat dipublish dan dibaca oleh umum.</p>
                    </div>
                </div>
                {/* Judul SITU SIBA end */}

                {/* Input Search start */}
                <Search/>
                {/* Input Search end */}

                {/* BookCard start */}
                <div className="flex flex-wrap justify-center gap-10 mt-20">
                    <BookCard/>
                    <BookCard/>
                    <BookCard/>
                    <BookCard/>
                    <BookCard/>
                    <BookCard/>
                    <BookCard/>
                    <BookCard/>
                    <BookCard/>
                </div>
                {/* BookCard end */}


                <div
                    className="min-h-[24rem] p-4"
                    dangerouslySetInnerHTML={{
                        __html: article
                            ? article.content
                            : "<p class='text-center'>Tidak ada artikel yang tersedia</p>",
                    }}
                ></div>
            </div>
        </div>
    );
}

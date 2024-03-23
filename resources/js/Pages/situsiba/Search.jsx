import { Head, usePage } from "@inertiajs/react";
import SearchLayout from "@/Layouts/SearchLayout";

import CardBox from "@/Components/default/CardBox";
import ContentSearch from "@/Components/situsiba/ContentSearch";

export default function Search() {
    const props = usePage().props;
    return (
        <SearchLayout situsiba={true}>
            <Head title={"Situ Siba"} />

            <CardBox className="mb-10">
                {/* isi start */}
                <ContentSearch
                    papers={props.papers}
                    className="w-full lg:col-span-2 xl:col-span-3"
                />

                {/* isi end */}
            </CardBox>
            {props.recom_papers && props.recom_papers.length > 0 && (
                <CardBox className="mb-10">
                    {/* isi start */}
                    <div className="w-full p-4">
                        <h1 className="text-lg font-bold">Rekomendasi</h1>
                    </div>
                    <ContentSearch
                        papers={props.recom_papers}
                        className="w-full lg:col-span-2 xl:col-span-3 !p-0 !pb-4 md:!pb-10"
                    />
                    {/* isi end */}
                </CardBox>
            )}
        </SearchLayout>
    );
}

import { Head, usePage } from "@inertiajs/react";
import SearchLayout from "@/Layouts/SearchLayout";

import CardBox from "@/Components/default/CardBox";
import ContentSearch from "../../Components/situsiba/ContentSearch";

export default function Search() {
    const props = usePage().props;
    return (
        <SearchLayout situsiba={true}>
            <Head title={"Situ Siba"} />

            <CardBox className="w-[100%] lg:w-[95%] mx-auto mb-20">
                {/* isi start */}
                <ContentSearch
                    papers={props.papers}
                    className="lg:col-span-2 xl:col-span-3"
                />

                {/* isi end */}
            </CardBox>
        </SearchLayout>
    );
}

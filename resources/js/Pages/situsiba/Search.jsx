import SituSiba from "@/Components/situsiba/Isi";

import { Head, usePage } from "@inertiajs/react";
import SearchLayout from "../../Layouts/SearchLayout";
import CardBox from "../../Components/default/CardBox";

export default function Search() {
    const props = usePage().props;
    return (
        <SearchLayout situsiba={true}>
            <Head title={"Situ Siba"} />

            <CardBox className="w-[90%] xl:w-[85%] mx-auto mb-20">
                {/* isi start */}
                <SituSiba
                    papers={props.papers}
                    className="lg:col-span-2 xl:col-span-3"
                />

                {/* isi end */}
            </CardBox>
        </SearchLayout>
    );
}

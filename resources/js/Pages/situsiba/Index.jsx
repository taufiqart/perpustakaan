import { Head, usePage } from "@inertiajs/react";

import ClientLayout from "@/Layouts/ClientLayout";

import SituSiba from "@/Components/situsiba/Isi";
import SectionBook from "@/Components/situsiba/SectionBook";

import { CardBox } from "@/Components/default";

export default function Index() {
    const props = usePage().props;
    return (
        <ClientLayout situsiba={true}>
            <Head title={"Situ Siba"} />

            {/* content bang start */}
            <CardBox className="w-[90%] xl:w-[85%] mx-auto mb-20">
                {/* isi start */}
                <SituSiba
                    papers={props.papers}
                    className="lg:col-span-2 xl:col-span-3"
                />

                {/* isi end */}
            </CardBox>
            <CardBox className="w-[90%] xl:w-[85%] mx-auto  my-10">
                {/* Terbaru start */}
                <SectionBook
                    data={props.paper_latests}
                    title={"Terbaru"}
                />
                {/* Terbaru end */}
            </CardBox>

            <CardBox className="w-[90%] xl:w-[85%] mx-auto  my-10">
                {/* Terbanyak start */}
                <SectionBook
                    data={props.paper_mostreads}
                    title={"Terbanyak dibaca"}
                />
                {/* Terbanyak end */}
            </CardBox>
        </ClientLayout>
    );
}

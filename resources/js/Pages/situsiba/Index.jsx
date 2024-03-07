import SituSiba from "@/Components/situsiba/Isi";
import SectionBook from "@/Components/situsiba/SectionBook";

import { Head, usePage } from "@inertiajs/react";
import ClientLayout from "@/Layouts/ClientLayout";

export default function Index() {
    const props = usePage().props;
    return (
        <ClientLayout situsiba={true}>
            <Head title={"Situ Siba"} />

            {/* content bang start */}
            <div className="w-[90%] xl:w-[85%] mx-auto mb-20">
                {/* isi start */}
                <SituSiba
                    papers={props.papers}
                    className="lg:col-span-2 xl:col-span-3"
                />
                {/* isi end */}
            </div>

            {/* kanan start */}
            <div className="w-[90%] xl:w-[85%] mx-auto my-10 backdrop-blur-sm mb-20">
                {/* Terbaru start */}
                <SectionBook
                    data={props.paper_latests}
                    title={"Terbaru"}
                    link={{ label: "Lainnya", href: "/situsiba/latest" }}
                />
                {/* Terbaru end */}

                {/* Terbanyak start */}
                <SectionBook
                    data={props.paper_latests}
                    title={"Terbanyak dibaca"}
                    link={{ label: "Lainnya", href: "/situsiba/mostreads" }}
                />
                {/* Terbanyak end */}
            </div>
        </ClientLayout>
    );
}

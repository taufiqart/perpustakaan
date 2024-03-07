import SitusibaLayout from "@/Layouts/SitusibaLayout";
import { Head } from "@inertiajs/react";
import BookView from "@/Components/BookView";

export default function Show({ paper }) {
    return (
        <>
            <SitusibaLayout situsiba={true}>
                <Head title={"Situ Siba"} />
                <div className="min-h-screen flex justify-center items-center mx-2">
                    <BookView paper={paper} />
                </div>
            </SitusibaLayout>
        </>
    );
}

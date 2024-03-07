import ClientLayout from "@/Layouts/ClientLayout";
import { Head } from '@inertiajs/react';

export default function Show() {
    return (
        <ClientLayout situsiba={true}>
            <Head title={"Situ Siba"} />

            <h1>Show</h1>
        </ClientLayout>
    );
}

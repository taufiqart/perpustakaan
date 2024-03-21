import React from "react";

import { Head } from "@inertiajs/react";
import SitusibaLayout from "@/Layouts/SitusibaLayout";
import ContentView from "@/Components/shared/ContentView";

export default function Show({ paper }) {
    return (
        <>
            <SitusibaLayout situsiba={true}>
                <Head title={"Situ Siba"} />
                <div className="min-h-screen md:mt-52">
                    <ContentView
                        fileList={paper?.post_assets}
                        content={paper}
                    />
                    <div className="h-96"></div>
                </div>
            </SitusibaLayout>
        </>
    );
}

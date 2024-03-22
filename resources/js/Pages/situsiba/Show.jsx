import React from "react";
import { Head,usePage } from "@inertiajs/react";

import SitusibaLayout from "@/Layouts/SitusibaLayout";
import { ContentView } from "@/Components/shared";

export default function Show({ paper }) {
    const props = usePage().props
    return (
        <>
            <SitusibaLayout situsiba={true}>
                <Head
                    title={`${
                        paper?.title
                            ? paper?.title + " - "+props.config.APP_NAME_SITUSIBA
                            : props.config.APP_NAME_SITUSIBA
                    }`}
                />
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

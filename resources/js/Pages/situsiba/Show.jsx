import SitusibaLayout from "@/Layouts/SitusibaLayout";
import { Head } from "@inertiajs/react";
import BookViewCustom from "@/Components/BookViewCustom";
import CardBox from "../../Components/CardBox";

export default function Show({ paper }) {
    return (
        <>
            <SitusibaLayout situsiba={true}>
                <Head title={"Situ Siba"} />
                <div className="min-h-screen flex flex-col justify-center items-center px-3 md:px-14 transition-all duration-500">
                    <div className="-mt-14 md:mt-52 w-full lg:max-w-[50vw] transition-all duration-500">
                        <BookViewCustom
                            paper={paper}
                            height="100%"
                            width="100%"
                        />
                    </div>
                    {/* <div className="mt-14 w-full lg:max-w-[50vw] transition-all duration-500">
                        <CardBox className="[box-shadow:36px_36px_50px_15px_#eed7d1d1] p-10 rounded-[25px]">
                            <div className="h-40 w-40 bg-black"></div>
                        </CardBox>
                    </div>
                    <div className="h-screen"></div> */}
                    <div className="h-96"></div>
                </div>
            </SitusibaLayout>
        </>
    );
}

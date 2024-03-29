import React from "react";
import { Head, usePage } from "@inertiajs/react";

import AdminLayout from "@/Layouts/admin/AdminLayout";
import Edit from "./Edit";

export default function ProfileIndex({ user }) {
    const [show, setShow] = React.useState(false);

    const [userDetail, setUserDetail] = React.useState({});
    const props = usePage().props;
    
    React.useEffect(() => {
        setUserDetail(user?.user_detail);
    }, [props]);

    return (
        <>
            <Head title={`Profile`} />
            <AdminLayout>
                {/* <BookLoader loader={processing} /> */}
                <div className="flex gap-4 items-start flex-wrap justify-center">
                    <div className="relative max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5 min-w-[30%]">
                        {/* Disable Sementara */}
                        {/* <div className="absolute right-5">
                            <button onClick={() => setShow(!show)}>
                                <i className="far fa-edit text-slate-500 mr-2 text-lg hover:text-slate-900"></i>
                            </button>
                        </div> */}
                        {/* Disable Sementara End */}
                        <img
                            className="w-32 h-32 rounded-full mx-auto"
                            src={userDetail?.avatar}
                            alt={`Profile picture ${userDetail?.full_name}`}
                        />
                        <h2 className="text-center text-2xl font-semibold mt-3">
                            {userDetail?.full_name}
                        </h2>
                        {userDetail?.class_room && (
                            <p className="text-center text-gray-600 mt-1">
                                {`( ${userDetail?.class_room?.class} ) ${userDetail?.major?.major}`}
                            </p>
                        )}
                        <div className="flex w-full items-center mt-2 flex-col">
                            <h3 className="text-xl font-semibold uppercase">
                                {userDetail?.gender}
                            </h3>
                            <h5>
                                {`${userDetail?.place_of_birth} ${userDetail?.date_of_birth}`}
                            </h5>
                        </div>
                        <div className="mt-5">
                            <h3 className="text-lg font-semibold">Email</h3>
                            <p className="text-gray-600 mb-2">
                                {`${user.email}`}
                            </p>
                            <h3 className="text-lg font-semibold">Address</h3>
                            <p className="text-gray-600 mt-2">
                                {`${userDetail?.address}`}
                            </p>
                        </div>
                    </div>
                </div>
                {show && <Edit _show={false} profile={{ user }}></Edit>}
            </AdminLayout>
        </>
    );
}

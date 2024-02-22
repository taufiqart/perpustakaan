import { Head, Link, useForm, usePage } from "@inertiajs/react";
import AdminLayout from "@/Layouts/admin/AdminLayout";

export default function ProfileIndex({ papers }) {
    return (
        <>
            <Head title={`Profile`} />
            <AdminLayout>
                {/* <BookLoader loader={processing} /> */}
                <div className="flex gap-4 items-start flex-wrap justify-center">
                    <div class="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
                        <img
                            class="w-32 h-32 rounded-full mx-auto"
                            src="https://picsum.photos/200"
                            alt="Profile picture"
                        />
                        <h2 class="text-center text-2xl font-semibold mt-3">
                            John Doe
                        </h2>
                        <p class="text-center text-gray-600 mt-1">
                            Software Engineer
                        </p>
                        
                        <div class="mt-5">
                            <h3 class="text-xl font-semibold">Bio</h3>
                            <p class="text-gray-600 mt-2">
                                John is a software engineer with over 10 years
                                of experience in developing web and mobile
                                applications. He is skilled in JavaScript,
                                React, and Node.js.
                            </p>
                        </div>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}

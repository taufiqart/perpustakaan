import React from "react";
import { useForm } from "@inertiajs/react";
import { Input } from "@/Components/default";

export default function Edit({ profile }) {
    const { data, setData, errors, processing, post, clearErrors } =
        useForm(profile);
    return (
        <>
            <div className="flex items-center justify-center px-12">
                <div className="mx-auto w-full bg-white">
                    <form
                        className="py-6 px-9"
                        action="https://formbold.com/s/FORM_ID"
                        method="POST"
                    >
                        <Input
                            label={"Full Name"}
                            name={"full_name"}
                            error={errors?.full_name}
                            value={data?.user_detail?.full_name}
                            required
                            onChange={(e) => {
                                setData();
                            }}
                            placeholder="Jhon Doe"
                        />
                        <Input
                            label={"Address"}
                            name={"address"}
                            error={errors?.address}
                            value={data?.user_detail?.address}
                            required
                            onChange={(e) => {
                                setData();
                            }}
                            placeholder="Jl."
                        />
                        <Input
                            label={"Gender"}
                            name={"gender"}
                            error={errors?.gender}
                            value={data?.user_detail?.gender}
                            required
                            onChange={(e) => {
                                setData();
                            }}
                            placeholder="Jhon Doe"
                        />
                        <Input
                            label={"Place Of Birth"}
                            name={"place_of_birth"}
                            error={errors?.place_of_birth}
                            value={data?.user_detail?.place_of_birth}
                            required
                            onChange={(e) => {
                                setData();
                            }}
                            placeholder="Jhon Doe"
                        />
                        <Input
                            label={"Date Of Birth"}
                            name={"date_of_birth"}
                            error={errors?.date_of_birth}
                            value={data?.user_detail?.date_of_birth}
                            type="date"
                            required
                            onChange={(e) => {
                                setData();
                            }}
                            placeholder="Jhon Doe"
                        />

                        <div className="mt-3 ">
                            <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

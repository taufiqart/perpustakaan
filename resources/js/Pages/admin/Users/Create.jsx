import Alert from "@/Components/Alert";
import BookLoader from "@/Components/BookLoader";
import PrimaryButton from "@/Components/PrimaryButton";
import AdminLayout from "@/Layouts/admin/AdminLayout";
import { Head, Link, useForm, usePage, router } from "@inertiajs/react";
import Input from "@/Components/Input";
import React, { useEffect, useRef, useState } from "react";
import InputLabel from "@/Components/InputLabel";
import CreatableSelect from "react-select/creatable";
import InputError from "@/Components/InputError";
import { createOption } from "@/config/function";
import FileUploadPreview from "@/Components/admin/FileUploadPreview";
import TextInput from "@/Components/TextInput";

export default function Create({
    user,
    identity_types,
    member_types,
    majors,
    class_rooms,
    gender,
}) {
    const [UserDetail, setUserDetail] = useState(
        user?.user_detail ?? {
            avatar: null,
            address: "",
            full_name: "",
            class_room_id: "",
            major_id: "",
            identity_type_id: "",
            identity: "",
            member_type_id: "",
            gender: "",
            place_of_birth: "",
            date_of_birth: "",
            phone_number: "",
        }
    );
    const [flash, setFlash] = useState();
    const props = usePage().props;

    const optionMajor = majors.map((major) =>
        createOption(major.id, major.major)
    );
    const [valueMajor, setValueMajor] = useState(
        user?.major && createOption(user?.major.id, user?.major.major)
    );

    const optionClassRoom = class_rooms.map((class_room) =>
        createOption(class_room.id, class_room.class)
    );

    const [valueClassRoom, setValueClassRoom] = useState(
        user?.class_room &&
            createOption(user?.class_room.id, user?.class_room.major)
    );

    const [valueIidentityType, setValueIidentityType] = useState(
        user?.user_detail?.identity_type &&
            createOption(
                user?.user_detail.identity_type.id,
                user?.user_detail.identity_type.type
            )
    );

    const [valueMemberType, setValueMemberType] = useState(
        user?.user_detail?.member_type &&
            createOption(
                user?.user_detail.member_type.id,
                user?.user_detail.member_type.type
            )
    );

    const [valueGender, setValueGender] = useState();
    useEffect(() => {
        if (user?.user_detail) {
            let _gender = gender.filter(
                (__) => __.value == user?.user_detail.gender
            );
            setValueGender(_gender[0]);
        }
    }, [gender]);

    const { data, setData, errors, processing, post, clearErrors } = useForm(
        user ?? {
            email: "",
            password: "",
            user_detail: UserDetail,
        }
    );

    useEffect(() => {
        setData("user_detail", UserDetail);
    }, [UserDetail]);

    useEffect(() => {
        setFlash(props.flash);
    }, [processing]);

    const onSubmit = (e) => {
        e.preventDefault();
        // data.user_detail.gender = valueGender?.value||"";
        // data["class_room_id"] = valueClassRoom?.value;
        // data["major_id"] = valueMajor?.value;
        // data["identity_type_id"] = valueIidentityType?.value;
        // data["member_type_id"] = valueMemberType?.value;
        data.user_detail = UserDetail;
        if (`${valueMemberType?.label}`.toLowerCase() != "siswa") {
            data["class_room_id"] = null;
            data["major_id"] = null;
        }

        clearErrors();
        post(data.id ? route("user.update", data.id) : route("user.store"), {
            onSuccess: () => {
                setTimeout(() => {
                    router.visit(route("user.index"));
                }, 1000);
            },
        });
    };
    console.log({ identity_types, member_types, class_rooms, majors, data });

    return (
        <AdminLayout>
            <Head title={`User ${user?.email == null ? "Add" : "Edit"}`} />

            <BookLoader loader={processing} />
            <div className="flex items-center w-full flex-col">
                <div className="bg-white rounded-md w-full max-w-3xl">
                    <form className="p-6" onSubmit={onSubmit}>
                        {!processing && flash?.error && (
                            <Alert type="error" message={flash?.error} />
                        )}
                        {!processing && flash?.success && (
                            <Alert type="success" message={flash?.success} />
                        )}
                        <div className="">
                            <InputLabel htmlFor="avatar" value="Photo" />
                            <FileUploadPreview
                                containerImgClassName="w-40 h-40 overflow-clip rounded-md"
                                imgClassName="h-full"
                                className="w-fit"
                                accept={".jpg,.jpeg,.png,.gif"}
                                id="avatar"
                                setData={(data) =>
                                    setUserDetail({
                                        ...UserDetail,
                                        avatar: data,
                                    })
                                }
                            />

                            <InputError
                                message={errors?.photo}
                                className="mt-2"
                            />
                        </div>
                        <Input
                            label={"Full Name"}
                            name={"full_name"}
                            error={errors?.full_name}
                            value={UserDetail?.full_name}
                            required
                            onChange={(e) => {
                                setUserDetail({
                                    ...UserDetail,
                                    [e.target.name]: e.target.value,
                                });
                            }}
                            placeholder="Jhon Doe"
                        />
                        <Input
                            label={"Email"}
                            name={"email"}
                            error={errors?.email}
                            value={data?.email}
                            type={"email"}
                            required
                            onChange={(e) => {
                                setData("email", e.target.value);
                            }}
                            placeholder="example@mail.com"
                        />

                        <Input
                            label={"Password"}
                            name={"password"}
                            error={errors?.password}
                            value={data?.password}
                            type={"password"}
                            minLength="6"
                            required
                            onChange={(e) => {
                                setData("password", e.target.value);
                            }}
                            placeholder="password"
                        />
                        <Input
                            label={"Phone Number"}
                            name={"phone_number"}
                            error={errors?.phone_number}
                            value={UserDetail?.phone_number}
                            type={"text"}
                            required
                            onChange={(e) => {
                                setUserDetail({
                                    ...UserDetail,
                                    [e.target.name]: e.target.value,
                                });
                            }}
                            placeholder="0000000000"
                        />

                        {/* Identity start */}
                        <div className="flex flex-col md:flex-row gap-x-4">
                            <div className="mt-3 w-full">
                                <InputLabel
                                    htmlFor="identity_type_id"
                                    value="Identity Type"
                                />
                                <CreatableSelect
                                    className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                                    inputId="identity_type_id"
                                    name="identity_type_id"
                                    required
                                    options={identity_types.map((type) =>
                                        createOption(type.id, type.type)
                                    )}
                                    value={valueIidentityType}
                                    onChange={(value) => {
                                        setValueIidentityType(value);
                                        setUserDetail({
                                            ...UserDetail,
                                            identity_type_id: value.value,
                                        });
                                    }}
                                />

                                <InputError
                                    message={errors?.identity_type_id}
                                    className="mt-2"
                                />
                            </div>
                            <Input
                                label={"Identity Value"}
                                name={"identity"}
                                error={errors?.identity}
                                value={UserDetail?.identity}
                                required
                                onChange={(e) => {
                                    setUserDetail({
                                        ...UserDetail,
                                        [e.target.name]: e.target.value,
                                    });
                                }}
                                placeholder="0000"
                            />
                        </div>
                        {/* Identity end */}

                        {/* MemberType start */}
                        <div className="mt-3 w-full">
                            <InputLabel
                                htmlFor="member_type_id"
                                value="User Type"
                            />
                            <CreatableSelect
                                className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                                inputId="member_type_id"
                                name="member_type_id"
                                required
                                options={member_types.map((type) =>
                                    createOption(type.id, type.type)
                                )}
                                value={valueMemberType}
                                onChange={(value) => {
                                    setValueMemberType(value);
                                    setUserDetail({
                                        ...UserDetail,
                                        member_type_id: value.value,
                                    });
                                }}
                            />

                            <InputError
                                message={errors?.member_type_id}
                                className="mt-2"
                            />
                        </div>
                        {/* MemberType end */}

                        {/* ClassRoom and Major start */}
                        {(`${UserDetail?.member_type?.type}`.toLowerCase() ==
                            "siswa" ||
                            `${valueMemberType?.label}`.toLowerCase() ==
                                "siswa") && (
                            <div className="flex flex-col md:flex-row gap-x-4">
                                <div className="mt-3 w-full">
                                    <InputLabel
                                        htmlFor="class_room_id"
                                        value="Class Room"
                                    />
                                    <CreatableSelect
                                        className=" mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                                        inputId="class_room_id"
                                        name="class_room_id"
                                        required
                                        options={optionClassRoom}
                                        value={valueClassRoom}
                                        onChange={(value) => {
                                            setValueClassRoom(value);
                                            setUserDetail({
                                                ...UserDetail,
                                                class_room_id: value.value,
                                            });
                                        }}
                                    />

                                    <InputError
                                        message={errors.class_room_id}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mt-3 w-full">
                                    <InputLabel
                                        htmlFor="major_id"
                                        value="Major"
                                    />
                                    <CreatableSelect
                                        className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                                        inputId="major_id"
                                        name="major_id"
                                        required
                                        options={optionMajor}
                                        value={valueMajor}
                                        onChange={(value) => {
                                            setValueMajor(value);
                                            setUserDetail({
                                                ...UserDetail,
                                                major_id: value.value,
                                            });
                                        }}
                                    />

                                    <InputError
                                        message={errors?.major_id}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                        )}

                        {/* ClassRoom and Major end */}

                        {/* Address start */}
                        <div className="mt-3 w-full">
                            <InputLabel htmlFor="address" value="Address" />
                            <textarea
                                className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                                name="address"
                                required
                                onChange={(e) =>
                                    setUserDetail({
                                        ...UserDetail,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                            >
                                {data?.address}
                            </textarea>

                            <InputError
                                message={errors?.address}
                                className="mt-2"
                            />
                        </div>
                        {/* Address end */}

                        {/* Birth group start */}
                        <div className="flex flex-col md:flex-row gap-x-4">
                            <Input
                                label={"Place of Birth"}
                                name={"place_of_birth"}
                                error={errors?.place_of_birth}
                                value={UserDetail?.place_of_birth}
                                required
                                onChange={(e) => {
                                    setUserDetail({
                                        ...UserDetail,
                                        [e.target.name]: e.target.value,
                                    });
                                }}
                                placeholder="Pasuruan"
                            />
                            <Input
                                label={"Date of Birth"}
                                name={"date_of_birth"}
                                error={errors?.date_of_birth}
                                value={UserDetail?.date_of_birth}
                                required
                                type={"date"}
                                onChange={(e) => {
                                    setUserDetail({
                                        ...UserDetail,
                                        [e.target.name]: e.target.value,
                                    });
                                }}
                            />
                            <div className="mt-3 w-full">
                                <InputLabel htmlFor="gender" value="Gender" />
                                <CreatableSelect
                                    className="relative z-10 mt-1 block  focus:border-indigo-500 focus:ring-indigo-500 w-full rounded-md shadow-sm"
                                    classNames={{
                                        control: () => `py-[0.10rem]`,
                                    }}
                                    inputId="gender"
                                    name="gender"
                                    required
                                    options={gender}
                                    value={valueGender}
                                    onChange={(value) => {
                                        setValueGender(value);
                                        setUserDetail({
                                            ...UserDetail,
                                            gender: value.value,
                                        });
                                    }}
                                />

                                <InputError
                                    message={errors.class_room}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                        {/* Birth group end */}

                        <div className="mt-6 flex justify-end">
                            <Link
                                className="inline-flex justify-center items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 "
                                href={route("user.index")}
                            >
                                <i className="fas fa-arrow-left"></i> Back
                            </Link>

                            <PrimaryButton
                                className="ml-3 bg-blue-400 hover:bg-blue-600 focus:bg-blue-600"
                                disabled={processing}
                                as="button"
                            >
                                Submit
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
}

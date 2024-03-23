import React from "react";
import { Head, Link, useForm, usePage, router } from "@inertiajs/react";

import AdminLayout from "@/Layouts/admin/AdminLayout";

// LOCAL COMPONENT
import {
    Alert,
    Dropdown,
    Modal,
    DangerButton,
    SecondaryButton,
    Pagination,
    Badge,
    TextInput,
    Table,
} from "@/Components/default";

import { BookLoader } from "@/Components/shared";

export default function UserIndex({ users }) {
    const [confirmDelete, setConfirmDelete] = React.useState(false);
    const [flash, setFlash] = React.useState();

    const props = usePage().props;
    const [search, setSearch] = React.useState(
        new URLSearchParams(window.location.search).get("search") ?? ""
    );

    const handleSearch = (event) => {
        setSearch(event.target.value);
        router.visit(window.location.pathname, {
            data: { search: event.target.value },
            preserveState: true,
        });
    };

    const onCloseModalDelete = () => {
        setConfirmDelete(false);
        setFlash();
        reset();
        clearErrors();
    };

    const onOpenModalDelete = (article) => {
        setData(article);
        setConfirmDelete(true);
    };

    const {
        data,
        setData,
        errors,
        processing,
        post,
        put,
        delete: destroy,
        reset,
        clearErrors,
    } = useForm();

    React.useEffect(() => {
        setFlash(props.flash);
    }, [processing]);

    const onDeleteForm = (e) => {
        e.preventDefault();
        destroy(route("pages.destroy", data.id), {
            onSuccess: () => setTimeout(() => onCloseModalDelete(), [1000]),
        });
    };

    return (
        <>
            <Head title="Pages" />
            <AdminLayout>
                <div className="w-full flex gap-x-3 p-4 pt-0 -mt-5">
                    <Link
                        href={route("user.create")}
                        className="inline-flex items-center px-4 py-2 bg-blue-400 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                    >
                        <i className="fas fa-plus"></i>
                        Add
                    </Link>
                    <TextInput
                        value={search}
                        placeholder={"Search"}
                        className={"w-96"}
                        onChange={handleSearch}
                    />
                </div>
                <Table>
                    <thead>
                        <tr>
                            <Table.Th></Table.Th>
                            <Table.Th>Nama</Table.Th>
                            <Table.Th>Email</Table.Th>
                            <Table.Th>User Type</Table.Th>
                            <Table.Th>Class Room</Table.Th>
                            <Table.Th>Gender</Table.Th>
                            <Table.Th>Role</Table.Th>
                            <Table.Th></Table.Th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.data &&
                            users?.data?.length > 0 &&
                            users.data.map((user) => {
                                let user_detail = user?.user_detail;
                                return (
                                    <tr key={user.email}>
                                        <Table.Td>
                                            <div
                                                className={`h-16 w-16 rounded-sm overflow-hidden bg-cover bg-center`}
                                                style={{
                                                    backgroundImage: `url(${user_detail?.avatar})`,
                                                }}
                                            ></div>
                                        </Table.Td>
                                        <Table.Td>
                                            {user_detail?.full_name}
                                        </Table.Td>
                                        <Table.Td>{user?.email}</Table.Td>
                                        <Table.Td>
                                            {user_detail?.member_type?.type}
                                        </Table.Td>
                                        <Table.Td className="!align-top">{`${
                                            user_detail?.class_room?.class ?? ""
                                        } ${
                                            user_detail?.major?.major ?? ""
                                        }`}</Table.Td>
                                        <Table.Td>
                                            {user_detail?.gender}
                                        </Table.Td>
                                        <Table.Td>
                                            <Badge
                                                type={
                                                    user.role == "user"
                                                        ? "primary"
                                                        : "success"
                                                }
                                                text={user.role}
                                            />
                                        </Table.Td>
                                        <Table.Td className="text-right">
                                            <div className="flex">
                                                <div
                                                    className="flex justify-center items-center
                                                     hover:bg-slate-200 p-2 rounded-full cursor-pointer"
                                                    onClick={() =>
                                                        router.visit(
                                                            route(
                                                                "profile.show",
                                                                user.email
                                                            )
                                                        )
                                                    }
                                                >
                                                    <i className="fas fa-eye"></i>
                                                </div>
                                                <Dropdown>
                                                    <Dropdown.Trigger>
                                                        <button
                                                            type="button"
                                                            className="inline-flex hover:bg-slate-200 rounded-full items-center w-7 justify-center h-7 border border-transparent text-sm font-medium  text-gray-500  hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                        >
                                                            <i className="fas fa-ellipsis-v"></i>
                                                        </button>
                                                    </Dropdown.Trigger>

                                                    <Dropdown.Content>
                                                        <Dropdown.Link
                                                            className="block w-full px-4 py-2 text-left text-sm leading-5 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out !text-gray-500 hover:!text-gray-700"
                                                            href={route(
                                                                "pages.edit",
                                                                user.id
                                                            )}
                                                        >
                                                            <i className="fas fa-edit"></i>{" "}
                                                            Edit
                                                        </Dropdown.Link>
                                                        <div
                                                            className="block w-full px-4 py-2 text-left text-sm leading-5 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out !text-gray-500 hover:!text-gray-700"
                                                            onClick={() =>
                                                                onOpenModalDelete(
                                                                    user
                                                                )
                                                            }
                                                        >
                                                            <i className="fas fa-trash"></i>{" "}
                                                            Hapus
                                                        </div>
                                                    </Dropdown.Content>
                                                </Dropdown>
                                            </div>
                                        </Table.Td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </Table>
                {users.links && (
                    <div className="w-full flex justify-center -mt-10">
                        <Pagination links={users?.links} />
                    </div>
                )}
                <Modal
                    show={confirmDelete}
                    onClose={onCloseModalDelete}
                    maxWidth="sm"
                >
                    <BookLoader loader={processing} />
                    <form className="p-6 w-full h-full" onSubmit={onDeleteForm}>
                        {!processing && flash?.error && (
                            <Alert type="error" message={flash?.error} />
                        )}
                        {!processing && flash?.success && (
                            <Alert type="success" message={flash?.success} />
                        )}
                        <h2 className="text-lg font-medium text-gray-500">
                            Are you sure you want to delete?
                        </h2>
                        <h2 className="text-lg font-medium text-gray-900">
                            {data.title}
                        </h2>

                        <div className="mt-6 flex justify-end">
                            <SecondaryButton onClick={onCloseModalDelete}>
                                Cancel
                            </SecondaryButton>

                            <DangerButton
                                className="ml-3"
                                disabled={processing}
                                as="button"
                            >
                                Delete
                            </DangerButton>
                        </div>
                    </form>
                </Modal>
            </AdminLayout>
        </>
    );
}

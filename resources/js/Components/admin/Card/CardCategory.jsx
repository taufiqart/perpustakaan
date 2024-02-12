import Dropdown from "@/Components/Dropdown";
import React from "react";

export default function CardCategory({
    category,
    className,
    index,
    length,
    onAdd,
    onDelete,
    setDataAdd,
    child,
}) {
    const addCategory = (category) => {
        setDataAdd({
            parent_id: category.id,
            order: category.child?.length + 1,
        });
        onAdd();
    };

    const deleteCategory = (category) => {
        setDataAdd(category);
        onDelete();
    };
    const editCategory = (category) => {
        setDataAdd({ ...category, ["edit"]: true });
        onAdd();
    };
    return (
        <>
            <div
                className={` w-full h-10 bg-white hover:bg-blueGray-100 shadow-md group rounded-sm flex justify-between items-center px-3 ${className}`}
            >
                {category.title}
                <div className="flex gap-x-5">
                    <div className="flex opacity-0 group-hover:opacity-100 justify-center items-center">
                        {/* <button
                            type="button"
                            className="inline-flex hover:bg-white rounded-full items-center w-7 justify-center h-7 border border-transparent text-sm font-medium text-gray-500  hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                        >
                            <i className="fas fa-angle-up"></i>
                        </button>
                        <button
                            type="button"
                            className="inline-flex hover:bg-white rounded-full items-center w-7 justify-center h-7 border border-transparent text-sm font-medium  text-gray-500  hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                        >
                            <i className="fas fa-angle-down"></i>
                        </button> */}
                        {!child && (
                            <button
                                type="button"
                                onClick={() => addCategory(category)}
                                className="inline-flex hover:bg-white rounded-full items-center w-7 justify-center h-7 border border-transparent text-sm font-medium  text-gray-500  hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                            >
                                <i className="fas fa-plus"></i>
                            </button>
                        )}
                    </div>
                    <Dropdown>
                        <Dropdown.Trigger>
                            <span className="inline-flex rounded-md">
                                <button
                                    type="button"
                                    className="inline-flex hover:bg-white rounded-full items-center w-7 justify-center h-7 border border-transparent text-sm font-medium  text-gray-500  hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                >
                                    <i className="fas fa-ellipsis-v"></i>
                                </button>
                            </span>
                        </Dropdown.Trigger>

                        <Dropdown.Content>
                            <div
                                className="block w-full px-4 py-2 text-left text-sm leading-5 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out !text-gray-500 hover:!text-gray-700"
                                onClick={() => editCategory(category)}
                            >
                                <i className="fas fa-edit"></i> Edit
                            </div>
                            <div
                                className="block w-full px-4 py-2 text-left text-sm leading-5 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out !text-gray-500 hover:!text-gray-700"
                                onClick={() => deleteCategory(category)}
                            >
                                <i className="fas fa-trash"></i> Hapus
                            </div>
                        </Dropdown.Content>
                    </Dropdown>
                </div>
            </div>
        </>
    );
}

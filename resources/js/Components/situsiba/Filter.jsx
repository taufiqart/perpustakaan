import React from "react";
import { Link, usePage, router } from "@inertiajs/react";

import { Filter as FilterIcon } from "feather-icons-react/build/IconComponents";

import { CustomCheckbox } from "@/Components/default";

export default function Filter({
    onFilter = (url) => {},
    className = "",
    onclickFilter = false,
}) {
    const [url, setUrl] = React.useState(new URL(window.location.href));
    const [filter, setFilter] = React.useState(
        new URLSearchParams(window.location.search)
    );
    const props = usePage().props;

    const handleFilter = ({ filter, value, button = false }) => {
        
        if (url.searchParams.getAll(filter).includes(value)) {
            url.searchParams.delete(filter, value);
        } else {
            url.searchParams.append(filter, value);
        }

        if (onclickFilter) {
            router.get(url.href);
        }else{
            onFilter(url);
        }
    };

    return (
        <>
            <div className={`flex flex-col -pt-6 pb-10 mx-4 ${className}`}>
                <div className="flex items-center justify-between">
                    <FilterIcon className="text-slate-600 w-5" />
                    <div className="text-left-0 md:pl-10 text-slate-600 mr-0 whitespace-nowrap text-base  uppercase font-bold p-4 px-0">
                        Filter
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <Link
                        href={route("situsiba.category")}
                        className="text-left-0  mr-0 whitespace-nowrap text-base  uppercase font-bold pt-4 px-0"
                    >
                        Kategori
                    </Link>
                    <div className="flex flex-wrap p-0">
                        {props.categories &&
                            props.categories.map((e, key) => {
                                return (
                                    <CustomCheckbox
                                        onChange={() =>
                                            handleFilter({
                                                filter: "category[]",
                                                value: e.category,
                                            })
                                        }
                                        value={e.category}
                                        checked={filter
                                            .getAll("category[]")
                                            ?.includes(e.category)}
                                        key={key}
                                        label={e.category}
                                        name="category[]"
                                    />
                                );
                            })}
                    </div>
                    <hr className="w-full mt-2" />
                </div>
                <div className="flex flex-col justify-between">
                    <Link
                        href={route("situsiba.genre")}
                        className="text-left-0  mr-0 whitespace-nowrap text-base  uppercase font-bold pt-4 px-0"
                    >
                        Jenis Karya
                    </Link>
                    <div className="flex flex-wrap p-0">
                        {props.genres &&
                            props.genres.map((e, key) => {
                                return (
                                    <CustomCheckbox
                                        onChange={() => {
                                            handleFilter({
                                                filter: "genres[]",
                                                value: e.genre,
                                            });
                                        }}
                                        checked={filter
                                            .getAll("genres[]")
                                            ?.includes(e.genre)}
                                        key={key}
                                        label={e.genre}
                                        name="genres[]"
                                    />
                                );
                            })}
                    </div>
                    <hr className="w-full mt-2" />
                </div>
            </div>
        </>
    );
}

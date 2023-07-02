import React from "react";

const TableTh = ({ children, className }) => {
    return (
        <th
            className={`px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 ${className}`}
        >
            {children}
        </th>
    );
};
const TableTd = ({ children, className }) => {
    return (
        <td
            className={`border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-pre-wrap p-4 ${className}`}
        >
            {children}
        </td>
    );
};

const Table = ({ children, title }) => {
    return (
        <div className="w-full mb-12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-lg text-blueGray-700">
                                {title}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        {children}
                    </table>
                </div>
            </div>
        </div>
    );
};

Table.Th = TableTh;
Table.Td = TableTd;
export default Table;

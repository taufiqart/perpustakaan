import Dropdown from "./landingpage/Dropdown";

const Nav = ({ data }) => {
    return (
        <header className="backdrop-blur-lg shadow-lg top-0 w-full flex items-center z-10 sticky">
            <div className="w-full">
                <div className="flex items-center justify-center relative ">
                    <div className="flex items-center px-4">
                        <button
                            id="hamburger"
                            name="hamburger"
                            className="block absolute right-4 lg:hidden"
                        ></button>
                        <nav
                            id="nav-menu"
                            className="py-5  bg-white shadow-lg rounded-lg w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
                        >
                            <ul className="block lg:flex ">
                                {data &&
                                    data.map((da) => {
                                        if (da.child.length > 0) {
                                            return (
                                                <li
                                                    className="group"
                                                    key={da.slug}
                                                >
                                                    <Dropdown
                                                        data={da}
                                                    ></Dropdown>
                                                </li>
                                            );
                                        } else {
                                            return (
                                                <li
                                                    className="group"
                                                    key={da.slug}
                                                >
                                                    <a
                                                        href={da.slug}
                                                        className="text-base text-black active:bg-blue-400 group-hover:bg-green-400 group-hover:drop-shadow-xl group-hover:text-white group-hover:rounded-full focus:ring focus:ring-green-300 duration-500 py-2 px-7 mx-2 flex"
                                                    >
                                                        {da.title}
                                                    </a>
                                                </li>
                                            );
                                        }
                                    })}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Nav;

import Dropdown from "./landingpage/Dropdown"
import CButton from "./landingpage/button";

const Nav = () =>{
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
                                <li className="group">
                                    <CButton></CButton>
                                </li>
                                <li className="group">
                                    <Dropdown></Dropdown>
                                </li>
                                <li className="group">
                                    <Dropdown></Dropdown>
                                </li>
                                <li className="group">
                                    <Dropdown></Dropdown>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Nav

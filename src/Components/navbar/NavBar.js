import { Link } from "react-router-dom";
import auth from "../../firebaseConfig";
import "./navbar.css";

const NavBar = () => {
    console.log(auth?.currentUser);
    console.log(auth?.currentUser?.photoURL);
    return (
        <div>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <div className="flex items-center">
                        <img
                            src="https://i.ibb.co/N6Tb4ny/warehouse.png"
                            className="mr-3 h-6 sm:h-9"
                            alt="GudamGhor logo"></img>

                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            GudamGhor
                        </span>
                    </div>

                    <div className="flex items-center md:order-2">
                        {auth?.currentUser ? (
                            <>
                                <button
                                    type="button"
                                    class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                    Log Out
                                </button>
                                {/* user photo */}
                                <button
                                    type="button"
                                    className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                    id="user-menu-button"
                                    aria-expanded="false"
                                    data-dropdown-toggle="dropdown">
                                    <span className="sr-only">
                                        Open user menu
                                    </span>
                                    <img
                                        className="w-8 h-8 rounded-full"
                                        src={auth?.currentUser?.photoURL}
                                        alt="user photo"
                                    />
                                </button>
                                {/* user dashboard */}
                                <div
                                    className="hidden  z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 "
                                    id="dropdown"
                                    // style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(1054.4px, 970.4px, 0px);"
                                    style={{
                                        position: "absolute",
                                        inset: "auto auto 0px 0px",
                                        margin: "0px",
                                        // transform: translate3d(
                                        //  1054.4px, 970.4px, 0px
                                        // )",

                                        transform:
                                            "translate3d( 1054.4px, 970.4px, 0px)",
                                    }}
                                    data-popper-reference-hidden=""
                                    data-popper-escaped=""
                                    data-popper-placement="top">
                                    <div className="py-3 px-4">
                                        <span className="block text-sm text-gray-900 dark:text-white">
                                            Bonnie Green
                                        </span>
                                        <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                                            name@flowbite.com
                                        </span>
                                    </div>
                                    <ul
                                        className="py-1"
                                        aria-labelledby="dropdown">
                                        <li>
                                            <Link
                                                to="#"
                                                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                                Settings
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                                Earnings
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                                Sign out
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        ) : (
                            <div>
                                <button
                                    type="button"
                                    class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                    Login
                                </button>
                                <button
                                    type="button"
                                    class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                    Sign Up
                                </button>
                            </div>
                        )}

                        <button
                            data-collapse-toggle="mobile-menu-2"
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="mobile-menu-2"
                            aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"></path>
                            </svg>
                            <svg
                                className="hidden w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                        id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <Link
                                    to="/"
                                    className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                                    aria-current="page">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="#"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    Manage Items
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="#"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    Add Items
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="#"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    My Items
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="blog"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;

import { Link, NavLink, useNavigate } from "react-router-dom";
import auth from "../../firebaseConfig";
import "./navbar.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useAlert } from "react-alert";
import { useState } from "react";

const NavBar = () => {
    const [user, loading] = useAuthState(auth);
    const alert = useAlert();

    const navigate = useNavigate();
    const logout = () => {
        signOut(auth);
        alert.info("Log out successfully");
        navigate("/");
    };
    const [openMenue, setOpenMenue] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);
    const mobileMenue = () => {
        setOpenMenue(!openMenue);
    };
    const showProfile = () => {
        setOpenProfile(!openProfile);
    };
    return (
        <div>
            <nav className="bg-teal-800 text-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-800">
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

                    <div className="relative flex items-center md:order-2">
                        {user?.emailVerified ? (
                            <>
                                <button
                                    type="button"
                                    class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                    onClick={logout}>
                                    Log Out
                                </button>

                                <button
                                    type="button"
                                    className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                    id="user-menu-button"
                                    aria-expanded="false"
                                    data-dropdown-toggle="dropdown"
                                    onClick={() => {
                                        showProfile();
                                    }}>
                                    <span className="sr-only">
                                        Open user menu
                                    </span>
                                    <img
                                        className="w-8 h-8 rounded-full"
                                        src={
                                            user.photoURL
                                                ? user.photoURL
                                                : "user.png"
                                        }
                                        alt="user photo"
                                    />
                                </button>

                                <div
                                    className={
                                        openProfile
                                            ? "z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 "
                                            : "hidden  z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 "
                                    }
                                    id="dropdown"
                                    // style={{
                                    //     position: "absolute",
                                    //     inset: "auto auto 0px 0px",
                                    //     margin: "0px",

                                    //     transform:
                                    //         "translate3d( 1054.4px, 970.4px, 0px)",
                                    // }}
                                    data-popper-reference-hidden=""
                                    data-popper-escaped=""
                                    data-popper-placement="top">
                                    <div className="py-3 px-4">
                                        <span className="block text-sm text-gray-900 dark:text-white">
                                            {user.displayName}
                                        </span>
                                        <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                                            {user.email}
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
                                    class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                    onClick={() => {
                                        navigate("/login");
                                    }}>
                                    Login
                                </button>
                                <button
                                    type="button"
                                    class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                    onClick={() => {
                                        navigate("/signup");
                                    }}>
                                    Sign Up
                                </button>
                            </div>
                        )}

                        <button
                            data-collapse-toggle="mobile-menu-2"
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="mobile-menu-2"
                            aria-expanded="false"
                            onClick={() => {
                                mobileMenue();
                            }}>
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={
                                    openMenue ? "hidden w-6 h-6" : "w-6 h-6"
                                }
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"></path>
                            </svg>
                            <svg
                                className={
                                    openMenue ? "w-6 h-6" : "hidden w-6 h-6"
                                }
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
                        className={
                            openMenue
                                ? "justify-between items-center w-full md:flex md:w-auto md:order-1"
                                : "hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                        }
                        id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 text-center md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            {user?.emailVerified ? (
                                <>
                                    <li>
                                        <NavLink
                                            to="/"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "mr-4 text-lime-500 font-bold md:mr-6"
                                                    : "mr-4 hover:underline md:mr-6"
                                            }>
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/manage-items"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "mr-4 text-lime-500 font-bold md:mr-6"
                                                    : "mr-4 hover:underline md:mr-6"
                                            }>
                                            Manage Items
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/add-item"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "mr-4 text-lime-500 font-bold md:mr-6"
                                                    : "mr-4 hover:underline md:mr-6"
                                            }>
                                            Add Item
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/my-items"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "mr-4 text-lime-500 font-bold md:mr-6"
                                                    : "mr-4 hover:underline md:mr-6"
                                            }>
                                            My Items
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/blogs"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "mr-4 text-lime-500 font-bold md:mr-6"
                                                    : "mr-4 hover:underline md:mr-6"
                                            }>
                                            Blogs
                                        </NavLink>
                                    </li>
                                </>
                            ) : (
                                <></>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;

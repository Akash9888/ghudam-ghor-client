import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebaseConfig";

import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useAlert } from "react-alert";
import { useState } from "react";

const NavBar = () => {
    const [user, loading] = useAuthState(auth);
    const alert = useAlert();

    const navigate = useNavigate();
    const location = useLocation();

    const logout = () => {
        signOut(auth);
        alert.info("Log out successfully");
        navigate("/");
    };
    const [openMenue, setOpenMenue] = useState(false);
    // const [openProfile, setOpenProfile] = useState(false);
    const mobileMenue = () => {
        setOpenMenue(!openMenue);
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
                                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 "
                                    onClick={logout}>
                                    Log Out
                                </button>
                            </>
                        ) : (
                            <div>
                                <button
                                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 "
                                    onClick={() => {
                                        navigate("/login");
                                    }}>
                                    Login
                                </button>

                                <button
                                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 "
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
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;

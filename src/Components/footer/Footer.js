import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    if (
        location.pathname === "/login" ||
        location.pathname === "/signup" ||
        location.pathname === "/reset"
    ) {
        return;
    }
    return (
        <div>
            <footer className="container mx-auto p-4 bg-teal-800  shadow md:px-6 md:py-8 dark:bg-gray-800">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to="/" className="flex items-center mb-4 sm:mb-0">
                        <img
                            src="https://i.ibb.co/N6Tb4ny/warehouse.png"
                            className="mr-3 h-8"
                            alt="ghudam ghor Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                            GudamGhor
                        </span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-normal text-white sm:mb-0 dark:text-gray-400">
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
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-white sm:text-center dark:text-gray-400">
                    © 2022 GudamGhor . All Rights Reserved.
                </span>
            </footer>
        </div>
    );
};

export default Footer;

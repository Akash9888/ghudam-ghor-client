import React, { useEffect, useState } from "react";
import ItemsTableBody from "../../Components/itemsTableBody/ItemsTableBody";
import auth from "../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "../../Components/loader/Loader";
import useFetch from "../../CustomHook/useFetch";

const MyItems = () => {
    const [user] = useAuthState(auth);
    const {
        data: myItems,
        loading,
        error,
    } = useFetch(`http://localhost:5000/api/products/filter/${user?.email}`);

    if (loading) {
        return <Loader />;
    }

    return (
        <div>
            <h1 className="text-center p-5">My Items</h1>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Product ID
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Product name
                            </th>

                            <th scope="col" class="px-6 py-3">
                                description
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Supplier
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price (unit)
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                {/* <span class="sr-only">Edit</span> */}
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {myItems?.map((item) => {
                            return (
                                <ItemsTableBody key={item._id} item={item} />
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyItems;

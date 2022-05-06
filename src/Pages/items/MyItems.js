import React, { useEffect, useState } from "react";
import ItemsTableBody from "../../Components/itemsTableBody/ItemsTableBody";
import auth from "../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "../../Components/loader/Loader";
import useFetch from "../../CustomHooks/useFetch";
import { useAlert } from "react-alert";
import useDelete from "../../CustomHooks/useDelete";
import Pagination from "../../Components/pagination/Pagination";

const MyItems = () => {
    console.log("MY items");
    const alert = useAlert();
    const [user] = useAuthState(auth);
    const {
        data: myItems,
        loading,
        error,
        reFetch,
        page,
    } = useFetch(`http://localhost:5000/api/products/filter/${user?.email}`);
    const { deleteRequest } = useDelete();

    // console.log("page count: " + pageCount);

    const deleteProduct = async (_id) => {
        const conf = window.confirm("Are you sure you want to delete?");
        if (conf) {
            console.log("deleteProduct");
            await deleteRequest(
                `http://localhost:5000/api/products/delete/${_id}`
            );
            await reFetch();
        }
    };
    const handlePageClick = () => {
        console.log("click page");
    };

    if (loading) {
        return <Loader />;
    }
    if (error) {
        alert.error(error.message);
    }

    return (
        <div className="container mx-auto  w-full  p-6 ">
            <h1 className="text-center text-2xl font-bold mt-2 m-5">
                My Items
            </h1>

            <div className="mx-auto">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-center text-gray-700 dark:text-gray-400">
                        <thead class="text-xs text-white uppercase bg-gray-800 dark:bg-gray-700 dark:text-gray-400">
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
                                    <ItemsTableBody
                                        key={item._id}
                                        item={item}
                                        deleteProduct={deleteProduct}
                                    />
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="p-6">
                    <Pagination handlePageClick={handlePageClick} />
                </div>
            </div>
        </div>
    );
};

export default MyItems;

import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import Loader from "../../Components/loader/Loader";
import useFetch from "../../CustomHooks/useFetch";
import useUpdate from "../../CustomHooks/useUpdate";

const SingleInventory = () => {
    let params = useParams();
    const alert = useAlert();
    console.log(params);

    const {
        data: item,
        loading,
        error,
    } = useFetch(
        `http://localhost:5000/api/products/filter/single/${params.id}`
    );
    console.log(params.id);
    console.log(item);
    const { data, loading: loading2, error: error2, update } = useUpdate();

    const add = () => {
        console.log(item[0].quantity + 1);
        item[0].quantity = item[0].quantity + 1;
        update(
            `http://localhost:5000/api/products/update/${params.id}`,
            item[0]
        );
    };
    const remove = () => {
        console.log("remove");
        if (item[0].quantity - 1 <= 0) {
            item[0].quantity = 0;
        } else {
            item[0].quantity = item[0].quantity - 1;
        }

        update(
            `http://localhost:5000/api/products/update/${params.id}`,
            item[0]
        );
    };
    if (loading) {
        return <Loader />;
    }
    if (error) {
        alert.error(error.message);
    }
    return (
        <div>
            {item?.map((it) => {
                return (
                    <div className="flex flex-col items-center text-center bg-white rounded-lg border shadow-md md:h-[320px] overflow-hidden md:flex-row md:max-w-xl md:text-left hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img
                            className="object-contain w-[100%] h-[150px] rounded-t-lg md:h-70 md:w-40 md:rounded-none md:rounded-l-lg"
                            src={it?.photo}
                            alt=""
                        />
                        <div className="flex flex-col justify-between p-4  leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {it?.productName}
                            </h5>
                            <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                                {it?.description}
                            </p>
                            <div className="mb-2 flex justify-between items-center">
                                <span className="text-xl  text-gray-900 dark:text-white">
                                    Price:
                                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                                        ৳{it?.price}
                                    </span>
                                </span>
                                <span className="text-xl  text-gray-900 dark:text-white">
                                    Quantity:
                                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                                        {it?.quantity}
                                    </span>
                                </span>
                            </div>
                            <h1 className="mb-2 text-xl   text-gray-900 dark:text-white">
                                Supplier:{" "}
                                <span className="text-xl font-bold text-gray-900 dark:text-white">
                                    {it?.supplier}
                                </span>
                            </h1>
                            <div className="flex justify-center items-center">
                                <button
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={() => {
                                        remove(item._id);
                                    }}>
                                    Delivered
                                </button>
                                <button
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={() => {
                                        add(item._id);
                                    }}>
                                    Add Product
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default SingleInventory;

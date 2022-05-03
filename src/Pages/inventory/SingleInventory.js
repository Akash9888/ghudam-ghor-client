import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../Components/loader/Loader";

const SingleInventory = () => {
    let params = useParams();
    console.log(params.id);

    const [item, setItem] = useState([]);
    const [showLoader, setShowLoader] = useState(true);
    const axios = require("axios");
    useEffect(() => {
        axios
            .get(
                `http://localhost:5000/api/products/filter/single/${params.id}`
            )
            .then(function (response) {
                setItem(response.data[0]);
                console.log(response.data[0]);
                setShowLoader(!showLoader);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, []);
    const add = () => {
        console.log("add");
    };
    const remove = () => {
        console.log("remove");
    };
    return (
        <div>
            {showLoader && <Loader />}
            <div class="flex flex-col items-center text-center bg-white rounded-lg border shadow-md md:h-[320px] overflow-hidden md:flex-row md:max-w-xl md:text-left hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img
                    class="object-contain w-[100%] h-[150px] rounded-t-lg md:h-70 md:w-40 md:rounded-none md:rounded-l-lg"
                    src={item.photo}
                    alt=""
                />
                <div class="flex flex-col justify-between p-4  leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.productName}
                    </h5>
                    <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">
                        {item.description}
                    </p>
                    <div class="mb-2 flex justify-between items-center">
                        <span class="text-xl  text-gray-900 dark:text-white">
                            Price:
                            <span className="text-xl font-bold text-gray-900 dark:text-white">
                                ৳{item.price}
                            </span>
                        </span>
                        <span class="text-xl  text-gray-900 dark:text-white">
                            Quantity:
                            <span className="text-xl font-bold text-gray-900 dark:text-white">
                                {item.quantity}
                            </span>
                        </span>
                    </div>
                    <h1 className="mb-2 text-xl   text-gray-900 dark:text-white">
                        Supplier:{" "}
                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                            {item.supplier}
                        </span>
                    </h1>
                    <div class="flex justify-center items-center">
                        <button
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={() => {
                                remove(item._id);
                            }}>
                            Delivered
                        </button>
                        <button
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={() => {
                                add(item._id);
                            }}>
                            Add Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleInventory;

import React, { useRef, useState } from "react";
import useAdd from "../../CustomHooks/useAdd";
import Loader from "../../Components/loader/Loader";
import { useAlert } from "react-alert";
import auth from "../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

const AddItem = () => {
    const [user] = useAuthState(auth);
    console.log(user.email);
    const { loading, error, data, setItem } = useAdd();

    const alert = useAlert();
    const nameRef = useRef("");
    const supplierRef = useRef("");
    const priceRef = useRef(0);
    const quantityRef = useRef(0);
    const descRef = useRef("");
    const photoRef = useRef("");

    const item = {};

    if (loading) {
        return <Loader />;
    }
    if (error) {
        alert.error(error.message);
    }
    if (data) {
        alert.success("Item added successfully");
    }
    const addItem = (e) => {
        e.preventDefault();
        console.log("product addedd");
        item.productName = nameRef.current.value;
        item.supplier = supplierRef.current.value;
        item.price = priceRef.current.value;
        item.quantity = quantityRef.current.value;
        item.description = descRef.current.value;
        item.photo = photoRef.current.value;
        item.email = user?.email;
        console.log(item);
        setItem(item);
        console.log("set");
    };
    return (
        <div className="container mx-auto  w-full md:w-[50%]  p-2 ">
            <h1 className="text-center text-2xl font-bold m-5 mt-2">
                Add item
            </h1>

            <form className="border p-6" onSubmit={addItem}>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Product Name
                    </label>
                    <input
                        type="text"
                        ref={nameRef}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Pran mango juice"
                        required="true"
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Supplier
                    </label>
                    <input
                        type="text"
                        ref={supplierRef}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required="true"
                        placeholder="Pran Bangladesh Ltd."
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Phoro Url
                    </label>
                    <input
                        type="text"
                        ref={photoRef}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required="true"
                        placeholder="http://abcd.png"
                    />
                </div>
                <div className="mb-6 flex justify-between space-x-1 ">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Price
                        </label>
                        <input
                            type="number"
                            ref={priceRef}
                            className="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required="true"
                            placeholder="212"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Quantity
                        </label>
                        <input
                            type="number"
                            ref={quantityRef}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required="true"
                            placeholder="1000"
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                        Product Description
                    </label>
                    <textarea
                        rows="2"
                        ref={descRef}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Product description"></textarea>
                </div>

                <div className="text-center">
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Add Product
                        </span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddItem;

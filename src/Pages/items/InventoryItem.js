import React, { useRef } from "react";
import { useAlert } from "react-alert";
import { Link, useParams } from "react-router-dom";
import Loader from "../../Components/loader/Loader";
import useFetch from "../../CustomHooks/useFetch";
import useUpdate from "../../CustomHooks/useUpdate";

const InventoryItem = () => {
    let params = useParams();
    const alert = useAlert();
    const amountRef = useRef(0);
    let item = {};
    const updateUrl = `https://fierce-forest-36458.herokuapp.com/api/products/update/${params.id}`;

    const { data, loading, error } = useFetch(
        `https://fierce-forest-36458.herokuapp.com/api/products/filter/single/${params.id}`
    );
    const {
        data: upData,
        loading: loading2,
        error: error2,
        update,
    } = useUpdate();
    if (loading || loading2) {
        return <Loader />;
    }
    if (error) {
        alert.error(error.message);
    }
    if (error2) {
        alert.error(error2.message);
    }
    if (data) {
        item = data[0];
    }
    const reStock = (e) => {
        e.preventDefault();
        let cnt = item.quantity;

        let newAmount = parseInt(amountRef.current.value);

        newAmount += item.quantity;

        item.quantity = newAmount;

        update(updateUrl, item);
    };
    const delivered = () => {
        if (item.quantity > 0) {
            let cnt = item.quantity;

            cnt--;
            item.quantity = cnt;
            update(updateUrl, item);
        } else {
            alert.error("Allready out stock!");
        }
    };

    return (
        <div className="container mx-auto mt-10 mb-10  w-full md:w-[50%]  p-2 ">
            <div className="p-1 flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img
                    className="object-cover w-full h-60 rounded-t-lg md:h-auto md:w-60 md:rounded-none md:rounded-l-lg"
                    src={item?.photo}
                    alt=""
                />

                <div className="row text-center ">
                    <div>
                        <h4 className="text-lg font-medium mt-2">
                            {item?.productName}
                        </h4>
                        <div className="m-2">
                            <hr />
                            <p>{item?.description}</p>
                            <hr />
                        </div>
                        <h3 className="text-base font-medium">
                            Supplier: {item?.supplier}
                        </h3>
                        <div className="flex justify-around m-3">
                            <h3 className="text-base font-medium">
                                Price: {item?.price}
                            </h3>
                            <h3 className="text-base font-medium">
                                Quantity: {item?.quantity}
                            </h3>
                        </div>
                    </div>
                    <div className="text-center mt-1">
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                            <span
                                className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                                disabled={item?.quantity == 0 ? true : false}
                                // disabled={this.input.value?"true":""}
                                onClick={delivered}>
                                Delivered
                            </span>
                        </button>
                    </div>
                </div>
            </div>{" "}
            <div className="mt-5  bg-white rounded-lg border shadow-md  md:max-w-xl ">
                <form className="p-2" onSubmit={reStock}>
                    <div className="flex justify-center  items-center space-x-5">
                        <div>
                            <input
                                type="number"
                                ref={amountRef}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="new quantity"
                                required={true}
                            />
                        </div>

                        <div>
                            <button className="relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Re-stock
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="text-center pt-5">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        <Link to="/manage-items">Manage Inventories</Link>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default InventoryItem;

import React from "react";
import { useNavigate } from "react-router-dom";

const SingleProducts = (props) => {
    const navigate = useNavigate();

    const { photo, productName, description, price, quantity, _id, supplier } =
        props.item;
    const inventoryPage = (_id) => {
        navigate(`/inventory/${_id}`);
    };
    return (
        <div>
            {/* <div class="flex flex-col items-center text-center bg-white rounded-lg border shadow-md md:h-[320px] overflow-hidden md:flex-row md:max-w-xl md:text-left hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img
                    class="object-contain w-[100%] h-[150px] rounded-t-lg md:h-70 md:w-40 md:rounded-none md:rounded-l-lg"
                    src={photo}
                    alt=""
                />
                <div class="flex flex-col justify-between p-4  leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {productName}
                    </h5>
                    <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">
                        {description}
                    </p>
                    <div class="mb-2 flex justify-between items-center">
                        <span class="text-xl  text-gray-900 dark:text-white">
                            Price:
                            <span className="text-xl font-bold text-gray-900 dark:text-white">
                                ৳{price}
                            </span>
                        </span>
                        <span class="text-xl  text-gray-900 dark:text-white">
                            Quantity:
                            <span className="text-xl font-bold text-gray-900 dark:text-white">
                                {quantity}
                            </span>
                        </span>
                    </div>
                    <h1 className="mb-2 text-xl   text-gray-900 dark:text-white">
                        Supplier:{" "}
                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                            {supplier}
                        </span>
                    </h1>
                    <div class="flex justify-center items-center">
                        <button
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={() => {
                                inventoryPage(_id);
                            }}>
                            Update Stock
                        </button>
                    </div>
                </div>
            </div> */}
            <div className="text-center  drop-shadow-lg">
                <div>
                    <img
                        className="object-contain w-full h-[250px]"
                        src={photo}
                        alt="product"
                    />
                    <h1> {productName}</h1>
                    <p> {description}</p>
                    <h6>Quantity: {quantity}</h6>
                    <h6>Price: {price}</h6>
                    <h6>Supplier: {supplier}</h6>
                    <button className="text-white font-semibold w-full h-[40px] uppercase bg-red-500">
                        Update Stock
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleProducts;

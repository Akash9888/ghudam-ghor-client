import React from "react";
import { useNavigate } from "react-router-dom";

const HomeProducts = (props) => {
    const navigate = useNavigate();

    const { photo, productName, description, price, quantity, _id, supplier } =
        props.item;
    const inventoryPage = (_id) => {
        navigate(`/inventory-item/${_id}`);
        // navigate(`/inventory/${_id}`);
    };
    return (
        <div className="container">
            <div className=" rounded-lg border shadow-md text-center">
                <img
                    style={{
                        width: "100%",
                        height: "200px",
                    }}
                    src={photo}
                    alt=""
                />
                <div className="">
                    <div className="row">
                        <div className="card-title">
                            <h4 className="text-lg font-medium mt-2">
                                {productName}
                            </h4>
                            <div className="m-2">
                                <hr />
                                <p>{description}</p>
                                <hr />
                            </div>
                            <h3 className="text-base font-medium">
                                Supplier: {supplier}
                            </h3>
                            <div className="flex justify-around m-3">
                                <h3 className="text-base font-medium">
                                    Price: {price}
                                </h3>
                                <h3 className="text-base font-medium">
                                    Quantity: {quantity}
                                </h3>
                            </div>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        onClick={() => {
                            inventoryPage(_id);
                        }}>
                        Update Stock
                    </button>

                    {/* */}
                </div>
            </div>
        </div>
    );
};

export default HomeProducts;

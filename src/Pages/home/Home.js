import { useEffect, useState } from "react";
import SingleProducts from "../../Components/product-card/SingleProducts";

const Home = () => {
    const [items, setItems] = useState([]);
    const axios = require("axios");
    useEffect(() => {
        axios
            .get("products.json")
            .then(function (response) {
                setItems(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, []);

    return (
        <div>
            <div
                id="animation-carousel"
                className="relative"
                data-carousel="slide">
                <div className="overflow-hidden relative h-48 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
                    <div
                        className="hidden duration-200 ease-linear absolute inset-0 transition-all transform"
                        data-carousel-item="">
                        <img
                            src="https://i.ibb.co/rFkp6Rr/pexels-tiger-lily-4483775.jpg"
                            className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                            alt="..."
                        />
                    </div>

                    <div
                        className="duration-200 ease-linear absolute inset-0 transition-all transform -translate-x-full z-10"
                        data-carousel-item="active">
                        <img
                            src="https://i.ibb.co/XLYTDp9/pexels-pixabay-434311.jpg"
                            className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                            alt="..."
                        />
                    </div>

                    <div
                        className="duration-200 ease-linear absolute inset-0 transition-all transform translate-x-0 z-20"
                        data-carousel-item="">
                        <img
                            src="https://i.ibb.co/rb4kRh8/pexels-lagos-food-bank-initiative-8069576.jpg"
                            className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                            alt="..."
                        />
                    </div>
                </div>

                <button
                    type="button"
                    className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                    data-carousel-prev="">
                    <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 19l-7-7 7-7"></path>
                        </svg>
                        <span className="hidden">Previous</span>
                    </span>
                </button>
                <button
                    type="button"
                    className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                    data-carousel-next="">
                    <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 5l7 7-7 7"></path>
                        </svg>
                        <span className="hidden">Next</span>
                    </span>
                </button>
            </div>
            <div className="container mx-auto p-6">
                <h1 className="text-center text-xl py-4">Inventory Items</h1>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {items.map((item) => {
                        return <SingleProducts key={item._id} item={item} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Home;

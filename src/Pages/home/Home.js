import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import Loader from "../../Components/loader/Loader";

import axios from "axios";
import HomeCarousel from "./HomeCarousel";
import HomeProducts from "./HomeProducts";
import HomeChart from "./HomeChart";
import Partner from "./Partner";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const alert = useAlert();

    useEffect(() => {
        setLoading(true);

        axios
            .get(
                `https://fierce-forest-36458.herokuapp.com/api/products/fetch/home`,
                {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                }
            )
            .then((response) => setItems(response.data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    // if (loading) {
    //     return <Loader />;
    // }
    if (error) {
        alert.error(error.message);
    }

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <HomeCarousel />
                    <div className="container mx-auto p-6">
                        <h1 className="text-center text-2xl font-bold m-5">
                            Inventory Items
                        </h1>

                        <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
                            {items?.map((item) => {
                                return (
                                    <HomeProducts key={item._id} item={item} />
                                );
                            })}
                        </div>
                        <div className="text-center pt-5">
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    <Link to="/manage-items">
                                        Manage Inventories
                                    </Link>
                                </span>
                            </button>
                        </div>
                    </div>
                    <HomeChart />
                    <Partner />
                </>
            )}
        </div>
    );
};

export default Home;

import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import Loader from "../../Components/loader/Loader";
import Pagination from "../../Components/pagination/Pagination";
import SingleProducts from "../../Components/product-card/SingleProducts";
import useFetch from "../../CustomHooks/useFetch";
import axios from "axios";
import HomeCarousel from "./HomeCarousel";
import HomeProducts from "./HomeProducts";

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState(null);
    const [error, setError] = useState(null);

    console.log(localStorage.getItem("accessToken"));
    const alert = useAlert();

    useEffect(() => {
        setLoading(true);

        axios
            .get(`http://localhost:5000/api/products/fetch/home`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            })
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
                    </div>
                </>
            )}
        </div>
    );
};

export default Home;

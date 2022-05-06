import { useState } from "react";
import axios from "axios";

const useAdd = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const setItem = (item) => {
        setLoading(true);
        axios
            .post("http://localhost:5000/api/products/add", item, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            })
            .then((response) => setData(response.data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    };

    return { loading, data, error, setItem };
};

export default useAdd;

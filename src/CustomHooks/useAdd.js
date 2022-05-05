import { useEffect, useState } from "react";
import axios from "axios";

const useAdd = (url, product) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .post(url, update, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            })
            .then((response) => setData(response.data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [url]);

    return { loading, data, error };
};

export default useAdd;

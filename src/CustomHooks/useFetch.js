import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        axios
            .get(url, {
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
    const reFetch = () => {
        console.log("reFetch");
        axios
            .get(url)
            .then((response) => setData(response.data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    };

    return { loading, data, error, reFetch };
};

export default useFetch;

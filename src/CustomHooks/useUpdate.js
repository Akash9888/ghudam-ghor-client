import axios from "axios";
import { useEffect, useState } from "react";

const useUpdate = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const update = (url, product) => {
        setLoading(true);
        axios
            .put(url, product)
            .then((response) => setData(response.data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    };

    // useEffect(() => {
    //     setLoading(true);
    //     axios
    //         .get(url)
    //         .then((response) => setLoading(response.data))
    //         .catch((error) => setError(error))
    //         .finally(() => setLoading(false));
    // }, [url]);

    return { data, loading, error, update };
};

export default useUpdate;

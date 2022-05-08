import axios from "axios";
import { useEffect, useState } from "react";

const useUpdate = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const update = (url, item) => {
        setLoading(true);
        axios
            .put(url, item, {
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

    return { data, loading, error, update };
};

export default useUpdate;

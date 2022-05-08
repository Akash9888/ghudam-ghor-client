import { useEffect, useState } from "react";
import axios from "axios";

const useCount = (url) => {
    const [loading, setLoading] = useState(false);
    const [pageCount, setPageCount] = useState(null);
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
            .then((response) => {
                let count = response.data.count;
                // console.log("count: " + count);
                const pages = Math.ceil(count / 10);
                setPageCount(pages);
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [url]);

    return { pageCount };
};

export default useCount;

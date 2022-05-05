import axios from "axios";
import { useState } from "react";

const useDelete = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteRequest = (url) => {
        setLoading(true);
        axios
            .delete(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            })
            .then((response) => {
                setData(response);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };
    return { data, loading, error, deleteRequest };
};

export default useDelete;

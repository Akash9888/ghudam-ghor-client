import { useState } from "react";
import axios from "axios";

const useToken = (url, email) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const getToken = (url, email) => {
        console.log("email", email);
        setLoading(true);
        // axios
        //     .post("localhost:5000/api/users/createuser")
        //     .then((response) => {
        //         setError(response);
        //         console.log(response);
        //     })
        //     .catch((error) => {
        //         setError(error);
        //         console.log(error.message);
        //     })
        //     .finally(() => {
        //         setLoading(false);
        //         console.log("final");
        //     });
        axios
            .post(url, {
                firstName: "Fred",
                lastName: "Flintstone",
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return { data, error, loading, getToken };
};

export default useToken;

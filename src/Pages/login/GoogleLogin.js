import axios from "axios";
import React from "react";
import { useAlert } from "react-alert";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../../Components/loader/Loader";
import auth from "../../firebaseConfig";

const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const alert = useAlert();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const getToken = async (email) => {
        const { data } = await axios.post(
            `https://fierce-forest-36458.herokuapp.com/api/users/createuser`,
            { email }
        );

        localStorage.setItem("accessToken", data);

        alert.success("Successfully connected with google");

        navigate(from, { replace: true });
    };

    if (error) {
        alert.error(error.message);
    }
    if (loading) {
        <Loader />;
    }
    if (user) {
        getToken(user?.user?.email);
        // alert.success("Successfully connected with google");
        // navigate(from, { replace: true });
    }
    return (
        <div>
            <button
                class="w-full mt-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                onClick={() => {
                    signInWithGoogle();
                }}>
                Sign in with Google
            </button>
        </div>
    );
};

export default GoogleLogin;

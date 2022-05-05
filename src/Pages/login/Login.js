import React, { useRef } from "react";
import { useAlert } from "react-alert";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../../Components/loader/Loader";
import useToken from "../../CustomHooks/useToken";
import auth from "../../firebaseConfig";
import axios from "axios";
import GoogleLogin from "./GoogleLogin";

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    // const { getToken, data, loading: newLoading, error: newError } = useToken();
    const alert = useAlert();
    const navigate = useNavigate();
    const location = useLocation();
    const emailRef = useRef("");
    const passRef = useRef("");
    let from = location.state?.from?.pathname || "/";

    const getToken = async (email) => {
        const { data } = await axios.post(
            `http://localhost:5000/api/users/createuser`,
            { email }
        );

        localStorage.setItem("accessToken", data);

        alert.success("User login successfully");

        navigate(from, { replace: true });
    };
    if (error) {
        alert.error(error.message);
    }
    if (loading) {
        <Loader />;
    }

    if (user) {
        if (!user?.user?.emailVerified) {
            alert.info("Please verify your email first then try agin");
        } else {
            getToken(user?.user?.email);
        }
    }

    const login = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;

        await signInWithEmailAndPassword(email, pass);
    };
    return (
        <div>
            <div className="container mx-auto p-6">
                <form onSubmit={login}>
                    <div className="mb-6">
                        <label
                            for="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            ref={emailRef}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="name@flowbite.com"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            for="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Your password
                        </label>
                        <input
                            type="password"
                            id="password"
                            ref={passRef}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        lOGIN
                    </button>
                    <button
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => {
                            navigate("/signup");
                        }}>
                        sIGNUP
                    </button>
                    <button
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => {
                            navigate("/reset");
                        }}>
                        rest
                    </button>
                </form>
            </div>
            <div className="container mx-auto p-6">
                <GoogleLogin />
            </div>
        </div>
    );
};

export default Login;

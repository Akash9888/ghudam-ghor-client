import React, { useRef } from "react";
import { useAlert } from "react-alert";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loader from "../../Components/loader/Loader";

import auth from "../../firebaseConfig";
import axios from "axios";
import GoogleLogin from "./GoogleLogin";
const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const alert = useAlert();
    const navigate = useNavigate();
    const location = useLocation();

    const emailRef = useRef("");
    const passRef = useRef("");
    let from = location.state?.from?.pathname || "/";

    const getToken = async (email) => {
        const { data } = await axios.post(
            `https://fierce-forest-36458.herokuapp.com/api/users/createuser`,
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
        <div className=" container mx-auto w-full md:w-[60%]  p-2">
            <div className="flex justify-center items-center my-5">
                <div className="flex-1 p-4 max-w-sm md:max-w-[400px] bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form className="" onSubmit={login}>
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                            Sign in
                        </h5>
                        <div className="mt-2">
                            <label
                                for="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Your email
                            </label>
                            <input
                                type="email"
                                name="email"
                                ref={emailRef}
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="example@gmail.com"
                                required={true}
                            />
                        </div>
                        <div className="mt-2">
                            <label
                                for="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Your password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                ref={passRef}
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required={true}
                            />
                        </div>
                        <div className="  mt-2 flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="remember"
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                        required=""
                                    />
                                </div>
                                <label
                                    for="remember"
                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Remember me
                                </label>
                            </div>
                            <Link
                                to="/reset"
                                className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">
                                Lost Password?
                            </Link>
                        </div>
                        <button
                            type="submit"
                            className="w-full mt-2.5 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                            Login
                        </button>
                    </form>
                    <div>
                        <p className=" text-center">OR</p>
                    </div>
                    <GoogleLogin />

                    <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered?{" "}
                        <Link
                            to="/signup"
                            className="text-blue-700 hover:underline dark:text-blue-500">
                            Create account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

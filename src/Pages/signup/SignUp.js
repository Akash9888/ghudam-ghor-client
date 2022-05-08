import React, { useRef } from "react";
import { useAlert } from "react-alert";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebaseConfig";

const SignUp = () => {
    const emailRef = useRef("");
    const passRef = useRef("");
    const navigate = useNavigate();
    const alert = useAlert();
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true,
        });

    if (error) {
        alert.error(error.message);
    }
    if (user) {
        alert.success("Account created successfully");
        navigate("/login");
    }

    const signup = (e) => {
        e.preventDefault();
        console.log(emailRef.current.value, passRef.current.value);
        createUserWithEmailAndPassword(
            emailRef.current.value,
            passRef.current.value
        );
    };
    return (
        <div className=" container mx-auto w-full   md:w-[60%]  p-2">
            <div className="flex justify-center item-center my-10">
                <div className="flex-1 p-4 max-w-sm md:max-w-[400px] bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form className="" onSubmit={signup}>
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                            Sign Up
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

                        <button
                            type="submit"
                            class="w-full mt-2.5 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                            Sign Up
                        </button>

                        <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="text-blue-700 hover:underline dark:text-blue-500">
                                Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

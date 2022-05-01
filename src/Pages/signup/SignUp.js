import React, { useRef } from "react";
import { useAlert } from "react-alert";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
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
        <div>
            <form onSubmit={signup}>
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
                        required=""
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
                        ref={passRef}
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                    />
                </div>

                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    signup
                </button>
                <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => {
                        navigate("/login");
                    }}>
                    login
                </button>
            </form>
        </div>
    );
};

export default SignUp;

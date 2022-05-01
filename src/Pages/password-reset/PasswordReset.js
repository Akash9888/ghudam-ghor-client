import React, { useRef } from "react";
import { useAlert } from "react-alert";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Loader from "../../Components/loader/Loader";
import auth from "../../firebaseConfig";

const PasswordReset = () => {
    const [sendPasswordResetEmail, sending, error] =
        useSendPasswordResetEmail(auth);
    const emailRef = useRef("");
    const navigate = useNavigate();
    const alert = useAlert();
    if (error) {
        alert.error(error.message);
    }
    if (sending) {
        return <Loader />;
    }
    const reset = async (e) => {
        e.preventDefault();
        await sendPasswordResetEmail(emailRef.current.value);
        alert.success("Password reset link sent to your email successfully");
        navigate("/login");
    };
    return (
        <div>
            <form onSubmit={reset}>
                <div class="mb-6">
                    <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Your email
                    </label>
                    <input
                        type="email"
                        ref={emailRef}
                        id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@flowbite.com"
                        required="true"
                    />
                </div>

                <button
                    type="submit"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Send Link
                </button>

                <button
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => {
                        navigate("/login");
                    }}>
                    log in
                </button>
            </form>
        </div>
    );
};

export default PasswordReset;

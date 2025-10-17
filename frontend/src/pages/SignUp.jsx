import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { Button } from 'flowbite-react';

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.username || !formData.email || !formData.password) {
            return setErrorMessage("Please fill out all fields.");
        }

        if (formData.password.length < 6) {
            return setErrorMessage("Password must be at least 6 characters long.");
        }

        try {
            setLoading(true);
            setErrorMessage(null);
            const res = await axios.post("/api/auth/signup", formData, {
                headers: { "Content-Type": "application/json" },
            });

            if (res.data.success === false) {
                return setErrorMessage(res.data.message || "Signup failed.");
            }

            navigate("/sign-in");
            setFormData({ username: "", email: "", password: "" });
        } catch (error) {
            setErrorMessage(
                error.response?.data?.message || "Something went wrong. Try again later."
            );
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignup = () => {
        window.location.href = "/api/auth/google";
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 px-6 py-12">
            <div className="w-full max-w-3xl bg-gray-900/60 backdrop-blur-lg rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-gray-700">
                {/* Left Section */}
                <div className="flex-1  flex flex-col justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
                    <Link to="/" className="text-4xl font-bold dark:text-white">
                        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg">
                            Ravi’s
                        </span>{" "}
                        Blog
                    </Link>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                        Create an account using your email and password.
                    </p>
                </div>

                {/* Right Section - Form */}
                <div className="flex-1 bg-gray-900 p-8">
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <label htmlFor="username" className="mb-1 text-sm font-medium">
                                Your username
                            </label>
                            <input
                                type="text"
                                id="username"
                                placeholder="Username"
                                onChange={handleChange}
                                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="mb-1 text-sm font-medium">
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="name@company.com"
                                onChange={handleChange}
                                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="password" className="mb-1 text-sm font-medium">
                                Your password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                onChange={handleChange}
                                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full mt-2 px-4 py-2 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg hover:shadow-lg disabled:opacity-70 flex items-center justify-center"
                        >
                            {loading ? (
                                <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5 mr-3"></span>
                            ) : null}
                            {loading ? "Signing Up..." : "Sign Up"}
                        </button>
                    </form>

                    {/* Google Sign Up */}

                    <Button
                        onClick={handleGoogleSignup}
                        outline
                        color="gray"
                        className="w-full mt-4 px-4 py-2 flex items-center justify-center gap-2"
                    >
                        <FcGoogle size={20} />
                        Continue with Google
                    </Button>

                    {/* Already have account */}
                    <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                        Have an account?{" "}
                        <Link to="/sign-in" className="text-purple-500 hover:underline">
                            Sign In
                        </Link>
                    </p>

                    {/* Error Message */}
                    {errorMessage && (
                        <div className="mt-4 px-4 py-2 bg-red-100 text-red-700 rounded-lg dark:bg-red-700 dark:text-red-100">
                            {errorMessage}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SignUp;

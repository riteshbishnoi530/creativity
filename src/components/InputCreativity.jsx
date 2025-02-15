"use client";
import { useState } from "react";
import Swal from 'sweetalert2'

const InputCreativity = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Successfully submitted",
            icon: "success",
        });

        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        });
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-4xl text-center font-bold mb-16 max-md:mb-10 max-md:text-3xl">Form validation</h1>
                <form onSubmit={handleSubmit}>
                    {/* First Name */}
                    <div className="relative mb-5">
                        <input
                            required
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="peer w-full rounded-md px-3 py-3 ring ring-gray-200 focus:ring-blue-200 outline-none"
                            placeholder=" "
                        />
                        <label
                            htmlFor="firstName"
                            className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-1/2 -translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1"
                        >
                            First Name
                        </label>
                    </div>

                    {/* Last Name */}
                    <div className="relative mb-5">
                        <input
                            required
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="peer w-full rounded-md px-3 py-3 ring ring-gray-200 focus:ring-blue-300 outline-none"
                            placeholder=" "
                        />
                        <label
                            htmlFor="lastName"
                            className="absolute left-3 top-0 text-sm transition-all peer-placeholder-shown:top-1/2 -translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1"
                        >
                            Last Name
                        </label>
                    </div>

                    {/* Email */}
                    <div className="relative mb-5">
                        <input
                            required
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="peer w-full rounded-md px-3 py-3 ring ring-gray-200 focus:ring-blue-300 outline-none"
                            placeholder=" "
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-1/2 -translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1"
                        >
                            Email
                        </label>
                    </div>

                    {/* Password */}
                    <div className="relative mb-5">
                        <input
                            required
                            type="password"
                            minLength={8}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="peer w-full ring ring-gray-200 rounded-md px-3 py-3 focus:ring-blue-300 outline-none"
                            placeholder=" "
                        />
                        <label
                            htmlFor="password"
                            className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-1/2 -translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1"
                        >
                            Password
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default InputCreativity;
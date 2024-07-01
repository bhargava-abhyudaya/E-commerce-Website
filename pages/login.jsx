import React from "react";
import { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import { BiSolidShow } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { set } from "mongoose";

export default function login() {
    const [hidePass, setHidePass] = useState("password")
    const changePassState = () => {
        if (hidePass === "password") {
            setHidePass("text")
        } else {
            setHidePass("password")
        }
    }
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const handleChange = (e) => {
        if (e.target.name === "email") {
            setEmail(e.target.value)
        } else if (e.target.name === "password") {
            setPassword(e.target.value)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formBody = { email, password }
        let res = await fetch("/api/loginUser", {
            method: "POST",
            body: JSON.stringify(formBody),
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formBody)
        })
        res = await res.json()
        if (res.check) {
            localStorage.setItem("token", res.token)
            toast.success('Login Success', {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",

            });
            Router.push("/")
            setEmail("")
            setPassword("")
        }else if (res.message === "Invalid Credentials") {
            toast.error('Invalid Credintials ', {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",

            });
        }else if (res.message === "User not found") {
            toast.warning('Account not found!!! Create account?', {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",

            });

        }
    }
    return (
        <div className="md:-mt-18 bg-black">
            <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img className="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow" />
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                        Login to your account
                    </h2>
                    <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
                        Or {' '}
                        <Link href={"/signup"}
                            className="font-medium text-blue text-decoration-line: underline hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                            creatre a new account
                        </Link>
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="mt-8 sm:mx-auto sm:w-full sm:max-w-md" method="POST">






                    <div className="mt-6">
                        <label for="email" className="ml-5 block text-sm font-medium leading-5  text-gray-700">
                            Email address
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input onChange={handleChange} id="email" name="email" placeholder="user@example.com" type="email" required="" className="ml-5 text-black appearance-none block w-[40vh] md:w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5
                "/>
                            <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <label for="password" className="ml-5 block text-sm font-medium leading-5 text-gray-700">
                            Password
                        </label>
                        <div className="flex flex-wrap mt-1 rounded-md shadow-sm">
                            <input onChange={handleChange} id="password" name="password" type={hidePass} required="" className="text-black appearance-none ml-5 w-[35vh] md:w-[52vh] px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" /><BiSolidShow onClick={changePassState} className="text-2xl ml-3 my-auto" />
                        </div>
                    </div>

                    <div className="mt-6">
                        <span className="block w-full rounded-md shadow-sm">
                            <button type="submit" className="w-[40vh] md:w-full bg-white text-black ml-5 flex justify-center py-2 px-4 border border-transparent text-base font-medium rounded-md bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-black-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                Login
                            </button>
                        </span>
                    </div>


                </form>
            </div>
        </div>
    )
}
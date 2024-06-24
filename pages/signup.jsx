import Link from "next/link";
import React from "react";
import { BiSolidShow } from "react-icons/bi";
import { useState } from "react";
import Router from "next/router";

export default function signup() {
    const [hidePass, setHidePass] = useState("password")
    const changePassState = () => {
        if (hidePass === "password") {
            setHidePass("text")
        } else {
            setHidePass("password")
        }
    }
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const handleChange = (e) => {
        if (e.target.name === "name") {
            setName(e.target.value)
        } else if (e.target.name === "email") {
            setEmail(e.target.value)
        } else if (e.target.name === "password") {
            setPassword(e.target.value)
        }    
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formBody = {name,email,password}
        let res = await fetch("/api/createUser", {
            method: "POST",
            body: JSON.stringify(formBody),
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formBody)
        })
        res = await res.json()
        setName("")
        setEmail("")
        setPassword("") 
        Router.push("/login")
    }
    return (
        <div>
            <div className="-mt-20 md:-mt-16 min-h-screen bg-gray-50 flex flex-col justify-center sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img className="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow" />
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                        Create a new account
                    </h2>
                    <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
                        Or {' '}
                        <Link href={"/login"}
                            className="font-medium text-blue text-decoration-line: underline hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                            login to your account
                        </Link>
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="mt-8 sm:mx-auto sm:w-full sm:max-w-md" method="POST">
                


                    <div>
                        <label for="text" className="ml-5 block text-sm font-medium leading-5  text-gray-700">Name</label>
                        <input onChange={handleChange} id="name" name="name" placeholder="Enter your Name" type="text" required="" className="w-[40vh] text-black bg-white md:w-full rounded-lg block px-3 py-2 border ml-5 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"></input>

                    </div>



                    <div className="mt-6">
                        <label for="email" className="ml-5 block text-sm font-medium leading-5  text-gray-700">
                            Email address
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input id="email" onChange={handleChange} name="email" placeholder="user@example.com" type="email" required="" className="ml-5 text-black appearance-none block w-[40vh] md:w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5
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
                        <label for="password_confirmation" className="ml-5 block text-sm font-medium leading-5 text-gray-700">
                            Confirm Password
                        </label>
                        <div className="mt-1 rounded-md shadow-sm">
                            <input id="password_confirmation" name="password_confirmation" type="password" required="" className="text-black appearance-none block w-[40vh] ml-5 md:w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                        </div>
                    </div>

                    <div className="mt-6">
                        <span className="block w-full rounded-md shadow-sm">
                            <button type="submit" className="w-[40vh] md:w-full bg-white text-black ml-5 flex justify-center py-2 px-4 border border-transparent text-base font-medium rounded-md bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-black-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                Create account
                            </button>
                        </span>
                    </div>


                </form>
            </div>
        </div>
    )

}
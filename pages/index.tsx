import type {NextPage} from "next";
import Link from "next/link";
import React, {useContext, useState} from "react";
import UserContext from "context/UserContext";

const Home: NextPage = () => {
    const {login, errorMessage} = useContext(UserContext);
    const [email, setEmail] = useState<string>("");
    const [emailEmpty, setEmailEmpty] = useState<boolean>(false);
    const [passwordEmpty, setPasswordEmpty] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");

    const authenticate = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (email === "") {
            setEmailEmpty(true);
        }
        if (password === "") {
            setPasswordEmpty(true);
        }
        if (email !== "" && password !== "") {
            setEmailEmpty(false);
            setPasswordEmpty(false);
            login(email, password);
        }
    };

    return (
        <div className="bg-blue-500 h-screen flex justify-center items-center">
            <div className="rounded-2xl shadow-2xl p-14 bg-white mx-auto w-5/6 md:w-3/6 lg:w-2/6 h-5/6">
                <h4 className="font-semibold text-4xl text-center mb-6">Sign In</h4>
                {errorMessage !== "" ? (
                    <div
                        className="relative px-4 py-3 leading-normal text-red-700 bg-red-100 rounded-lg"
                        role="alert"
                    >
            <span className="absolute inset-y-0 left-0 flex items-center ml-4">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
              </svg>
            </span>
                        <p className="ml-6">{errorMessage}</p>
                    </div>
                ) : (
                    ""
                )}
                <form className="mt-6">
                    <div className="mb-5">
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            className={`${
                                emailEmpty ? "border-2 border-red-500" : ""
                            } focus:outline-none block w-full bg-gray-100 font-medium py-2.5 px-4 rounded-2xl placeholder-gray-500`}
                            aria-label="email"
                            placeholder="Username or email"
                        />
                        {emailEmpty ? (
                            <p className="text-red-500 text-xs mt-2 ml-4">
                                Please enter your email
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="mb-5">
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className={`${
                                passwordEmpty ? "border-2 border-red-500" : ""
                            } focus:outline-none block w-full bg-gray-100 font-medium py-2.5 px-4 rounded-2xl placeholder-gray-500`}
                            aria-label="password"
                            placeholder="Password"
                        />
                        {passwordEmpty ? (
                            <p className="text-red-500 text-xs mt-2 ml-4">
                                Please enter your password
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex items-center mb-5">
                        <input aria-label="remember" type="checkbox"/>
                        <h6 className="font-medium ml-4">Keep me signed in</h6>
                    </div>
                    <button
                        onClick={(e) => authenticate(e)}
                        className="block w-full bg-blue-500 rounded-full py-3 px-6 text-center font-medium text-white"
                    >
                        Sign In
                    </button>
                </form>
                <div className="flex justify-center my-6">
                    <h6 className="font-medium mr-4">New user?</h6>
                    <Link href={"/register"}>
                        <a className="text-blue-500 font-medium">Create an account</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;

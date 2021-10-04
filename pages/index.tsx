import type {NextPage} from "next";
import Link from "next/link";
import React, {useContext, useState} from "react";
import UserContext from "context/UserContext";
import Head from "next/head";

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
        <>
            <Head>
                <title>Login - VEER</title>
            </Head>
            <div className="bg-primary h-screen flex justify-center items-center">
                <div style={{width: "30rem"}} className="card shadow-2xl p-12 bg-base-200">
                    <h4 className="font-semibold text-4xl text-center mb-6">Sign In</h4>
                    {errorMessage !== "" ?
                        <div className="alert alert-error">
                            <div className="flex-1">
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                                    <path
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                    />
                                </svg>
                                <label className="ml-3">{errorMessage}</label>
                            </div>
                        </div> : ""}
                    <form className="mt-6 space-y-6">
                        <div className="form-control">
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                className={`${
                                    emailEmpty ? "input-error" : ""
                                } input input-bordered`}
                                aria-label="email"
                                placeholder="Username or email"
                            />
                            {emailEmpty ?
                                <label className="label">
                                    <span className="label-text-alt text-error">Please enter your email</span>
                                </label> : ""}
                        </div>
                        <div className="form-control">
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                className={`${
                                    passwordEmpty ? "input-error" : ""
                                } input input-bordered`}
                                aria-label="password"
                                placeholder="Password"
                            />
                            {passwordEmpty ?
                                <label className="label">
                                    <span className="label-text-alt text-error">Please enter your password</span>
                                </label> : ""}
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="checkbox checkbox-primary"/>
                            <h6 className="label-text ml-3">Keep me signed in</h6>
                        </div>
                        <button
                            onClick={(e) => authenticate(e)}
                            className="btn btn-primary w-full text-center font-medium"
                        >
                            Sign In
                        </button>
                    </form>
                    <div className="flex justify-between my-6">
                        <h6 className="font-medium text-sm mr-4">New user?</h6>
                        <Link href={"/register"}>
                            <a className="text-primary font-medium text-sm">Create an account</a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;

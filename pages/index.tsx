import type {NextPage} from 'next'
import Link from 'next/link'
import React, {useContext, useState} from 'react'
import UserContext from 'context/UserContext'

const Home: NextPage = () => {
    const {login} = useContext(UserContext)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const authenticate = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (email != '' || password != '') {
            login(email, password);
        }
    };

    return (
        <div className="bg-blue-500 h-screen flex justify-center items-center">
            <div className="rounded-2xl shadow-2xl p-14 bg-white mx-auto w-5/6 md:w-3/6 lg:w-2/6 h-5/6">
                <h4 className="font-semibold text-4xl text-center">Sign In</h4>
                <div className="flex justify-center my-6">
                    <h6 className="font-medium mr-4">New user?</h6>
                    <Link href={"/register"}>
                        <a className="text-blue-500 font-medium">Create an account</a>
                    </Link>
                </div>
                <form>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className="focus:outline-none block w-full bg-gray-100 mb-5 font-medium py-2.5 px-4 rounded-2xl placeholder-gray-500"
                        aria-label="email" placeholder="Username or email"/>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="focus:outline-none block w-full bg-gray-100 mb-5 font-medium py-2.5 px-4 rounded-2xl placeholder-gray-500"
                        aria-label="password" placeholder="Password"/>
                    <div className="flex items-center mb-5">
                        <input aria-label="remember"
                               type="checkbox"/>
                        <h6 className="font-medium ml-4">Keep me signed in</h6>
                    </div>
                    <button
                        onClick={(e) => authenticate(e)}
                        className="block w-full bg-blue-500 rounded-full py-3 px-6 text-center font-medium text-white">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Home

import type {NextPage} from 'next'
import Link from 'next/link'

const Register: NextPage = () => {
    return (
        <>
            <div className="bg-blue-500 h-screen flex justify-center items-center">
                <div className="rounded-2xl shadow-2xl p-14 bg-white mx-auto w-5/6 md:w-3/6 lg:w-2/6 h-5/6">
                    <h4 className="font-semibold text-4xl text-center">Sign In</h4>
                    <div className="flex justify-center my-6">
                        <h6 className="font-medium mr-4">Already an user?</h6>
                        <a className="text-blue-500 font-medium">Sign In</a>
                    </div>
                    <form>
                        <div className="grid grid-cols-2 gap-x-5">
                            <input
                                className="block w-full bg-gray-100 mb-5 font-medium py-2.5 px-4 rounded-2xl placeholder-gray-500"
                                aria-label="firstname" placeholder="First Name"/>
                            <input
                                className="block w-full bg-gray-100 mb-5 font-medium py-2.5 px-4 rounded-2xl placeholder-gray-500"
                                aria-label="lastname" placeholder="Last Name"/>
                        </div>
                        <input
                            className="block w-full bg-gray-100 mb-5 font-medium py-2.5 px-4 rounded-2xl placeholder-gray-500"
                            aria-label="email" placeholder="Email Address"/>
                        <input
                            className="block w-full bg-gray-100 mb-5 font-medium py-2.5 px-4 rounded-2xl placeholder-gray-500"
                            aria-label="password" placeholder="Password"/>
                        <Link href="/login">
                            <a className="block bg-blue-500 rounded-full py-3 px-6 text-center font-medium text-white">
                                Sign Up
                            </a>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register

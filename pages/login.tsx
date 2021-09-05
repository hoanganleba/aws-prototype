import type {NextPage} from 'next'
import Link from 'next/link'

const Login: NextPage = () => {
    return (
        <>
            <div className="bg-blue-500 h-screen flex justify-center items-center">
                <div className="rounded-2xl shadow-2xl p-14 bg-white mx-auto w-5/6 md:w-3/6 lg:w-2/6 h-5/6">
                    <h4 className="font-semibold text-4xl text-center">Sign In</h4>
                    <div className="flex justify-center my-6">
                        <h6 className="font-medium mr-4">New user?</h6>
                        <a className="text-blue-500 font-medium">Create an account</a>
                    </div>
                    <form>
                        <input
                            className="block w-full bg-gray-100 mb-5 font-medium py-2.5 px-4 rounded-2xl placeholder-gray-500"
                            aria-label="email" placeholder="Username or email"/>
                        <input
                            className="block w-full bg-gray-100 mb-5 font-medium py-2.5 px-4 rounded-2xl placeholder-gray-500"
                            aria-label="password" placeholder="Password"/>
                        <div className="flex items-center mb-5">
                            <input aria-label="remember"
                                   type="checkbox"/>
                            <h6 className="font-medium ml-4">Keep me signed in</h6>
                        </div>
                        <Link href="/admin/dashboard">
                            <a className="block bg-blue-500 rounded-full py-3 px-6 text-center font-medium text-white">
                                Sign In
                            </a>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login

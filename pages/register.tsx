import type {NextPage} from 'next'
import Link from 'next/link'
import { DataStore } from '@aws-amplify/datastore'
import { Role, User } from 'src/models'
import {useState} from 'react'

const Register: NextPage = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [phoneNum, setPhoneNum] = useState<string>('')
    const register = async () => {
        const adminRole = await DataStore.query(Role, '1')
        await DataStore.save(
            new User({
                name,
                email,
                password,
                phoneNum,
                role: adminRole
            })
        );
    }
    return (
        <>
            <div className="bg-blue-500 h-screen flex justify-center items-center">
                <div className="rounded-2xl shadow-2xl p-14 bg-white mx-auto w-5/6 md:w-3/6 lg:w-2/6 h-5/6">
                    <h4 className="font-semibold text-4xl text-center">Sign Up</h4>
                    <div className="flex justify-center my-6">
                        <h6 className="font-medium mr-4">Already an user?</h6>
                        <Link href="/">
                            <a className="text-blue-500 font-medium">Sign In</a>
                        </Link>
                    </div>
                    <form>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            className="focus:outline-none block w-full bg-gray-100 mb-5 font-medium py-2.5 px-4 rounded-2xl placeholder-gray-500"
                            aria-label="name" placeholder="Full Name"/>
                        <input
                            onChange={(e) => setPhoneNum(e.target.value)}
                            className="focus:outline-none block w-full bg-gray-100 mb-5 font-medium py-2.5 px-4 rounded-2xl placeholder-gray-500"
                            aria-label="phoneNum" placeholder="Phone number"/>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            className="focus:outline-none block w-full bg-gray-100 mb-5 font-medium py-2.5 px-4 rounded-2xl placeholder-gray-500"
                            aria-label="email" placeholder="Email Address"/>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            className="focus:outline-none block w-full bg-gray-100 mb-5 font-medium py-2.5 px-4 rounded-2xl placeholder-gray-500"
                            aria-label="password" placeholder="Password"/>
                        <a onClick={register}
                           className="block bg-blue-500 rounded-full py-3 px-6 text-center font-medium text-white">
                            Sign Up
                        </a>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register

import {Menu, Transition} from "@headlessui/react";
import Image from "next/image";
import profilePic from "public/Path_2.png";
import {Fragment, useContext} from "react";
import UserContext from "context/UserContext";

const Container = ({children}: any) => {
    const {logout} = useContext(UserContext)

    return (
        <div className="h-full w-full">
            <div className="max-w-6xl mx-auto mt-9">
                <div className="flex justify-end">
                    <Menu as="div" className="relative inline-block text-left">
                        <Menu.Button className="flex items-center focus:outline-none">
                            <Image src={profilePic} alt="Picture of the author"/>

                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 text-gray-800"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                      d="M19 9l-7 7-7-7"/>
                            </svg>
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items
                                className="absolute p-2 right-0 w-44 mt-2 origin-top-right bg-white rounded-2xl shadow-lg focus:outline-none">
                                <Menu.Item>
                                    {({active}) => (
                                        <a className={`flex items-center my-2 py-2 px-3 ${active && 'bg-blue-500 rounded-lg text-white'}`}
                                           href={"#"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                                                 fill="none"
                                                 viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      strokeWidth="1.5"
                                                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                            </svg>
                                            <div className="font-medium ml-3">Profile</div>
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({active}) => (
                                        <a className={`flex items-center my-2 py-2 px-3 ${active && 'bg-blue-500 rounded-lg text-white'}`}
                                           href={"#"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                                                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      strokeWidth="1.5"
                                                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                            </svg>
                                            <div className="font-medium ml-3">Setting</div>
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({active}) => (
                                        <button onClick={logout}
                                           className={`flex items-center my-2 py-2 px-3 w-full ${active && 'bg-blue-500 rounded-lg text-white'}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                                                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      strokeWidth="1.5"
                                                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                                            </svg>
                                            <div className="font-medium ml-3">Logout</div>
                                        </button>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Container

import React from 'react'
import Image from 'next/image'
import profilePic from 'public/Image_1.png'
import {Menu} from '@headlessui/react'
import Link from 'next/link'

const Sidebar = () => {
    return (
        <div className="bg-white h-full w-56">
            <div className="flex justify-center mt-3.5">
                <Image src={profilePic} alt="Picture of the author"/>
            </div>

            <div className="flex border-l-4 py-1 border-blue-500 py-1 px-6 my-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-500" fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                </svg>
                <p className="text-blue-500 font-semibold ml-4">Dashboard</p>
            </div>

            <Menu as="div">
                <Menu.Button as="div" className="flex items-center justify-between py-1 px-6 my-4 focus:outline-none">
                    <div className="flex items-center ml-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-500" fill="none"
                             viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                        </svg>
                        <p className="text-blue-500 font-semibold ml-4">People</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                    </svg>
                </Menu.Button>
                <Menu.Items as="div" className="focus:outline-none">
                    <Menu.Item as="div" className="flex justify-center py-1 my-3 focus:outline-none">
                        <p className="text-gray-600 font-semibold text-sm">Teachers</p>
                    </Menu.Item>
                    <Menu.Item as="div" className="flex justify-center py-1 my-3 focus:outline-none">
                        <p className="text-gray-600 font-semibold text-sm">Students</p>
                    </Menu.Item>
                </Menu.Items>
            </Menu>
            <Link href="/admin/chat">
                <a className="flex items-center py-1 px-6 my-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-500" fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                    </svg>
                    <p className="text-blue-600 font-semibold ml-4">Chat</p>
                </a>
            </Link>
        </div>
    )
}

export default Sidebar

import React from 'react'
import Image from 'next/image'
import profilePic from 'public/Image_1.png'
import Link from 'next/link'
import { useRouter } from 'next/router'

const AdminSidebar = () => {
    const router = useRouter()

    return (
        <div className="bg-white h-full w-56 flex-shrink-0">
            <div className="flex justify-center mx-4 my-11">
                <Image src={profilePic} alt="Picture of the author"/>
            </div>

            <Link href="/admin">
                <a className={`${router.pathname == "/admin" ? "border-l-4 border-blue-500" : ""} text-blue-500  flex py-1 px-6 my-4`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <p className="font-medium ml-4">Dashboard</p>
                </a>
            </Link>
            <Link href="/admin/teachers">
                <a className={`${router.pathname == "/admin/teachers" ? "border-l-4 border-blue-500" : ""} text-blue-600 flex py-1 px-6 my-4`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <p className="font-medium ml-4">Teacher</p>
                </a>
            </Link>
            <Link href="/admin/students">
                <a className={`${router.pathname == "/admin/students" ? "border-l-4 border-blue-500" : ""} text-blue-600 flex py-1 px-6 my-4`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <p className="font-medium ml-4">Student</p>
                </a>
            </Link>
            <Link href="/admin/chat">
                <a className={`${router.pathname == "/admin/chat" ? "border-l-4 border-blue-500" : ""} text-blue-600 flex py-1 px-6 my-4`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <p className="font-medium ml-4">Chat</p>
                </a>
            </Link>
        </div>
    )
}

export default AdminSidebar

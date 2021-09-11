import React from 'react'
import Image from 'next/image'
import profilePic from 'public/Image_1.png'
import Link from 'next/link'
import {useRouter} from 'next/router'

const StudentSidebar = () => {
    const router = useRouter()

    return (
        <div className="bg-white min-h-full w-56 flex-shrink-0">
            <div className="flex justify-center mx-4 my-11">
                <Image src={profilePic} alt="Picture of the author"/>
            </div>

            <Link href={"/student"}>
                <a className={`${router.pathname == "/student" ? "border-l-4 border-blue-500" : ""} text-blue-500 flex py-1 px-6 my-4`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <p className="font-medium ml-4">Dashboard</p>
                </a>
            </Link>
            <Link href={"/student/courses"}>
                <a className={`${router.pathname == "/student/courses" ? "border-l-4 border-blue-500" : ""} text-blue-600 flex py-1 px-6 my-4`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <p className="font-medium ml-4">Course</p>
                </a>
            </Link>
            <Link href={"/student/message"}>
                <a className={`${router.pathname == "/student/message" ? "border-l-4 border-blue-500" : ""} text-blue-600 flex py-1 px-6 my-4`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <p className="font-medium ml-4">Chat</p>
                </a>
            </Link>
        </div>
    )
}

export default StudentSidebar

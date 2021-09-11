import type {NextPage} from 'next'
import Link from 'next/link'
import profilePic from 'public/Path_2.png'
import Image from 'next/image'
import {DataStore} from "@aws-amplify/datastore";
import {Teacher, Chat, Student} from "../../src/models";
import {useContext, useEffect, useState} from "react";
import UserContext from "../../context/UserContext";
import TeacherLayout from "../../components/Layouts/TeacherLayout";

const Message: NextPage = () => {
    const {userId} = useContext(UserContext)
    const [students, setStudents] = useState<any[]>([])
    const [messages, setMessages] = useState<any[]>([])
    const [message, setMessage] = useState<string>('')
    const [selectedStudent, setSelectedStudent] = useState<any>('')

    const sendMessage = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        const selectedTeacher = await DataStore.query(Teacher, userId)
        await DataStore.save(new Chat({
            message,
            sender: userId,
            teacher: selectedTeacher,
            student: selectedStudent
        }))

        setMessage('')
    }
    const getStudents = async () => {
        const teacherModel = await DataStore.query(Student)
        setStudents(teacherModel)
    }

    const scrollToBottom = () => {
        const messages = document.getElementById('chat-section')
        // @ts-ignore
        messages.scrollTop = messages.scrollHeight;
    }

    const getMessage = async () => {
        if (selectedStudent?.id !== undefined) {
            const messageModel = (await DataStore.query(Chat)).filter(item => item.student?.id === selectedStudent?.id)
            setMessages(messageModel)
            console.log(messageModel)
        }
    }
    useEffect(() => {
        getStudents()
    })
    useEffect(() => {
        getMessage()
        scrollToBottom()
        DataStore.observe(Chat).subscribe(() => {
            getMessage()
            scrollToBottom()
        });

    }, [selectedStudent])



    return (
        <div className="mx-2 mb-8">
            <div className="mt-11 mx-4 flex justify-between items-end mb-6">
                <h2 className="text-4xl text-gray-800 font-semibold">Chat</h2>
                <div className="text-sm flex items-center font-medium">
                    <Link href={"/student"}>
                        <a className="text-gray-600">Dashboard</a>
                    </Link>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 mx-2" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M13 5l7 7-7 7M5 5l7 7-7 7"/>
                    </svg>
                    <p className="text-blue-500">Chat</p>
                </div>
            </div>
            <div className="rounded-2xl bg-white p-5 grid grid-cols-4 gap-x-4">
                <div>
                    <div className="bg-gray-100 flex items-center py-2.5 px-4 rounded-2xl block text-gray-500 mb-5">
                        <input
                            className="placeholder-gray-500 w-full font-medium focus:outline-none bg-transparent"
                            aria-label="search" placeholder="Search"/>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-auto" fill="none"
                             viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                    </div>
                    <div className="h-80 overflow-y-scroll overscroll-auto">
                        {students.map(student => (
                            <div
                                onClick={() => setSelectedStudent(student)}
                                key={student.id}
                                className="rounded-2xl py-2.5 px-4 mb-2 flex items-center text-gray-800">
                                <Image src={profilePic} alt="Picture of the author"/>
                                <div className="ml-2.5 font-medium">
                                    <p>{student.user?.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="bg-gray-100 rounded-2xl">
                        <div className="flex justify-center items-center py-6">
                            <h6 className="font-semibold">{selectedStudent.user?.name}</h6>
                        </div>
                        <div id="chat-section" className="h-80 overflow-y-scroll overscroll-auto p-4">
                            {messages.map(item => (
                                <div key={item.id}
                                     className={`flex ${item.sender === userId ? 'justify-end' : 'justify-start'}`}>
                                    <div
                                        className={`${item.sender === userId ? 'bg-blue-500 text-white' : 'bg-white'} rounded-2xl py-2.5 px-4 my-1`}>
                                        {item.message}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <form className="bg-gray-100 flex items-center py-2.5 px-4 rounded-2xl block text-gray-500 mt-3">
                        <input
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="placeholder-gray-500 w-full font-medium focus:outline-none bg-transparent"
                            aria-label="message" placeholder="Type a message"/>
                        <button onClick={sendMessage}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="transform rotate-45 h-5 w-5 ml-auto"
                                 fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

// @ts-ignore
Message.getLayout = (page: any) => (
    <TeacherLayout>
        {page}
    </TeacherLayout>
)

export default Message

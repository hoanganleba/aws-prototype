import type {NextPage} from 'next'
import AdminLayout from 'components/Layouts/AdminLayout'
import Link from 'next/link'
import profilePic from 'public/Path_2.png'
import Image from 'next/image'

const Chat: NextPage = () => {
    return (
        <div className="mx-2">
            <div className="mt-11 mx-4 flex justify-between items-end mb-6">
                <h2 className="text-4xl text-gray-800 font-semibold">Chat</h2>
                <div className="text-sm flex items-center font-medium">
                    <Link href="/admin">
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
                        <div className="rounded-2xl py-2.5 px-4 bg-blue-500 mb-2 flex items-center">
                            <Image src={profilePic} alt="Picture of the author"/>
                            <div className="ml-2.5 font-medium">
                                <p className="text-white">Steven Crown</p>
                                <p className="text-xs text-green-400">Online</p>
                                <p className="text-white text-xs truncate w-40">Lorem ipsum dolor sit ame ame</p>
                            </div>
                        </div>
                        <div className="rounded-2xl py-2.5 px-4 mb-2 flex items-center">
                            <Image src={profilePic} alt="Picture of the author"/>
                            <div className="ml-2.5 font-medium">
                                <p className="text-gray-800">Steven Crown</p>
                                <p className="text-xs text-green-400">Online</p>
                                <p className="text-xs truncate w-40">Lorem ipsum dolor sit ame ame</p>
                            </div>
                        </div>
                        <div className="rounded-2xl py-2.5 px-4 mb-2 flex items-center">
                            <Image src={profilePic} alt="Picture of the author"/>
                            <div className="ml-2.5 font-medium">
                                <p className="text-gray-400">Steven Crown</p>
                                <p className="text-xs text-gray-400">Offline</p>
                                <p className="text-xs text-gray-400 truncate w-40">Lorem ipsum dolor sit ame ame</p>
                            </div>
                        </div>
                        <div className="rounded-2xl py-2.5 px-4 mb-2 flex items-center">
                            <Image src={profilePic} alt="Picture of the author"/>
                            <div className="ml-2.5 font-medium">
                                <p className="text-gray-800">Steven Crown</p>
                                <p className="text-xs text-green-400">Online</p>
                                <p className="text-xs truncate w-40">Lorem ipsum dolor sit ame ame</p>
                            </div>
                        </div>
                        <div className="rounded-2xl py-2.5 px-4 mb-2 flex items-center">
                            <Image src={profilePic} alt="Picture of the author"/>
                            <div className="ml-2.5 font-medium">
                                <p className="text-gray-400">Steven Crown</p>
                                <p className="text-xs text-gray-400">Offline</p>
                                <p className="text-xs text-gray-400 truncate w-40">Lorem ipsum dolor sit ame ame</p>
                            </div>
                        </div>
                        <div className="rounded-2xl py-2.5 px-4 mb-2 flex items-center">
                            <Image src={profilePic} alt="Picture of the author"/>
                            <div className="ml-2.5 font-medium">
                                <p className="text-gray-400">Steven Crown</p>
                                <p className="text-xs text-gray-400">Offline</p>
                                <p className="text-xs text-gray-400 truncate w-40">Lorem ipsum dolor sit ame ame</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="bg-gray-100 rounded-2xl">
                        <div className="flex justify-center items-center py-6">
                            <h6 className="font-semibold">Steven Crown</h6>
                            <div className="ml-2.5 h-2 w-2 bg-green-400 rounded-full"/>
                        </div>
                        <div id="chat-section" className="h-80 overflow-y-scroll overscroll-auto">

                        </div>
                    </div>
                    <div className="bg-gray-100 flex items-center py-2.5 px-4 rounded-2xl block text-gray-500 mt-3">
                        <input
                            className="placeholder-gray-500 w-full font-medium focus:outline-none bg-transparent"
                            aria-label="message" placeholder="Type a message"/>
                        <svg xmlns="http://www.w3.org/2000/svg" className="transform rotate-45 h-5 w-5 ml-auto"
                             fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

// @ts-ignore
Chat.getLayout = (page: any) => (
    <AdminLayout>
        {page}
    </AdminLayout>
)

export default Chat

import type {NextPage} from 'next'
import Link from "next/link";
import TeacherLayout from "components/Layouts/TeacherLayout";
import Image from "next/image";
import profilePic from "../../public/Path_2.png";

const Course: NextPage = () => {
    return (
        <>
            <div className="mt-11 flex justify-between mb-6">
                <h2 className="text-2xl text-gray-800 font-semibold">Course</h2>
                <div className="text-sm flex items-center font-medium">
                    <Link href={"/teacher"}>
                        <a className="text-gray-600">Dashboard</a>
                    </Link>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 mx-2" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M13 5l7 7-7 7M5 5l7 7-7 7"/>
                    </svg>
                    <p className="text-blue-500">Course</p>
                </div>
            </div>
            <div className="rounded-2xl bg-white p-5">
                <div className="flex items-center mb-8 justify-between">
                    <div className="bg-gray-100 flex items-center py-2.5 px-4 rounded-2xl block text-gray-500">
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
                    <button className="py-2 px-5 font-medium bg-blue-500 text-white rounded-full flex items-center">
                        <span className="mr-2">Add Course</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                        </svg>
                    </button>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                    <tr>
                        <th scope="col"
                            className="font-medium px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            ID
                        </th>
                        <th scope="col"
                            className="font-medium px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                        </th>
                        <th scope="col"
                            className="font-medium px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Phone Number
                        </th>
                        <th scope="col"
                            className="font-medium px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                        </th>
                        <th scope="col">
                            <span
                                className="font-medium px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </span>
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">1</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                    <Image className="rounded-full" src={profilePic} alt="Picture of the author"/>
                                </div>
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                        Jane Cooper
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        jane.cooper@example.com
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">Regional Paradigm Technician</div>
                            <div className="text-sm text-gray-500">Optimization</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <span
                                className="px-2 inline-flex text-xs leading-5 font-medium rounded-full bg-green-100 text-green-800">
                                Active
                            </span>
                        </td>
                        <td className="px-6 py-4 flex justify-center">
                            <div
                                className="text-white bg-blue-500 rounded-full mr-3 h-10 w-10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                                </svg>
                            </div>
                            <div
                                className="text-white bg-red-500 rounded-full mr-3 h-10 w-10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                </svg>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

// @ts-ignore
Course.getLayout = (page: any) => (
    <TeacherLayout>
        {page}
    </TeacherLayout>
)

export default Course

import type {NextPage} from 'next'
import AdminLayout from 'components/Layouts/AdminLayout'
import Link from 'next/link'
import {useEffect, useState, Fragment} from 'react'
import {DataStore} from '@aws-amplify/datastore'
import {Role, Teacher, User} from 'src/models'
import {Dialog, Transition} from '@headlessui/react'
import Image from "next/image";
import profilePic from "../../public/Path_2.png";
import {deleteTeacher} from "../../src/graphql/mutations";

const Teachers: NextPage = () => {
    const [teachers, setTeachers] = useState<Array<any>>([])
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [phoneNum, setPhoneNum] = useState<string>('')

    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    const addTeacher = async () => {
        const teacherRole = await DataStore.query(Role, '2')
        const newTeacher = await DataStore.save(
            new User({
                name,
                email,
                password,
                phoneNum,
                role: teacherRole
            })
        )
        await DataStore.save(
            new Teacher({
                user: newTeacher
            })
        )
        closeModal()
    }

    const getTeachers = async () => {
        const teacherModel = await DataStore.query(User)
        setTeachers(teacherModel.filter(data => data.role?.name === 'Teacher'))
    }

    const deleteTeacher = async (id: any) => {
        const teacherModelToDelete: any = await DataStore.query(User, id);
        await DataStore.delete(teacherModelToDelete);
    }

    useEffect(() => {
        getTeachers()
        DataStore.observe(User).subscribe(() => {
            getTeachers()
        })
    }, [])
    return (
        <div className="mx-2">
            <div className="mt-11 mx-4 flex justify-between items-end mb-6">
                <h2 className="text-4xl text-gray-800 font-semibold">Teacher</h2>
                <div className="text-sm flex items-center font-medium">
                    <Link href={"/admin"}>
                        <a className="text-gray-600">Dashboard</a>
                    </Link>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 mx-2" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M13 5l7 7-7 7M5 5l7 7-7 7"/>
                    </svg>
                    <p className="text-blue-500">Teacher</p>
                </div>
            </div>
            <div className="rounded-2xl max-w-6xl bg-white p-5">
                <div className="flex items-center mb-8 justify-between">
                    <div className="bg-gray-100 flex items-center py-2.5 px-4 rounded-2xl block text-gray-500">
                        <input
                            className="focus:outline-none placeholder-gray-500 w-full font-medium focus:outline-none bg-transparent"
                            aria-label="search" placeholder="Search"/>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-auto" fill="none"
                             viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                    </div>
                    <button
                        type="button"
                        onClick={openModal}
                        className="py-2 px-5 font-medium bg-blue-500 text-white rounded-full flex items-center">
                        <span className="mr-2">Add Teacher</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
                        </svg>
                    </button>
                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog
                            as="div"
                            className="fixed inset-0 z-10 overflow-y-auto"
                            onClose={closeModal}
                        >
                            <div className="min-h-screen px-4 text-center">
                                <Dialog.Overlay className="fixed inset-0 bg-black opacity-30"/>
                                {/* This element is to trick the browser into centering the modal contents. */}
                                <span
                                    className="inline-block h-screen align-middle"
                                    aria-hidden="true"
                                >
                                    &#8203;
                                </span>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <div
                                        className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900 font-bold"
                                        >
                                            Add Teacher
                                        </Dialog.Title>
                                        <div className="my-6">
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
                                        </div>

                                        <div className="mt-4">
                                            <button
                                                type="button"
                                                className="inline-flex py-2 px-5 font-medium bg-blue-500 text-white rounded-full flex items-center"
                                                onClick={addTeacher}
                                            >
                                                Add
                                            </button>
                                        </div>
                                    </div>
                                </Transition.Child>
                            </div>
                        </Dialog>
                    </Transition>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                    <tr>
                        <th scope="col"
                            className="font-medium px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                        </th>
                        <th scope="col"
                            className="font-medium px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Phone Number
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
                    {
                        teachers.map(teacher => (
                            <tr key={teacher.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10">
                                            <Image className="rounded-full" src={profilePic}
                                                   alt="Picture of the author"/>
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">
                                                {teacher.name}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                {teacher.email}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                        {teacher.phoneNum}
                                    </div>
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
                                    <button
                                        onClick={() => deleteTeacher(teacher.id)}
                                        className="text-white bg-red-500 rounded-full mr-3 h-10 w-10 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    return {
        props: {
            protected: true,
            userTypes: ['Admin']
        }
    };
}

// @ts-ignore
Teachers.getLayout = (page: any) => (
    <AdminLayout>
        {page}
    </AdminLayout>
)

export default Teachers

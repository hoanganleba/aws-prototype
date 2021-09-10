import type {NextPage} from 'next'
import Link from "next/link";
import TeacherLayout from "components/Layouts/TeacherLayout";
import {Fragment, useEffect, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {DataStore} from "@aws-amplify/datastore";
import {Course, Enrolment, Student} from "src/models";
import {useRouter} from "next/router";

const Enrollments: NextPage = () => {
    const router = useRouter()
    const {courseId} = router.query
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [students, setStudents] = useState<Array<any>>([])
    const [studentIdSelected, setStudentIdSelected] = useState('')
    const [enrollments, setEnrollments] = useState<Array<any>>([])

    const addStudentToCourse = async () => {
        const courseModel = await DataStore.query(Course)
        const course = courseModel.filter(item => item.id === courseId)
        await DataStore.save(
            new Enrolment({
                course: course[0],
                studentID: studentIdSelected
            })
        )
        closeModal()
    }

    const getEnrollments = async () => {
        const enrollmentModel = await DataStore.query(Enrolment)
        const studentModel = await DataStore.query(Student)
        setEnrollments(enrollmentModel)
        setStudents(studentModel)
    }


    const deleteEnrollment = async (id: any) => {
        const courseModelToDelete: any = await DataStore.query(Enrolment, id);
        await DataStore.delete(courseModelToDelete);
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    useEffect(() => {
        getEnrollments()
        DataStore.observe(Enrolment).subscribe(() => {
            getEnrollments()
        })
    }, [])

    return (
        <div className="mx-2">
            <div className="mt-11 mx-4 flex justify-between items-end mb-6">
                <h2 className="text-4xl text-gray-800 font-semibold">Enrollments</h2>
                <div className="text-sm flex items-center font-medium">
                    <Link href={"/teacher"}>
                        <a className="text-gray-600">Dashboard</a>
                    </Link>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 mx-2" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M13 5l7 7-7 7M5 5l7 7-7 7"/>
                    </svg>
                    <Link href={"/teacher/courses"}>
                        <a className="text-gray-600">Courses</a>
                    </Link>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 mx-2" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M13 5l7 7-7 7M5 5l7 7-7 7"/>
                    </svg>
                    <p className="text-blue-500">Enrollments</p>
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
                    <button onClick={openModal}
                            className="py-2 px-5 font-medium bg-blue-500 text-white rounded-full flex items-center">
                        <span className="mr-2">Add Student</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
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
                                            Add Student
                                        </Dialog.Title>

                                        <div className="my-6">
                                            <select onChange={(e) => setStudentIdSelected(e.target.value)}>
                                                {students.map(student => (
                                                    <option key={student.id}
                                                            value={student.id}>{student.user?.name}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="mt-4">
                                            <button
                                                onClick={addStudentToCourse}
                                                type="button"
                                                className="inline-flex py-2 px-5 font-medium bg-blue-500 text-white rounded-full flex items-center"
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
                            Student Name
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
                        enrollments.map(enrollment => (
                            <tr key={enrollment.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="text-sm font-medium text-gray-900">
                                            {students.filter(student => student.id === enrollment.studentID).map(x => x.user?.name)}
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 flex justify-center items-center">
                                    <button
                                        onClick={() => deleteEnrollment(enrollment.id)}
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

// @ts-ignore
Enrollments.getLayout = (page: any) => (
    <TeacherLayout>
        {page}
    </TeacherLayout>
)

export default Enrollments

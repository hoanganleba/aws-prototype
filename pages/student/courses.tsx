import type {NextPage} from "next";
import Link from "next/link";
import StudentLayout from "components/Layouts/StudentLayout";
import {useEffect, useState} from "react";
import {API} from "aws-amplify";
import * as queries from "src/graphql/queries";

const Courses: NextPage = () => {
    const [enrollmentCourses, setEnrollmentCourses] = useState<any[]>([]);

    useEffect(() => {
        let filter = {
            studentID: {
                eq: "3e6b08ea-baa9-458f-aa13-bdd96438a2f6",
            },
        };
        const getStudent = async () => {
            const students = await API.graphql({
                query: queries.listEnrolments,
                variables: {filter: filter},
            });
            // @ts-ignore
            setEnrollmentCourses(students.data.listEnrolments.items);
        };
        getStudent();
    }, []);
    return (
        <>
            <div className="mx-4 flex justify-between items-end mb-6">
                <h2 className="text-4xl text-gray-800 font-semibold">Course</h2>
                <div className="text-sm flex items-center font-medium">
                    <Link href={"/student"}>
                        <a className="text-gray-600 hover:underline">Dashboard</a>
                    </Link>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-2 w-2 mx-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 5l7 7-7 7M5 5l7 7-7 7"
                        />
                    </svg>
                    <p className="text-blue-500">Course</p>
                </div>
            </div>
            <div className="rounded-2xl bg-white p-5">
                <div className="flex items-center mb-8 justify-between">
                    <div className="bg-gray-100 flex items-center py-2.5 px-4 rounded-2xl block text-gray-500">
                        <input
                            className="placeholder-gray-500 w-full font-medium focus:outline-none bg-transparent"
                            aria-label="search"
                            placeholder="Search"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                    <tr>
                        <th
                            scope="col"
                            className="font-medium px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Class Name
                        </th>
                        <th
                            scope="col"
                            className="font-medium px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Class code
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
                    {enrollmentCourses.map((enrollmentCourse) => (
                        <tr key={enrollmentCourse}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="text-sm font-medium text-gray-900">
                                        {enrollmentCourse.course.name}
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                    {enrollmentCourse.course.code}
                                </div>
                            </td>
                            <td className="px-6 py-4 flex justify-center">
                                <Link href={`/student`}>
                                    <a className="border border-transparent rounded-xl px-4 py-2 text-sm text-blue-500 hover:bg-gray-100 focus:bg-gray-200">
                                        View
                                    </a>
                                </Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

// @ts-ignore
Courses.getLayout = (page: any) => <StudentLayout>{page}</StudentLayout>;

export default Courses;

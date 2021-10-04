import type {NextPage} from "next";
import Head from "next/head";
import AdminLayout from "components/Layouts/AdminLayout";
import Link from "next/link";
import {useEffect, useState} from "react";
import {DataStore} from "@aws-amplify/datastore";
import {Role, Teacher, User} from "src/models";
import Image from "next/image";
import profilePic from "../../public/Path_2.png";
import {TrashIcon} from "@heroicons/react/outline";

const Teachers: NextPage = () => {
    const [teachers, setTeachers] = useState<Array<any>>([]);
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [phoneNum, setPhoneNum] = useState<string>("");

    const addTeacher = async () => {
        const teacherRole = await DataStore.query(Role, "2");
        const newTeacher = await DataStore.save(
            new User({
                name,
                email,
                password,
                phoneNum,
                role: teacherRole,
            })
        );
        await DataStore.save(
            new Teacher({
                user: newTeacher,
            })
        );
    };

    const getTeachers = async () => {
        const teacherModel = await DataStore.query(User);
        setTeachers(teacherModel.filter((data) => data.role?.name === "Teacher"));
    };

    const deleteTeacher = async (id: any) => {
        const userModelToDelete: any = await DataStore.query(User, id);
        const teacherModelToDelete: any = (await DataStore.query(Teacher)).filter(
            (t) => t.user?.id === id
        );
        await DataStore.delete(userModelToDelete);
        await DataStore.delete(teacherModelToDelete);
    };

    useEffect(() => {
        getTeachers();
        DataStore.observe(User).subscribe(() => {
            getTeachers();
        });
    }, []);
    return (
        <>
            <Head>
                <title>Teachers - VEER</title>
            </Head>
            <div className="flex justify-between m-4">
                <h2 className="text-3xl font-bold">Teacher</h2>
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li>
                            <Link href={"/admin"}>
                                <a>Dashboard</a>
                            </Link>
                        </li>
                        <li>Teachers</li>
                    </ul>
                </div>
            </div>
            <div className="card bordered p-4">
                <div className="flex items-center mb-8 justify-between">
                    <div className="form-control">
                        <div className="relative">
                            <input type="text" placeholder="Search"
                                   className="w-full pr-16 input input-primary input-bordered"/>
                            <button className="absolute top-0 right-0 rounded-l-none btn btn-primary">
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
                            </button>
                        </div>
                    </div>

                    <label htmlFor="my-modal-2" className="btn btn-primary modal-button">
                        <span className="mr-2">Add Teacher</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                            />
                        </svg>
                    </label>
                    <input type="checkbox" id="my-modal-2" className="modal-toggle"/>
                    <div className="modal">
                        <div className="modal-box">
                            <h3 className="text-xl font-medium leading-6 font-bold">Add Teacher</h3>
                            <div className="my-6 space-y-5">
                                <div className="form-control">
                                    <input
                                        onChange={(e) => setName(e.target.value)}
                                        className="input input-bordered"
                                        aria-label="name"
                                        placeholder="Full Name"
                                    />
                                </div>
                                <div className="form-control">
                                    <input
                                        onChange={(e) => setPhoneNum(e.target.value)}
                                        className="input input-bordered"
                                        aria-label="phoneNum"
                                        placeholder="Phone number"
                                    />
                                </div>
                                <div className="form-control">
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="input input-bordered"
                                        aria-label="email"
                                        placeholder="Email Address"
                                    />
                                </div>
                                <div className="form-control">
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="input input-bordered"
                                        aria-label="password"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>

                            <div className="modal-action">
                                <label htmlFor="my-modal-2" className="btn btn-primary" onClick={addTeacher}>Add</label>
                                <label htmlFor="my-modal-2" className="btn">Close</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {teachers.map((teacher) => (
                            <tr key={teacher.id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="w-12 h-12 rounded-full">
                                                <Image
                                                    src={profilePic}
                                                    alt="Picture of the author"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">
                                                {teacher.name}
                                            </div>
                                            <div className="text-sm opacity-50">
                                                {teacher.email}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="text-sm">
                                        {teacher.phoneNum}
                                    </div>
                                </td>
                                <td>
                                    <div className="flex">
                                        <button
                                            className="bg-primary rounded-full mr-1.5 h-10 w-10 flex items-center justify-center hover:bg-primary-focus focus:ring focus:ring-primary-focus">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => deleteTeacher(teacher.id)}
                                            className="text-white bg-red-500 rounded-full ml-1.5 h-10 w-10 flex items-center justify-center hover:bg-red-700 focus:ring focus:ring-red-200"
                                        >
                                            <TrashIcon className="h-5 w-5"/>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export async function getStaticProps() {
    return {
        props: {
            protected: true,
            userTypes: ["Admin"],
        },
    };
}

// @ts-ignore
Teachers.getLayout = (page: any) => <AdminLayout>{page}</AdminLayout>;

export default Teachers;

import type {NextPage} from 'next'
import TeacherLayout from 'components/Layouts/TeacherLayout'
import {useEffect, useState} from "react";
import {DataStore} from "@aws-amplify/datastore";
import {Course, User} from "../../src/models";

const Index: NextPage = () => {
    const [numOfCourses, setNumOfCourses] = useState<number>(0)
    const [numOfStudents, setNumOfStudents] = useState<number>(0)

    const getNumbers = async () => {
        const courseModel = await DataStore.query(Course)
        setNumOfCourses(courseModel.length)
        const userModel = await DataStore.query(User)
        setNumOfStudents(userModel.filter(data => data.role?.name === 'Student').length)
    }

    useEffect(() => {
        getNumbers()
    }, [])

    return (
        <div className="mx-2 mb-8">
            <h2 className="text-4xl mx-4 text-gray-800 font-semibold mt-11 mb-6">Dashboard</h2>
            <div className="grid grid-cols-4 gap-x-6">
                <div className="bg-white rounded-2xl p-6">
                    <h3 className="font-medium text-5xl text-blue-500">{numOfCourses}</h3>
                    <p className="mt-2 font-medium text-gray-600">Courses</p>
                </div>

                <div className="bg-white rounded-2xl p-6">
                    <h3 className="font-medium text-5xl text-blue-500">{numOfStudents}</h3>
                    <p className="mt-2 font-medium text-gray-600">Students</p>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    return {
        props: {
            protected: true,
            userTypes: ['Teacher']
        }
    };
}

// @ts-ignore
Index.getLayout = (page: any) => (
    <TeacherLayout>
        {page}
    </TeacherLayout>
)

export default Index

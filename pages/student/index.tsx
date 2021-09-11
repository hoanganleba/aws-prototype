import type {NextPage} from 'next'
import StudentLayout from 'components/Layouts/StudentLayout'
import {useContext, useEffect, useState} from "react";
import {DataStore} from "@aws-amplify/datastore";
import {Course, User} from "../../src/models";
import UserContext from "../../context/UserContext";
import {API} from "aws-amplify";
import * as queries from "../../src/graphql/queries";

const Index: NextPage = () => {
    const [enrollmentCourses, setEnrollmentCourses] = useState<any[]>([])

    useEffect(() => {
        let filter = {
            studentID: {
                eq: '3e6b08ea-baa9-458f-aa13-bdd96438a2f6'
            }
        };
        const getStudent = async () => {
            const students = await API.graphql({
                query: queries.listEnrolments,
                variables: {filter: filter}
            })
            // @ts-ignore
            setEnrollmentCourses(students.data.listEnrolments.items.length)
        }
        getStudent()
    }, [])

    return (
        <div className="mx-2 mb-8">
            <h2 className="text-4xl mx-4 text-gray-800 font-semibold mt-11 mb-6">Dashboard</h2>
            <div className="grid grid-cols-4 gap-x-6">
                <div className="bg-white rounded-2xl p-6">
                    <h3 className="font-medium text-5xl text-blue-500">{enrollmentCourses}</h3>
                    <p className="mt-2 font-medium text-gray-600">Courses</p>
                </div>
                {/*<div className="bg-white rounded-2xl p-6">*/}
                {/*    <h3 className="font-medium text-5xl text-blue-500">30</h3>*/}
                {/*    <p className="mt-2 font-medium text-gray-600">Students</p>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    return {
        props: {
            protected: true,
            userTypes: ['Student']
        }
    };
}

// @ts-ignore
Index.getLayout = (page: any) => (
    <StudentLayout>
        {page}
    </StudentLayout>
)

export default Index

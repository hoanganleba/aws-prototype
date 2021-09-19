import type {NextPage} from "next";
import AdminLayout from "components/Layouts/AdminLayout";
import {useEffect, useState} from "react";
import {DataStore} from "@aws-amplify/datastore";
import {User} from "src/models";

const Index: NextPage = () => {
    const [numOfTeachers, setNumOfTeachers] = useState<number>(0);
    const [numOfStudents, setNumOfStudents] = useState<number>(0);

    const getNumOfUsers = async () => {
        const userModel = await DataStore.query(User);
        setNumOfStudents(
            userModel.filter((data) => data.role?.name === "Student").length
        );
        setNumOfTeachers(
            userModel.filter((data) => data.role?.name === "Teacher").length
        );
    };

    useEffect(() => {
        getNumOfUsers();
        DataStore.observe(User).subscribe(() => {
            getNumOfUsers();
        });
    }, []);

    return (
        <>
            <h2 className="text-4xl mx-4 text-gray-800 font-semibold mb-6">
                Dashboard
            </h2>
            <div className="grid grid-cols-4 gap-x-6">
                <div className="bg-white rounded-2xl p-6">
                    <h3 className="font-medium text-5xl text-blue-500">
                        {numOfTeachers}
                    </h3>
                    <p className="mt-2 font-medium text-gray-600">Teachers</p>
                </div>

                <div className="bg-white rounded-2xl p-6">
                    <h3 className="font-medium text-5xl text-blue-500">
                        {numOfStudents}
                    </h3>
                    <p className="mt-2 font-medium text-gray-600">Students</p>
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
Index.getLayout = (page: any) => <AdminLayout>{page}</AdminLayout>;

export default Index;

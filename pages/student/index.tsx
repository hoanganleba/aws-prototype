import type {NextPage} from 'next'
import StudentLayout from 'components/Layouts/StudentLayout'

const Index: NextPage = () => {
    return (
        <>
            <h2 className="text-2xl text-gray-800 font-semibold mt-11 mb-6">Dashboard</h2>
            <div className="grid grid-cols-4 gap-x-6">
                <div className="bg-white rounded-2xl p-6">
                    <h3 className="font-medium text-5xl text-blue-500">30</h3>
                    <p className="mt-2 font-medium text-gray-600">Teachers</p>
                </div>

                <div className="bg-white rounded-2xl p-6">
                    <h3 className="font-medium text-5xl text-blue-500">30</h3>
                    <p className="mt-2 font-medium text-gray-600">Students</p>
                </div>
            </div>
        </>
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

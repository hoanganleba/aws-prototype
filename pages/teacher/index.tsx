import type {NextPage} from 'next'
import TeacherLayout from 'components/Layouts/TeacherLayout'

const Index: NextPage = () => {
    return (
        <>
            <h2 className="text-2xl text-gray-800 font-semibold mt-11 mb-6">Dashboard</h2>
        </>
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

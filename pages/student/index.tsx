import type {NextPage} from 'next'
import StudentLayout from 'components/Layouts/StudentLayout'

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

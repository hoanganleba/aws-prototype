import type {NextPage} from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
    return (
        <div className="container mx-auto flex gap-x-4 mt-32">
            <Link href="/admin">
                <a>Admin</a>
            </Link>
            <Link href="/student">
                <a>Student</a>
            </Link>
            <Link href="/teacher">
                <a>Teacher</a>
            </Link>
        </div>
    )
}

export default Home

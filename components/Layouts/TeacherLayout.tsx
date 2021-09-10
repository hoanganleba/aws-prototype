import TeacherSidebar from "../Sidebar/TeacherSidebar";
import Container from "../Container";

const TeacherLayout = ({children}: any) => {
    return (
        <>
            <div className="min-h-screen flex">
                <TeacherSidebar/>
                <Container>
                    {children}
                </Container>
            </div>
        </>
    )
}
export default TeacherLayout

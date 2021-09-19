import TeacherSidebar from "../Sidebar/TeacherSidebar";
import Header from "../Header";

const TeacherLayout = ({children}: any) => {
    return (
        <>
            <div className="min-h-screen flex">
                <TeacherSidebar/>
                <Header>{children}</Header>
            </div>
        </>
    );
};
export default TeacherLayout;

import StudentSidebar from "../Sidebar/StudentSidebar";
import Header from "../Header";

const StudentLayout = ({children}: any) => {
    return (
        <>
            <div className="min-h-screen flex">
                <StudentSidebar/>
                <Header>{children}</Header>
            </div>
        </>
    );
};
export default StudentLayout;

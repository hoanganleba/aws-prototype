import StudentSidebar from "../Sidebar/StudentSidebar";

const StudentLayout = ({children}: any) => {
    return (
        <div className="drawer drawer-mobile h-screen">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle"/>
            <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="mb-4 btn btn-primary drawer-button lg:hidden">
                    open menu
                </label>
                {children}
            </div>
            <StudentSidebar/>
        </div>
    );
};
export default StudentLayout;

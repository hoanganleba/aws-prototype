import AdminSidebar from "../Sidebar/AdminSidebar";
import Header from "../Header";

const AdminLayout = ({children}: any) => {
    return (
        <>
            <div className="min-h-screen flex">
                <AdminSidebar/>
                <Header>{children}</Header>
            </div>
        </>
    );
};
export default AdminLayout;

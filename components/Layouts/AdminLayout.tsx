import AdminSidebar from "../Sidebar/AdminSidebar";
import Container from "../Container";

const AdminLayout = ({children}: any) => {
    return (
        <>
            <div className="min-h-screen flex">
                <AdminSidebar/>
                <Container>
                    {children}
                </Container>
            </div>
        </>
    )
}
export default AdminLayout

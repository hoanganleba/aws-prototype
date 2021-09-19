import React from "react";
import {HomeIcon, UserGroupIcon, UserIcon} from "@heroicons/react/outline";
import Sidebar from "./Sidebar";

const navItems = [
    {icon: HomeIcon, path: "/admin", title: "Dashboard"},
    {icon: UserIcon, path: "/admin/teachers", title: "Teacher"},
    {icon: UserGroupIcon, path: "/admin/students", title: "Student"}
]

const AdminSidebar = () => {
    return (
        <div className="bg-white min-h-full w-56 flex-shrink-0">
           <Sidebar navItems={navItems} />
        </div>
    );
};

export default AdminSidebar;

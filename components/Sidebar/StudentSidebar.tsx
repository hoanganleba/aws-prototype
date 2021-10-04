import React from "react";
import {BookOpenIcon, ChatIcon, HomeIcon} from "@heroicons/react/outline";
import Sidebar from "./Sidebar";

const navItems = [
    {icon: HomeIcon, path: "/student", title: "Dashboard"},
    {icon: BookOpenIcon, path: "/student/courses", title: "Course"},
    {icon: ChatIcon, path: "/student/message", title: "Chat"}
]

const StudentSidebar = () => {
    return (
        <>
            <Sidebar navItems={navItems}/>
        </>
    );
};

export default StudentSidebar;

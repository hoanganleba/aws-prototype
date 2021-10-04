import React from "react";
import Sidebar from "./Sidebar";
import {BookOpenIcon, ChatIcon, HomeIcon} from "@heroicons/react/outline";

const navItems = [
    {icon: HomeIcon, path: "/teacher", title: "Dashboard"},
    {icon: BookOpenIcon, path: "/teacher/courses", title: "Course"},
    {icon: ChatIcon, path: "/teacher/message", title: "Chat"}
]

const TeacherSidebar = () => {
    return (
        <>
            <Sidebar navItems={navItems}/>
        </>
    );
};

export default TeacherSidebar;

import AdminSidebar from "../Sidebar/AdminSidebar";
import {CogIcon, LogoutIcon, MenuIcon, UserIcon} from "@heroicons/react/outline";
import React, {useContext} from "react";
import UserContext from "../../context/UserContext";

const AdminLayout = ({children}: any) => {
    const {logout} = useContext(UserContext);

    return (
        <div className="drawer drawer-mobile h-screen">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle"/>
            <div className="drawer-content">
                <div className="navbar px-4">
                    <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost drawer-button lg:hidden">
                        <MenuIcon className="h-6 w-6"/>
                    </label>
                    <div className="ml-auto">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} className="avatar">
                                <div className="rounded-full w-10 h-10 m-1">
                                    <img src="https://i.pravatar.cc/500?img=32" alt="avatar"/>
                                </div>
                            </div>
                            <ul tabIndex={0}
                                className="p-2 shadow-lg menu dropdown-content bg-neutral rounded-box w-52">
                                <li>
                                    <a>
                                        <UserIcon className="h-6 w-6"/>
                                        <div className="font-medium text-sm ml-3">Profile</div>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <CogIcon className="h-6 w-6"/>
                                        <div className="font-medium text-sm ml-3">Settings</div>
                                    </a>
                                </li>
                                <li>
                                    <a onClick={logout}>
                                        <LogoutIcon className="h-6 w-6"/>
                                        <div className="font-medium text-sm ml-3">Logout</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="px-4">
                    {children}
                </div>
            </div>
            <AdminSidebar/>
        </div>
    );
};
export default AdminLayout;

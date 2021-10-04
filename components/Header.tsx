import {Menu, Transition} from "@headlessui/react";
import React, {Fragment, useContext} from "react";
import UserContext from "context/UserContext";
import {UserIcon, CogIcon, LogoutIcon} from "@heroicons/react/outline";

const menuItem = [
    {icon: UserIcon, path: "/profile", title: "Profile"},
    {icon: CogIcon, path: "/settings", title: "Settings"},
];

const Header = ({children}: any) => {
    const {logout} = useContext(UserContext);

    return (
        <div className="h-full flex flex-col items-center justify-center drawer-content">
            <div className="max-w-6xl mx-auto py-3">
                <div className="flex justify-end">
                    <Menu as="div" className="relative inline-block text-left">
                        <Menu.Button className="flex items-center focus:outline-none">
                            <div className="avatar">
                                <div
                                    className="rounded-full w-10 h-10">
                                    <img src="https://daisyui.com/tailwind-css-component-profile-1@94w.png"
                                         alt="logo"/>
                                </div>
                            </div>
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items
                                className="absolute p-2 right-0 w-40 mt-2 origin-top-right bg-white rounded-2xl shadow-lg focus:outline-none">
                                {menuItem.map((item, index) => (
                                    <Menu.Item key={index}>
                                        {({active}) => (
                                            <a
                                                className={`flex items-center my-1 py-2 px-3 ${
                                                    active && "bg-primary rounded-lg text-white"
                                                }`}
                                                href={item.path}
                                            >
                                                <item.icon className="h-6 w-6 text-neutral"/>
                                                <div
                                                    className="font-medium text-sm ml-3 text-neutral">{item.title}</div>
                                            </a>
                                        )}
                                    </Menu.Item>
                                ))}
                                <Menu.Item>
                                    {({active}) => (
                                        <button
                                            onClick={logout}
                                            className={`flex items-center my-1 py-2 px-3 w-full ${
                                                active && "bg-primary rounded-lg text-white"
                                            }`}
                                        >
                                            <LogoutIcon className="h-6 w-6 text-neutral"/>
                                            <div className="font-medium text-sm ml-3 text-neutral">Logout</div>
                                        </button>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </div>
    );
};

export default Header;

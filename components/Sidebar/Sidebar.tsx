import React, {ReactElement} from "react";
import Link from "next/link";

interface NavItemProps {
    icon: ReactElement,
    path: string,
    title: string
}

interface NavItemsProps extends Array<NavItemProps> {
}

const Sidebar: Function = (props: { navItems: NavItemsProps }): JSX.Element => {

    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"/>
            <ul className="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content">
                {props.navItems.map((item: any, index: number) => (
                    <Link key={index} passHref href={item.path}>
                        <li>
                            <a className="items-center flex py-2 my-1">
                                <item.icon className="h-6 w-6"/>
                                <p className="ml-3 text-sm font-medium">{item.title}</p>
                            </a>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;

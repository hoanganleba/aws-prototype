import React, {ReactElement} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import Image from "next/image";
import profilePic from "public/Image_1.png";

interface NavItemProps {
    icon: ReactElement,
    path: string,
    title: string
}

interface NavItemsProps extends Array<NavItemProps> {
}

const Sidebar: Function = (props: { navItems: NavItemsProps }): JSX.Element => {
    const router = useRouter();

    return (
        <>
            <div className="flex justify-center mx-4 my-6">
                <Image src={profilePic} alt="Picture of the author"/>
            </div>

            {props.navItems.map((item: any, index: number) => (
                <Link key={index} href={item.path}>
                    <a
                        className={`${
                            router.pathname == item.path
                                ? "border-l-4 border-blue-600 px-5 text-blue-600"
                                : "px-6"
                        } text-gray-600 items-center flex py-3 my-1`}
                    >
                        <item.icon className="h-7 w-7"/>
                        <p className="ml-3 text-sm font-medium">{item.title}</p>
                    </a>
                </Link>
            ))}
        </>
    );
};

export default Sidebar;

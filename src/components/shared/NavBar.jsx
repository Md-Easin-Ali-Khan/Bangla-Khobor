import Image from "next/image";
import Link from "next/link";
import UserAvatar from "@/assets/user.png"
import NavLink from "./NavLink";

const NavBar = () => {
    return (
        <div className="flex items-center justify-between mt-8">

            <div></div>
            <ul className="flex gap-5 font-normal text-lg text-gray-500">
                <li><NavLink href={"/"}>Home</NavLink></li>
                <li><NavLink href={"/about"}>About</NavLink></li>
                <li><NavLink href={"/career"}>Career</NavLink></li>
            </ul>

            <div className="flex items-center gap-4">
                <Image src={UserAvatar} alt="User Avatar" width={40} height={40}></Image>
                <button className="btn font-semibold text-xl text-white bg-gray-800">
                    <Link href={"/login"}>Login</Link>
                </button>
            </div>
        </div>
    );
};

export default NavBar;
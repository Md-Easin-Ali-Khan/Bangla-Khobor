'use client'
import Image from "next/image";
import Link from "next/link";
import UserAvatar from "@/assets/user.png"
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const NavBar = () => {
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user

    return (
        <div className="flex items-center justify-between mt-8 mb-10 mx-7">

            <div></div>
            <ul className="flex gap-5 font-normal text-lg text-gray-500">
                <li><NavLink href={"/"}>Home</NavLink></li>
                <li><NavLink href={"/about"}>About</NavLink></li>
                <li><NavLink href={"/career"}>Career</NavLink></li>
            </ul>

            {isPending ? (<span className="loading loading-dots loading-xl"></span>
            ) : user ? (<div className="flex items-center gap-4">
                <p>Hello, {user.name}</p>
                <Image src={user.image || UserAvatar} alt="User Avatar" width={40} height={40}></Image>
                <button onClick={async() => await authClient.signOut()} className="btn font-semibold text-xl text-white bg-gray-800">
                Log out
            </button>
            </div>) : (
        <button className="btn font-semibold text-xl text-white bg-gray-800">
            <Link href={"/login"}>LogIn</Link>
        </button>
    )
}
        </div >
    );
};

export default NavBar;
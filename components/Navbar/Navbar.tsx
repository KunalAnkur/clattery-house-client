import Link from "next/link";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/20/solid"
import { useState } from "react";
import { Logo } from "../Logo/Logo";

export function Navbar() {
    const [showDropMenu, setShowDropMenu] = useState(false);
    const onClickDropDown = () => {
        setShowDropMenu(prev => !prev)
    }
    const onClickMenuOption = () => {
        setShowDropMenu(false)
    }
    return (
        <nav className="text-white md:relative font-ubuntu p-5 w-full md:max-w-screen-xl md:mx-auto z-[10] flex items-center justify-end">
            <Link className="absolute z-[4] top-4 md:top-3 left-5" href={"/"}>
                <Logo />
            </Link>
            <div onClick={onClickDropDown} className={`md:hidden z-20 ${showDropMenu && "hidden"}`}>
                <Bars3Icon color="white" className="w-8 cursor-pointer" />
            </div>
            <div className={`bg-black/[.60] fixed md:bg-transparent backdrop-blur-sm z-[5] left-0 w-full h-full gap-4 duration-150 md:static md:w-fit ${showDropMenu ? "top-0" : "-top-full"}`}>
                <span onClick={onClickDropDown} className="flex justify-end p-4 md:hidden">
                    <XMarkIcon className="w-10 cursor-pointer" />
                </span>
                <ul className="flex flex-col justify-center w-full items-center h-full gap-3 md:flex-row md:w-fit">
                    <li className="cursor-pointer">
                        <Link onClick={onClickMenuOption} href={"/"} className="duration-500">Home</Link>
                    </li>
                    <li className="cursor-pointer">
                        <Link onClick={onClickMenuOption} href={"/#category"} className="duration-500">Category</Link>
                    </li>
                    <li className="cursor-pointer">
                        <Link onClick={onClickMenuOption} href={"/about"} className="duration-500">About</Link>
                    </li>
                </ul>

            </div>
        </nav> 
    )
}


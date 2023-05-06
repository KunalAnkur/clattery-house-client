import Link from "next/link";
import { Logo } from "../Logo/Logo";

export function Footer() {
  return (
    <footer className="h-40 relative w-full bottom-0 text-white">
      <img
        className="h-full object-cover w-full hue-rotate-30"
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&dl=kalen-emsley-Bkci_8qcdvQ-unsplash.jpg&w=1920&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
        alt=""
      />
      <div className="h-full w-full absolute bg-black/50 top-0 backdrop-blur-sm">
        <div className="p-5 flex items-center justify-center flex-col">
          <Logo />
          <ul className="flex justify-center items-center h-full gap-3 flex-row w-fit">
            <li className="cursor-pointer">
              <Link href={"/"} className="duration-500">
                Home
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href={"#category"} className="duration-500">
                Category
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href={"/about"} className="duration-500">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

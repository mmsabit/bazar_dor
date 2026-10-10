import Image from "next/image";
import NavItem from "./NavItem";
import Logo from "@/asset/logo.svg";
import Marquee from "./Marquee";
import Link from "next/link";
import NavBtn from "./NavBtn";

const Navber = () => {
  const currentDate = new Date().toLocaleDateString("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="bg-[#fafcfa]">
      <div className="navbar max-w-7xl mx-auto w-full">
        <div className="navbar-start">
          <div className="flex gap-3">
            <Link href="/" aria-label="Home page">
              <Image
                src={Logo}
                alt="Logo"
                width={50}
                height={50}
                className="lg:w-12 lg:h-12 w-8 h-8 object-contain"
              />
            </Link>

            <div className="">
              <Link href="/">
                <h3 className="lg:text-xl text-sm font-bold">বাজার দর</h3>
              </Link>
              <p className="lg:text-[12px] text-[8px]">{currentDate}</p>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end gap-3">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box right-0 mt-3 w-52 p-2 shadow"
            >
              <NavItem />
              <li >
                <NavBtn />
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex gap-5">
            <NavBtn />
          </div>
        </div>
      </div>
      <div className="border border-x-0 border-y-base-200">
        <div className="lg:max-w-7xl max-w-9/10 w-full mx-auto hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavItem />
          </ul>
        </div>
      </div>
      <div className="border border-x-0 border-y-base-300 py-3">
        <Marquee />
      </div>
    </div>
  );
};

export default Navber;

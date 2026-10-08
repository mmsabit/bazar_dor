import Image from "next/image";
import NavItem from "./NavItem";
import Logo from "@/asset/logo.png";
import Marquee from "./Marquee";

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
            <Image
              src={Logo}
              alt="Logo"
              width={50}
              height={50}
              className="lg:w-12 lg:h-12 w-8 h-8 object-contain"
            ></Image>
            <div className="">
              <h3 className="lg:text-xl text-sm font-bold">বাজার দর</h3>
              <p className="lg:text-[12px] text-[8px]">
                {currentDate}
              </p>
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
              <li>
                <a className="btn btn-ghost my-4">সাইন ইন</a>
              </li>
              <li>
                <a className="btn  bg-[#047F39] border-[#047F39] drop-shadow-[#047F39] text-white">
                  সাইন আপ
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex gap-5">
            <a className="btn btn-ghost">সাইন ইন</a>
            <a className="btn  bg-[#047F39] border-[#047F39] drop-shadow-[#047F39] text-white">
              সাইন আপ
            </a>
          </div>
        </div>
      </div>
      <div className="border border-x-0 border-y-base-200">
        <div className="w-7xl mx-auto hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavItem />
          </ul>
        </div>
      </div>
      <div className="border border-x-0 border-y-base-300 py-3">
        <Marquee/>
      </div>
    </div>
  );
};

export default Navber;

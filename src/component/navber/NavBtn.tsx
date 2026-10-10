import Link from "next/link";


const NavBtn = () => {
    return (
        <div className="flex gap-3 lg:flex-row flex-col">
            <Link href="/sign-in" className="btn btn-ghost">
              সাইন ইন
            </Link>
            <Link href="/sign-up" className="btn  bg-[#047F39] border-[#047F39] drop-shadow-[#047F39] text-white">
              সাইন আপ
            </Link>
        </div>
    );
};

export default NavBtn;
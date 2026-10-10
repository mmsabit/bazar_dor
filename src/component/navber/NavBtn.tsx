"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { IoPersonSharp } from "react-icons/io5";
import { TbArrowBack } from "react-icons/tb";
import { toast, Bounce } from "react-toastify";

const NavBtn = () => {
  const handleSignOut = async () => {
    await authClient.signOut();
          toast.success("সাইন আউট সফল হয়েছে", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
  };

  const { data: session } = authClient.useSession();
  const user = session?.user;
  if (user) {
    return (
      <div className="dropdown dropdown-hover focus:bg-transparent">
        <div tabIndex={0} role="button" className="flex items-center gap-3">
          <Image
            src={
              user.image
                ? user.image
                : "https://i.pinimg.com/736x/1c/4d/0a/1c4d0ada94a64ac4b92a1556d7736f43.jpg"
            }
            alt={user.name}
            height={40}
            width={40}
            className="w-10 h-10 object-cover rounded "
          />
          <h5 className="text-[16px] font-semibold">{user.name}</h5>
        </div>
        <div
          tabIndex={0}
          className="dropdown-content card card-sm bg-base-100 z-1 w-64 shadow-md mt-1 right-0"
        >
          <div className="card-body p-3">
            <div>
              <h5 className="text-[16px] font-semibold">{user.name}</h5>
              <p>{user.email}</p>
            </div>

            <div className="mt-2 flex flex-col gap-2">
              <Link href={`/profile`} className="text-[14px] flex items-center gap-1"><IoPersonSharp size={16} /> প্রোফাইল</Link>
              <button onClick={handleSignOut} className="w-fit flex items-center text-[#D03739] gap-1 cursor-pointer" type="button"><TbArrowBack size={16}/> সাইন আউট</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex gap-3 lg:flex-row flex-col">
      <Link href="/sign-in" className="btn btn-ghost">
        সাইন ইন
      </Link>
      <Link
        href="/sign-up"
        className="btn  bg-[#047F39] border-[#047F39] drop-shadow-[#047F39] text-white"
      >
        সাইন আপ
      </Link>
    </div>
  );
};

export default NavBtn;

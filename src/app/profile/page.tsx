"use client";

import { redirect } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { TbArrowBack } from "react-icons/tb";
import { toast, Bounce } from "react-toastify";

const ProfilePage = () => {
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
    redirect("/sign-in");
  };

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleUpdate = async (e:React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUserData = Object.fromEntries(formData.entries()) as {update_name: string}

    await authClient.updateUser({
        name: newUserData.update_name,
    })

    toast.success("আপনার তথ্য আপডেট করা হচ্ছে", {
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
  }
  return (
    <div className="max-w-3xl w-9/10 my-20 mx-auto h-[90vh]">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">আমার প্রোফাইল</h2>
        <p className="text-[#5c655e] text-sm">
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
        </p>
      </div>
      <div className="flex lg:flex-row flex-col gap-5 items-center justify-between w-full max-w-4xl p-4 bg-[#f8faf9] border border-gray-200 rounded-2xl shadow-sm mb-6">
        <div className="flex items-center space-x-4 lg:w-fit w-full">
          <Image
            src={
              user?.image
                ? user.image
                : "https://i.pinimg.com/736x/1c/4d/0a/1c4d0ada94a64ac4b92a1556d7736f43.jpg"
            }
            alt="Rezwan Ahmed"
            width={64}
            height={64}
            className="w-16 h-16 rounded-2xl object-cover bg-gray-200"
          />
          <div>
            <h3 className="text-xl font-bold text-gray-900 tracking-tight">
              {user?.name}
            </h3>
            <p className="text-base text-gray-500 font-normal">{user?.email}</p>
          </div>
        </div>

        <button
          onClick={handleSignOut}
          className="flex items-center space-x-1.5 px-4 py-2 border border-red-500 text-red-500 rounded-xl hover:bg-red-50 transition-colors duration-200 font-medium text-sm cursor-pointer lg:w-fit w-fullw"
        >
          <TbArrowBack size={16} />
          <span>সাইন আউট</span>
        </button>
      </div>
      {/* Update from */}
      <div className="w-full p-8 bg-white border border-gray-100 rounded-3xl shadow-sm">
 
        <h2 className="text-xl font-bold text-gray-900 mb-6">তথ্য পরিবর্তন</h2>
      
        <form onSubmit={handleUpdate}  className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-700">নাম</label>
            <input
              type="text"
              className="w-full px-3 py-1 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 transition-all"
              placeholder="আপনার নতুন নাম দিন।"
              name="update_name"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#0F9D58] hover:bg-[#0b824a] text-white font-medium rounded-xl shadow-md transition-colors duration-200 cursor-pointer"
          >
            আপডেট
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;

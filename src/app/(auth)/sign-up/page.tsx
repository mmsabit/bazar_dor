"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";

const SignUpPage = () => {
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >;

    if (user.user_password !== user.user_confirm_password) {
      toast.error("পাসওয়ার্ড মিলছে না।", {
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
      return;
    }

    const { data, error } = await authClient.signUp.email({
      name: user.user_name,
      email: user.user_email,
      password: user.user_password,
      callbackURL: "/",
    });

    if (data) {
      toast.success("সাইন আপ সফল হয়েছে", {
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
      redirect("/");
    }

    if (error) {
      toast.error(error.message, {
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
  };

  const GoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });

    if (data) {
      toast.success("সাইন ইন সফল হয়েছে", {
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
  };

  const GithubsignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
    if (data) {
      toast.success("সাইন ইন সফল হয়েছে", {
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
  };

  const [showPassword, setShowpassword] = useState(false);

  const handleShow = () => {
    setShowpassword(!showPassword);
  };
  return (
    <div className="flex min-h-[90vh] flex-col items-center justify-center py-20">
      <h2 className="text-3xl font-bold mb-2">অ্যাকাউন্ট তৈরি করুন</h2>
      <p className="text-lg text-[#1d271f9f] mb-6">
        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
      </p>
      <fieldset className="fieldset bg-[#fafcfa] border-base-300 rounded-box w-9/10 max-w-115 border p-6">
        <form onSubmit={handleSubmit}>
          <label className="block text-[14px] mt-3">নাম</label>
          <input
            name="user_name"
            type="text"
            className="input w-full"
            placeholder="আপনার নাম"
          />

          <label className="block text-[14px] mt-3 ">ইমেইল</label>
          <input
            type="email"
            className="input w-full"
            placeholder="আপনার ইমেইল"
            name="user_email"
          />

          <label className="block text-[14px] mt-3">পাসওয়ার্ড</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="input w-full"
              placeholder="পাসওয়ার্ড দিন"
              name="user_password"
            />
            <button
              className="absolute right-3 top-3 cursor-pointer"
              onClick={handleShow}
              type="button"
            >
              {showPassword ? <FaEyeSlash size={17} /> : <FaEye size={17} />}
            </button>
          </div>
          <label className="block text-[14px] mt-4">
            পাসওয়ার্ড নিশ্চিত করুন
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="input w-full"
              placeholder="পাসওয়ার্ড নিশ্চিত করুন"
              name="user_confirm_password"
            />
            <button
              className="absolute right-3 top-3 cursor-pointer"
              onClick={handleShow}
              type="button"
            >
              {showPassword ? <FaEyeSlash size={17} /> : <FaEye size={17} />}
            </button>
          </div>

          <label className="block text-[14px] mt-4">ফটো</label>
          <input
            type="url"
            className="input w-full"
            placeholder="ফটোর লিঙ্ক দিন"
            name="user_photo"
          />

          <button type="submit" className="btn text-white py-5 bg-[#05893E] w-full mt-4">
            অ্যাকাউন্ট তৈরি করুন
          </button>
        </form>
        <div className="flex items-center justify-center gap-5">
          <hr className="border border-base-300 w-full" /> <span>অথবা</span>
          <hr className="border border-base-300 w-full" />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-2 mt-4">
          <button
            onClick={GoogleSignIn}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Google দিয়ে চালিয়ে যান
          </button>
          <button
            onClick={GithubsignIn}
            className="btn bg-black text-white border-black"
          >
            <svg
              aria-label="GitHub logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
              ></path>
            </svg>
            GitHub দিয়ে চালিয়ে যান
          </button>
        </div>
        <div className="mt-4 text-center text-[14px]">
          অ্যাকাউন্ট নেই?{" "}
          <Link href="/sign-in" className="text-[#05893E] hover:underline">
            সাইন ইন করুন
          </Link>
        </div>
      </fieldset>
    </div>
  );
};

export default SignUpPage;

import Link from "next/link";
import React from "react";

const notfound = () => {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center">
      <h1 className="text-8xl font-bold">৪০৪</h1>

      <p className="mt-4 text-2xl">পৃষ্ঠাটি খুঁজে পাওয়া যায়নি</p>

      <p className="mt-2 text-gray-400">
        দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন তা আমরা খুঁজে পাইনি।
      </p>

      <Link
        href="/"
        className="bg-[#047f39] hover:bg-[#046c31]  font-bold px-8 py-3.5 rounded-full text-sm sm:text-base shadow-lg transition-transform active:scale-95 mt-10 text-white"
      >
        হোমে ফিরে যান
      </Link>
    </div>
  );
};

export default notfound;

import BannerImage from "@/asset/bazar-hero.png";
import Image from "next/image";

const Banner = () => {
  const currentDate = new Date().toLocaleDateString("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div>
      <div className="xl:max-w-7xl mx-auto w-full max-w-9/10 bg-[#fafcfa] my-10 rounded-3xl p-5 flex lg:flex-row flex-col gap-5 justify-between items-center">
        <div className="w-full">
          <p className="text-[#047F39] text-[12px] lg:text-[16px] font-medium bg-[#e1f1e7] px-3 py-1 rounded-full w-fit">
            {currentDate}
          </p>
          <h1 className="lg:text-[36px] text-[20px] font-bold mt-2">
            আজকের বাজারের দাম এক নজরে
          </h1>
          <p className="lg:text-[16px] text-[12px] my-5 text-[#5f6761]">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>
          <button className="btn bg-[#047F39] border-[#047F39] drop-shadow-[#047F39] text-white py-2 px-4">
            সব পণ্য দেখুন
          </button>
        </div>
        <div className="w-full flex justify-end items-center">
            <Image
              src={BannerImage}
              alt="Banner"
              className="w-full h-full max-w-100 object-contain rounded-3xl"
              width={310}
              height={200}
            />
        </div>
      </div>
    </div>
  );
}
export default Banner;

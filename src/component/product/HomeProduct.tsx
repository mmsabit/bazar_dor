import { ProductType } from "@/type/type";
import { IoCaretDown, IoCaretUp } from "react-icons/io5";
import ProductCard from "./ProductCard";

const HomeProduct = async () => {
  const res = await fetch(
    `${process.env.BASE_URL}/products`,
  );
  const data = await res.json();

  const priceHiked = data.filter(
    (data: ProductType) => data.change.dir === "up",
  );
  const priceDown = data.filter(
    (data: ProductType) => data.change.dir === "down",
  );
  return (
    <div>
      <div className="xl:max-w-7xl mx-auto w-full max-w-9/10">
        <div>
          <h3 className="flex items-center text-[20px] font-bold text-nowrap">
            <IoCaretUp color="#DC2626 " /> আজ দাম বেড়েছে
          </h3>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 my-5">
            {priceHiked.map((item: ProductType, i: number) => (
              <ProductCard key={i} product={item} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="flex items-center text-[20px] font-bold text-nowrap">
            <IoCaretDown color="#047F39" /> আজ দাম কমেছে
          </h3>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 my-5">
            {priceDown.map((item: ProductType, i: number) => (
              <ProductCard key={i} product={item} />
            ))}
          </div>
        </div>
        <div className="my-10">
          <h3 className="flex items-center text-[20px] font-bold text-nowrap">
            সব পণ্য
          </h3>
          <p className="text-[12px] lg:text-[16px] text-[#5f6761] my-2">
            মোট {data.length}টি পণ্য দেখানো হচ্ছে
          </p>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 my-5">
            {data.map((item: ProductType, i: number) => (
              <ProductCard key={i} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;

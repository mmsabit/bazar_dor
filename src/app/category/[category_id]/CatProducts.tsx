'use client';
import ProductCard from "@/component/product/ProductCard";
import { ProductType } from "@/type/type";
import { useState } from "react";

const CatProducts = ({ products }: { products: ProductType[] }) => {
  const [sortOption, setSortOption] = useState("Default");
 
  const handleSortChange = (items: ProductType[]) => {
    const sortedItems = [...items];
    if (sortOption === "Lowest") {
      sortedItems.sort((a, b) => a.today - b.today);
    } else if (sortOption === "Highest") {
      sortedItems.sort((a, b) => b.today - a.today);
    }
    return sortedItems;
  };

  const sortedProducts = handleSortChange(products);

  return (
    <div>
      <div className=" gap-3 p-5 bg-[#fafcfa] rounded-3xl my-6 border border-base-300 items-center">
        <fieldset>
          <div className="flex justify-end gap-3 items-center">
            <legend className="text-[14px] text-[#1d271fa7]">সাজান</legend>
            <select defaultValue="ডিফল্ট" className="select max-w-43"
              onChange={(e) => setSortOption(e.target.value)}>
              <option value="Default">ডিফল্ট</option>
              <option value="Lowest">দাম কম থেকে বেশি</option>
              <option value="Highest">দাম বেশি থেকে কম</option>
            </select>
          </div>
        </fieldset>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-13 mb-25">
        {sortedProducts.map((item: ProductType, i: number) => (
          <ProductCard key={i} product={item} />
        ))}
      </div>
    </div>
  );
};

export default CatProducts;

import { ProductType } from "@/type/type";
import Link from "next/link";
import { IoCaretDown, IoCaretUp } from "react-icons/io5";

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <div>
      <Link href={`/product/${product.id}`}>
      <div className=" w-full mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col justify-between font-sans">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-emerald-50/60 rounded-xl flex items-center justify-center p-2 shrink-0 text-2xl">
            {product.image}
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 leading-tight">
              {product.nameBn}
            </h2>
            <p className="text-sm text-gray-500 mt-0.5">প্রতি কেজি</p>
          </div>
        </div>

        <div className="mt-2 pt-2 flex items-end justify-between">
          <div>
            <span className="text-xs text-gray-500 block mb-1">আজকের দাম</span>
            <div className="flex items-baseline space-x-1.5">
              <span className="text-2xl font-bold text-gray-900 tracking-tight">
                {product.today}
              </span>
              <span className="text-sm font-medium text-gray-700">টাকা</span>
            </div>
          </div>

          <div className={`flex items-center w-fit px-2.5 py-1 rounded-full text-xs font-semibold ${
                product.change.dir === "up"
                  ? "bg-rose-50 text-[#DC2626]"
                  : "bg-emerald-50 text-[#047F39]"
              }`}>
            <span
              className={`flex items-center gap-1 ${
                product.change.dir === "up"
                  ? "text-[#DC2626]"
                  : "text-[#047F39]"
              }`}
            >
              {product.change.dir === "up" ? <IoCaretUp /> : <IoCaretDown />}
              {product.change.dir === "up"
                ? product.change.pct
                : product.change.pct * -1}
              {}%
            </span>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default ProductCard;

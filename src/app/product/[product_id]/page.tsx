import Link from "next/link";
import { IoCaretUp, IoCaretDown } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";
import Count from "./Count";
import ProductTable from "./ProductTable";
import { toBanglaNumber, translateUnit } from "@/type/function";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ product_id: string }>;
}) => {
  const { product_id } = await params;

  const response = await fetch(
    `${process.env.BASE_URL}/products/${product_id}`,
  );
  const product = await response.json();
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="flex items-center gap-2 text-gray-500 text-sm mt-4">
        <Link href="/">হোম</Link> <MdNavigateNext />
        <Link href={`/category/${product.category}`}>
          {product.categoryNameBn}
        </Link>{" "}
        <MdNavigateNext />
        <span>{product.nameBn}</span>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex justify-between font-sans my-6">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 bg-[#f0f5f0] rounded-xl flex items-center justify-center p-2 shrink-0 text-5xl">
            {product.image}
          </div>
          <div>
            <h2 className="text-[30px] font-bold text-gray-900 leading-tight">
              {product.nameBn}
            </h2>
            <p className="text-sm text-gray-500 mt-0.5">প্রতি {translateUnit(product.unit)}</p>
            <p className="text-sm text-gray-500 mt-0.5">
              {" "}
              {product.today > product.yesterday
                ? `গতকালের তুলনায় আজ দাম বেড়েছে · ${toBanglaNumber(product.today - product.yesterday)}`
                : `গতকালের তুলনায় আজ দাম কমেছে · ${toBanglaNumber(product.yesterday - product.today)}`}{" "}
              টাকা
            </p>
          </div>
        </div>
        <div className=" p-5 bg-[#f0f5f0] rounded-xl flex flex-col items-center justify-center gap-0.5">
          <p className="text-sm">আজকের দাম</p>
          <h5 className="text-3xl font-bold text-gray-900">{toBanglaNumber(product.today)}</h5>
          <p className="text-sm">টাকা / { translateUnit(product.unit)}</p>

          <p
            className={`w-full flex items-center justify-center gap-1 text-center font-semibold ${
              product.change.dir === "up" ? "text-[#DC2626]" : "text-[#047F39]"
            }`}
          >
            {product.change.dir === "up" ? <IoCaretUp /> : <IoCaretDown />}
            {product.change.dir === "up"
              ? product.change.pct
              : product.change.pct * -1}
            {}%
          </p>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col gap-4 font-sans my-6">
        <h2 className="text-lg font-bold text-gray-900 leading-tight">
          দামের সারসংক্ষেপ
        </h2>
        <Count products={product.markets}/>
        <h2 className="text-lg font-bold text-gray-900 leading-tight">
          বাজারভিত্তিক আজকের দাম
        </h2>
        <ProductTable products={product.markets} />
      </div>
    </div>
  );
};

export default ProductPage;

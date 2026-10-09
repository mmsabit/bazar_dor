import ProductCard from "@/component/product/ProductCard";
import { ProductType } from "@/type/type";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ category_id: string }>;
}) => {
  const { category_id } = await params;

  const res = await fetch(
    `${process.env.BASE_URL}/products?category=${category_id}`,
  );
  const data = await res.json();
  return (
    <div>
      <div className="xl:max-w-7xl mx-auto w-full max-w-9/10">
        <div className="flex gap-3 p-5 bg-[#fafcfa] rounded-3xl my-6 border border-base-300 items-center">
          <h5 className="text-5xl w-fit">{data[0].categoryIcon}</h5>
          <div>
            <h3 className="text-[24px] font-bold">{data[0].categoryNameBn}</h3>
            <p className="text-[12px] lg:text-[16px] text-[#5f6761]">
              {data.length}টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>
        <div className=" gap-3 p-5 bg-[#fafcfa] rounded-3xl my-6 border border-base-300 items-center">
          <fieldset>
            <div className="flex justify-end gap-3 items-center">
            <legend className="text-[14px] text-[#1d271fa7]">সাজান</legend>
            <select defaultValue="ডিফল্ট" className="select max-w-43">
              <option value="Default">ডিফল্ট</option>
              <option value="Lowest">দাম কম থেকে বেশি</option>
              <option value="Highest">দাম বেশি থেকে কম</option>              
            </select>
            </div>
          </fieldset>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-13 mb-25">
          {data.map((item: ProductType, i: number) => (
            <ProductCard key={i} product={item} />  
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;

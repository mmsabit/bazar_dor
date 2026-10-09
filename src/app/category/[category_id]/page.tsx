import { toBanglaNumber } from "@/type/function";
import CatProducts from "./CatProducts";


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
              {toBanglaNumber(data.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>
        <CatProducts products={data} />
      </div>
    </div>
  );
};

export default CategoryPage;

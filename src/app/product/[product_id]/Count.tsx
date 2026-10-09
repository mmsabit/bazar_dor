import { MarketType } from "@/type/type";

const Count = ({ products }: { products: MarketType[] }) => {
  const max = Math.max(...products.map((p) => p.max));
  const min = Math.min(...products.map((p) => p.min));

  const avg =
    products.reduce((total, p) => total + (p.min + p.max) / 2, 0) /
    products.length;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
      {/* সর্বনিম্ন দাম */}
      <div className="w-full max-w-sm rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium text-gray-600">সর্বনিম্ন দাম</p>
        <div className="my-2 flex items-baseline gap-2">
          <span className="text-3xl font-bold tracking-tight text-emerald-600">{min}</span>
          <span className="text-lg font-semibold text-emerald-600">টাকা</span>
        </div>
        <p className="text-xs text-gray-500">সবচেয়ে কম দামের বাজার</p>
      </div>

      {/* সর্বাধিক দাম */}
      <div className="w-full max-w-sm rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium text-gray-600">সর্বাধিক দাম</p>
        <div className="my-2 flex items-baseline gap-2">
          <span className="text-3xl font-bold tracking-tight text-[#D03739]">{max}</span>
          <span className="text-lg font-semibold text-[#D03739]">টাকা</span>
        </div>
        <p className="text-xs text-gray-500">সবচেয়ে বেশি দামের বাজার</p>
      </div>

      {/* গড় দাম */}
      <div className="w-full max-w-sm rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium text-gray-600">গড় দাম</p>
        <div className="my-2 flex items-baseline gap-2">
          <span className="text-3xl font-bold tracking-tight text-emerald-600">{avg.toFixed(2)}</span>
          <span className="text-lg font-semibold text-emerald-600">টাকা</span>
        </div>
        <p className="text-xs text-gray-500">প্রতি কেজি-এর হিসাবে</p>
      </div>
    </div>
  );
};

export default Count;

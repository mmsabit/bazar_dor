import React from "react";

const Count = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        {/* সর্বনিম্ন দাম */}
      <div className="w-full max-w-sm rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium text-gray-600">সর্বনিম্ন দাম</p>
        <div className="my-2 flex items-baseline gap-2">
          <span className="text-3xl font-bold tracking-tight text-emerald-600">
            ৫৯
          </span>
          <span className="text-lg font-semibold text-emerald-600">টাকা</span>
        </div>
        <p className="text-xs text-gray-500">সবচেয়ে কম দামের বাজার</p>
      </div>

      {/* সর্বাধিক দাম */}
      <div className="w-full max-w-sm rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium text-gray-600">সর্বাধিক দাম</p>
        <div className="my-2 flex items-baseline gap-2">
          <span className="text-3xl font-bold tracking-tight text-emerald-600">
            73
          </span>
          <span className="text-lg font-semibold text-emerald-600">টাকা</span>
        </div>
        <p className="text-xs text-gray-500">সবচেয়ে বেশি দামের বাজার</p>
      </div>

      {/* গড় দাম */}
      <div className="w-full max-w-sm rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium text-gray-600">গড় দাম</p>
        <div className="my-2 flex items-baseline gap-2">
          <span className="text-3xl font-bold tracking-tight text-emerald-600">
            ৬৬
          </span>
          <span className="text-lg font-semibold text-emerald-600">টাকা</span>
        </div>
        <p className="text-xs text-gray-500">প্রতি কেজি-এর হিসাবে</p>
      </div>
    </div>
  );
};

export default Count;

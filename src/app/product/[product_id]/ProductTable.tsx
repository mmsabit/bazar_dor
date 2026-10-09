

import { toBanglaNumber } from "@/type/function";
import { MarketType } from "@/type/type";


const ProductTable = ({ products }: { products: MarketType[] }) => {
 
  return (
    <div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>বাজার</th>
              <th>বিভাগ</th>
              <th>সর্বনিম্ন দাম</th>
              <th>সর্বাধিক দাম</th>
              <th>গড় দাম</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              const Avg = (product.min + product.max) / 2;
              return (
                <tr key={index}>
                  <td>{product.market}</td>
                  <td>{product.division}</td>
                  <td>{toBanglaNumber(product.min)} টাকা</td>
                  <td>{toBanglaNumber(product.max)} টাকা</td>
                  <td>{toBanglaNumber(Number(Avg.toFixed(0)))} টাকা</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;

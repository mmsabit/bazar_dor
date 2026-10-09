import { ProductType } from "@/type/type";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import { IoCaretDown, IoCaretUp } from "react-icons/io5";

const Marquee = async () => {
  const res = await fetch(
    `${process.env.BASE_URL}/products`,
  );
  const data = await res.json();

  return (
    <div>
      <MarqueeText direction="right" duration={20}>
        {data.map((item: ProductType, i: number) => {
          return (
            <p key={i} className="me-6 text-nowrap flex">
              <span className="me-2">{item.categoryIcon} </span>
              <span className="me-2">{item.nameBn} </span>
              <span>
                {item.today} টাকা/{item.unit}
              </span>
              <span
                className={`flex ms-2 items-center gap-1 ${
                  item.change.dir === "up" ? "text-[#DC2626]" : "text-[#047F39]"
                }`}
              >
                {item.change.dir === "up" ? <IoCaretUp /> : <IoCaretDown />}
                {item.change.dir === "up"
                  ? item.change.pct
                  : item.change.pct * -1}
                {}%
              </span>
            </p>
          );
        })}
      </MarqueeText>
    </div>
  );
};

export default Marquee;

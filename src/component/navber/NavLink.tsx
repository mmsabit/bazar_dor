"use client";
import { usePathname } from "next/navigation";
import { catetoryType } from "@/type/type";
import Link from "next/link";

const NavLink = ({ data }: { data: catetoryType[] }) => {
  const pathname = usePathname();
  return (
    <div className="flex gap-2 lg:flex-row flex-col">
      <li
        className={pathname === "/" ? "bg-[#047f39] text-white rounded-lg" : ""}
        onClick={() => {
          const activeElement = document.activeElement;
          if (activeElement instanceof HTMLElement) {
            activeElement.blur();
          }
        }}
      >
        <Link href={`/`}>🏠 হোম</Link>
      </li>
      {data.map((cat: catetoryType, i: number) => (
        <li
          key={i}
          className={
            pathname === `/category/${cat.slug}`
              ? "bg-[#047f39] text-white rounded-lg"
              : ""
          }
          onClick={() => {
            const activeElement = document.activeElement;
            if (activeElement instanceof HTMLElement) {
              activeElement.blur();
            }
          }}
        >
          <Link href={`/category/${cat.slug}`}>
            <span>{cat.icon}</span>
            {cat.nameBn}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default NavLink;

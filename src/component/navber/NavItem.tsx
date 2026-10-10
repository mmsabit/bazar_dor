import { catetoryType } from "@/type/type";
import Link from "next/link";

const NavItem = async () => {
  const res = await fetch(
    `${process.env.BASE_URL}/categories`,
  );
  const data = await res.json();

  return (
    <div className="flex gap-2 lg:flex-row flex-col">
        <li>
          <Link href={`/`}>🏠 হোম</Link>
        </li>
      {data.map((cat:catetoryType, i:number) => (
        <li key={i}>
          <Link href={`/category/${cat.slug}`}><span>{cat.icon}</span>{cat.nameBn}</Link>
        </li>
      ))}
    </div>
  );
};

export default NavItem;

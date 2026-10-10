


import NavLink from "./NavLink";

const NavItem = async () => {
  const res = await fetch(
    `${process.env.BASE_URL}/categories`,
  );
  const data = await res.json();

  return (
    <NavLink data={data} />
  );
};

export default NavItem;

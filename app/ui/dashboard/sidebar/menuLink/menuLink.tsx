"use client"
import Link from "next/link"
import { MenuItem } from "../../../../types/MenuItem";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }: { item: MenuItem }) => {
  const pathName = usePathname()
  const isActive = item.path === pathName;
  return (
    <Link className={`p-2 flex items-center gap-2.5 hover:bg-slate-600 my-2 rounded-xl ${isActive ? 'bg-slate-600' : ''}`} href={item.path}>
      {item.icon}
      {item.title}
    </Link>
  )
}

export default MenuLink

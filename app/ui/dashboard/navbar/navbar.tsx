"use client"

import { usePathname } from "next/navigation"
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from "react-icons/md"

const Navbar = () => {
  const pathName = usePathname()
  return (
    <div className="flex justify-between items-center p-2.5 bg-softColor rounded-xl">
      <div className="text-textColor font-bold capitalize">{pathName.split("/").pop()}</div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2.5 bg-softColor2 p-2.5 rounded-xl">
          <MdSearch />
          <input className="bg-transparent border-none text-softText" type="text" placeholder="Search" />
        </div>
        <div className="flex gap-2.5">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  )
}

export default Navbar

import Navbar from "../ui/dashboard/navbar/navbar"
import Sidebar from "../ui/dashboard/sidebar/sidebar"
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
        <div className="flex-[1_1_0%] bg-softColor p-2">
            <Sidebar />
        </div>
        <div className="flex-[4_4_0%] p-2">
            <Navbar />
            {children}
        </div>
    </div>
  )
}

export default Layout

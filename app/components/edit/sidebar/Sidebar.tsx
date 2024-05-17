'use client'

import { useState } from "react";

import nav from "@/app/constants/editFictionNavigation";
import SidebarItem from '@/app/components/edit/sidebar/ui/SidebarItem';


const Sidebar = () => {
  const [variant, setVariant] = useState<string>('ADD_PART');

  console.log(variant)
  
  return (
    <aside className="sticky top-3 border border-gray-700/30 bg-black/40 w-full md:w-[260px] h-[342px]">
      <ul className='divide-y-[1px] divide-gray-700/50 text-gray-400'>
        {nav.map((item, index) => (
          <SidebarItem key={index} {...item} dispatch={setVariant} />
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar;
"use client";

import { useState } from "react";
import Links from "./Links";
import Image from "next/image";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return <>
    <aside className={` bg-gray-400 text-white h-screen
        transition-all duration-300
        ${collapsed ? "w-20" : "w-64"}
        `}
    >   
                <div className="">
                   <button  onClick={() => setCollapsed(!collapsed)}>
          <div className="cursor-pointer border:0px p-4">{collapsed ? <b>☰</b> : <b>X</b>}</div>
        </button>
                  </div>
               <div className="p-3"><Image
                  src="next.svg"
                  alt="Logo"
                  width={100}
                  height={100}
                />
                </div>
      <div className="flex justify-between items-center p-4">
        {!collapsed && <a href="/" className="font-bold cursor-pointer">Admin</a>}
       
      </div>
      {!collapsed && <Links />}
    </aside>
  </>
}
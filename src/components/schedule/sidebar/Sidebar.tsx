import React from 'react'
import Create from './Create';

function Sidebar() {
    const  isSideBarOpen  = true;
  return (
    <aside
    className={
        `w-92  border-t px-2 py-3 transition-all duration-300 ease-in-out lg:block",
        !${isSideBarOpen} && "lg:hidden",
      `}>
        <Create />
    </aside>
  )
}

export default Sidebar
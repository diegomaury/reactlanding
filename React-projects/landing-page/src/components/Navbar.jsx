import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-between items-center px-44 py-3 mb-5 cursor-pointer'>
      <header className='text-[#EDA751] font-bold text-lg'>Charles Kasasira</header>
      <ul className='flex gap-10'>
        <li>Home</li>
        <li>About</li>
        <li>Project</li>
      </ul>
      <button className='outline outline-1 outline-[#EDA751] px-4 py-2 rounded-lg hover:bg-[#EDA751]'>Resume</button>
    </nav>
  )
}

export default Navbar
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-slate-800 px-8 py-3
    ">
        <Link href={"/"} className="text-white font-bold text-xl" >Damodar</Link>
        <div className='flex gap-2'>
        <Link href={"/addFeed" } className="bg-white p-2" >Add Post</Link>
        <Link href={"/search" } className="bg-white p-2" >Search</Link>

        </div>
    </nav>
  )
}

export default Navbar
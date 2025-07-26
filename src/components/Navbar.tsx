
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-between'>
        <Link href={"/"}>
            <img src={"/images/Fluidsep_logo_1.png"} alt='Logo' width={400} height={200} className='p-4' />
        </Link>
        <nav className='flex gap-5 p-4'>
            <Link href={"/"} className='hover:underline'>Home</Link>
            <Link href={"/about"} className='hover:underline'>About</Link>
            <Link href={"/contact"} className='hover:underline'>Contact</Link>
            <Link href={"/blog"} className='hover:underline'>Blog</Link>
        </nav>
    </div>
  )
}

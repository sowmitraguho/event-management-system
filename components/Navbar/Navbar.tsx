import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <header className='glass sticky top-0 z-50'>
            <nav className='flex flex-row justify-between mx-auto container sm:px-10 px-5 py-4'>
                {/* Navbar content goes here */}
                <Link href="/" className='logo flex flex-row items-center gap-2'>
                    <Image
                        src="/icons/logo.png"
                        alt="Logo"
                        width={24}
                        height={24}
                    />
                    <p className='text-xl font-bold italic max-sm:hidden'>DevEvent</p>
                </Link>

                <ul className='list-none flex flex-row items-center gap-6'>
                    <li><Link href="#home">Home</Link></li>
                    <li>
                        <Link href="#events">Events</Link>
                    </li>
                    <li>
                        <Link href="#about">About</Link>
                    </li>
                    <li>
                        <Link href="#contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar

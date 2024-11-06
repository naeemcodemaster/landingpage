'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>

            <div className='w-full flex justify-between bg-primary px-4 py-4'>
                <div>
                    <h2 className='text-white font-semibold'>Logo Name</h2>
                </div>
                <div className='text-white hidden md:block'>
                    <ul className='flex gap-6'>
                        <li>
                            <Link href={'/'}>
                                <span className="hover:text-secondary">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/about'}>
                                <span className="hover:text-secondary">About</span>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/services'}>
                                <span className="hover:text-secondary">Services</span>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/shop'}>
                                <span className="hover:text-secondary">Shop</span>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/blog'}>
                                <span className="hover:text-secondary">Blog</span>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/contact'}>
                                <span className="hover:text-secondary">Contact</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='md:hidden' onClick={()=>setIsOpen(!isOpen)}>
                    <button className='text-white'>☰</button>
                </div>
            </div>
           {
            isOpen ? (
                <div className='text-white md:hidden'>
                <ul className='bg-primary flex flex-col gap-2 p-4 mb-2'>
                    <li>
                        <Link href={'/'}>
                            <span className="hover:text-secondary">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/about'}>
                            <span className="hover:text-secondary">About</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/services'}>
                            <span className="hover:text-secondary">Services</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/shop'}>
                            <span className="hover:text-secondary">Shop</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/blog'}>
                            <span className="hover:text-secondary">Blog</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/contact'}>
                            <span className="hover:text-secondary">Contact</span>
                        </Link>
                    </li>
                </ul>
            </div>
            ) : null
           }

        </>

    )
}

export default Navbar

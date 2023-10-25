'use client';
import React from 'react';
import Link from 'next/link';
import {FaYoutube, FaGithub, FaTwitter, FaLaptop} from 'react-icons/fa'
import {useScrollPosition} from "@/app/hooks/useScrollPosition";

export function Navbar() {
    function classNames(...classes: any) {
        return classes.filter(Boolean).join(' ')
    }

    const scrollPosition = useScrollPosition()
    return (
        <nav className={classNames(
            scrollPosition > 0 ? 'shadow backdrop-blur-lg' : 'shadow-none backdrop-blur-none',
            'bg-transparent p-4 sticky top-0 drop-shadow-xl z-10',
        )} >
            <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
                <h1 className="text-2xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                    <Link href="/" className="text-white/90 no-underline hover:text-white">
                        WellBeauty Academy
                    </Link>
                </h1>
                <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">

                    <Link className="text-white/50 hover:text-white" href="https://twitter.com/">
                        <FaTwitter size={30} />
                    </Link>
                </div>
            </div>
        </nav>
    );
}



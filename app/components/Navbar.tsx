'use client';
import React from 'react';
import Link from 'next/link';
import {FaYoutube, FaGithub, FaTwitter, FaLaptop} from 'react-icons/fa'
import {useScrollPosition} from "@/app/hooks/useScrollPosition";
import Image from "next/image";

export function Navbar() {
    function classNames(...classes: any) {
        return classes.filter(Boolean).join(' ')
    }

    const scrollPosition = useScrollPosition()
    return (
        <nav className={classNames(
            scrollPosition > 0 ? 'shadow backdrop-blur-lg' : 'shadow-none backdrop-blur-none',
            'bg-transparent p-4 sticky top-0 drop-shadow-xl z-10',
        )}>
            <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row-reverse items-end">

                <Link href="/" className="no-underline w-fit">
                    <Image src="/images/WellBeauty_logo.png" alt="Logo" width={113} height={56} className="m-0"/>
                </Link>

            </div>
        </nav>
    );
}



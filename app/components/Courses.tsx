import React from 'react';
import Image from "next/image";
import Link from 'next/link'

const Courses = () => {
    return (
        <section className="flex flex-wrap ml-autojustify-center justify-center">
            <Link href="/">
                <Image src="/images/Post 1.png" alt="Post 1" height={450} width={200} />
            </Link>
            <Link href="/">
                <Image src="/images/Post 2.png" alt="Post 1" height={450} width={200} />
            </Link>
            <Link href="/">
                <Image src="/images/Post 3.png" alt="Post 1" height={450} width={200} />
            </Link>
            <Link href="/">
                <Image src="/images/Post 4.png" alt="Post 1" height={450} width={200} />
            </Link>
        </section>
    );
};

export default Courses;

import React from 'react';
import Image from "next/image";
import Link from 'next/link'

const Courses = () => {
    return (
        <section className="flex ml-auto max-w-lg">
            <Link href="/">
                <div className="mx-3">
                    <div>
                        <Image src="/images/skin.jpg" alt="image" width="240" height="240" sizes="100%"/>
                    </div>
                    <p>دوره‌ی نیدلینگ</p>
                </div>
            </Link>
            <Link href="/">
                <div className="mx-3">
                    <div>
                        <Image src="/images/skin.jpg" alt="image" width="240" height="240" sizes="100%"/>
                    </div>
                    <p>دوره‌ی نیدلینگ</p>
                </div>
            </Link>
            <Link href="/">
                <div className="mx-3">
                    <div>
                        <Image src="/images/skin.jpg" alt="image" width="240" height="240" sizes="100%"/>
                    </div>
                    <p>دوره‌ی نیدلینگ</p>
                </div>
            </Link>
        </section>
    );
};

export default Courses;

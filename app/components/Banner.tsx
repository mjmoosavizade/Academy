import React from 'react';
import Image from 'next/image'

export function Banner() {
    return (
        <section className="w-full mx-auto top bottom-28 sm:bottom-24 md:bottom-24 lg:bottom-24 relative h-screen">
            <Image
                className="w-full h-full"
                src="/images/Banner.png"
                sizes="100vw"
                alt="Profile"
                fill
                style={{objectFit: "cover", objectPosition:"left"}}
                priority={true}/>
        </section>
    );
}

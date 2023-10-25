import React from 'react';
import Image from 'next/image'

export function Banner() {
    return (
        <section className="w-full mx-auto top bottom-28 sm:lg:bottom-20 md:bottom-20 lg:bottom-16 relative h-screen">
            <Image
                className="w-full h-full"
                src="/images/bis-biswas-passing-by.jpg"
                sizes="100vw"
                alt="Profile"
                fill
                style={{objectFit: "cover"}}
                priority={true}/>
        </section>
    );
}

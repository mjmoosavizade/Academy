import React from 'react';
import Image from 'next/image'

export function Banner() {
    return (
        <section className="w-full mx-auto top bottom-28 sm:bottom-24 md:bottom-24 lg:bottom-24 relative h-screen">
            <Image
                className="w-full h-full object-left absolute "
                src="/images/Banner.png"
                sizes="100vw"
                alt="Profile"
                fill
                style={{objectFit: "cover"}}
                priority={true}/>
            <div className="flex top-1/3 relative justify-end right-4 md:right-16">
                <h2 className="relative right-2 font-bold text-sm" style={{color: "#165889"}}>
                    دوره های جامع آموزش مراقبت پوست، مو و زیبایی
                </h2>
                <Image src={`/images/diamond.png`} alt="diamond" height={30} width={30}/>
            </div>
            <div
                className="flex top-1/3 relative justify-end right-4 md:right-16 pl-7 pr-7 py-3 text-gray-50 md:pl-20 md:pr-7">
                <p className="text-right text-xs">
                    در پایان دوره ، گواهینامه مهارتی بین اللملی حضور در کارگاه به زبان انگلیسی و قابل استعلام ارائه
                    خواهد شد
                    قابل توجه پزشکان شرکت کننده در کارگاههای پزشکی زیبایی این سرتیفیکیت ها صرفا جهت حضور در یک دوره
                    مهارتی برای پزشکان بوده
                    و بعنوان مجوز فعالیت درحیطه پوست و زیبایی در مطب یا کلینیک یا بیمارستان نمی باشند
                </p>
            </div>
            <div className="flex top-1/3 relative justify-end right-4 md:right-16">
                <h2 className="relative right-2 font-bold text-gray-50 text-sm">
                    آکادمی تخصصی ول‌بیوتی
                </h2>
                <Image src={`/images/CheckMark.png`} alt="check" height={24} width={24}/>
            </div>
        </section>
    );
}

import React from 'react';
import Image from 'next/image'

export function Banner() {
    return (
        <section className="w-full mx-auto top bottom-28 sm:bottom-24 md:bottom-24 lg:bottom-24 relative h-screen">
            <Image
                className="w-full h-full absolute "
                src="/images/Banner2.png"
                sizes="100vw"
                alt="Profile"
                fill
                style={{objectFit: "cover"}}
                priority={true}/>
            <div className="grid relative justify-center top-1/3 prose prose-2xl mx-auto">
                <div className="flex relative justify-center">
                    <div className="bg-white py-1 px-4 banner-text-gradient" style={{
                        "background": "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8379726890756303) 10%, rgba(255,255,255,0.84) 90%, rgba(255,255,255,0) 100%)"
                    }}>
                        <p className="relative font-bold text-center text-lg" style={{color: "#253d6e"}}>
                            دوره های جامع آموزش مراقبت پوست، مو و زیبایی به سبک ولنسی
                        </p>
                    </div>
                </div>
                <div
                    style={{maxWidth: '100%'}}
                    className="
                    mt-5
                    w-full
                    flex
                    flex-col
                    relative
                    text-gray-50
                    md:pl-20
                    md:pr-20">
                    <p className="text-center text-xs ">
                        ولنس به مفهوم پیگیری پویای فعالیت ها، انتخاب ها و شیوه های زندگیست که منجر به حالتی از سلامتی کل
                        نگر می شود. یکی از مهم ترین ابعاد ولنس فیزیکی، ولنس زیبایی می باشد که
                        در این شاخه از ولنس به ارزیابی و ارتقا کیفیت پوست مو و تمرکز بر کاهش سن بیولوژیک و تقویت
                        فرایندهای ضد پیری خودکار و طبیعی بدن پرداخته می شود
                    </p>
                    <p className="text-center text-xs">
                        از این رو قصد داریم به همراه تیم توانمند و متخصص مرکز ولنس ول بیوتی، شما هنرجوی گرامی را در این
                        مسیر شگفت انگیز ، با این ابزار قوی در حوزه مراقبت های پوستی اشنا کنیم
                        و بتوانید با سبکی نوین و روشی منحصر به فرد در این حوزه گام بردارید و به یک فرد حرفه ای در ولنس
                        زیبایی تبدیل شوید
                    </p>
                    <p className="text-center text-xs">
                        در پایان دوره های این مرکز ، گواهینامه مهارتی بین اللملی حضور در کارگاه به زبان انگلیسی و قابل
                        استعلام و هم چنین مدرک مهارت های تخصصی استانداردهای
                        ولنس زیبایی، از مرکز نوآوری – شتابدهی فناوری ها و خدمات پیشرفته خود مراقبتی پوست, زیبایی و
                        فرآیند های ضدپیری ارائه خواهد شد
                    </p>
                    <p className="text-center text-xs">
                        برایتان شادمانی، پیروزی و پایداری در این مسیر خارق العاده را ارزومندیم
                    </p>
                </div>
                <div className="flex relative justify-center mt-10">
                    <h2 className="relative font-bold text-center text-gray-50 text-xs md:pl-48
                    md:pr-48" style={{color:"#253d6e"}}>
                        قابل توجه پزشکان شرکت کننده در کارگاههای پزشکی زیبایی این سرتیفیکیت ها صرفا جهت حضور در یک دوره
                        مهارتی برای پزشکان بوده
                        <br/>
                        و بعنوان مجوز فعالیت درحیطه پوست و زیبایی در مطب یا کلینیک یا بیمارستان نمی باشند
                    </h2>
                </div>
            </div>
        </section>
    );
}

import {Banner} from "@/app/components/Banner";
import Courses from "@/app/components/Courses"
import React from "react";
import Image from "next/image";

export default function Home() {
    return (
        <main className="px-0 mx-auto bg-white">
            <Banner/>
            <div className="px-7 grid justify-center prose prose-2xl mx-auto">
                <h2 className="mt-10 py-2 mb-6 text-xl font-bold text-center text-black "
                    style={{
                        color: "#253d6e",
                        background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(239,239,239,1) 25%, rgba(239,239,239,1) 75%, rgba(255,255,255,0) 100%)"
                    }}
                >
                    معرفی دوره های تخصصی مراقبت های پوستی به سبک ولنسی
                </h2>
                <p className="text-center text-sm">
                    شما در این دوره بطور کاملا کاربردی و علمی می توانید با هر مدرک تحصیلی حضور پیدا کنید و ما شما را از
                    سطح پایه تا پیشرفته به صورت کامل همراهی خواهیم کرد
                    دوره های آموزشی اسکین کر به سبک ولنسی مناسب برای تمام افراد علاقمند به موضوعات زیبایی و پوست می باشد
                    که قصد دارند در این حوزه بدرخشند و خاص باشند
                </p>
            </div>
            <div className="flex justify-center	">
                <Courses/>
            </div>
            <div className="flex justify-center mt-12">
                <Image src="/images/achiv.png" alt="Logo" width={600} height={600} className="m-0"/>
            </div>
        </main>
    )
}

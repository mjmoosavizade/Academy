import {Banner} from "@/app/components/Banner";
import Courses from "@/app/components/Courses"
import React from "react";

export default function Home() {
    return (
        <main className="px-0 mx-auto bg-white">
            <Banner/>
            <div className="px-7 grid justify-center prose prose-2xl mx-auto">
                <h2 className="mt-10 mb-6 text-xl font-bold text-center text-black" style={{color: "#253d6e"}}>
                    معرفی دوره های پیش‌رو
                </h2>
                <p className="text-center text-sm">
                    شما در این دوره بطور کاملا کاربردی و علمی می توانید با هر مدرک تحصیلی
                    حضور پیدا کنید. دوره آموزش
                    اسکین کر
                    مناسب برای تمام افراد علاقمند به
                    موضوعات زیبایی و پوست می باشد و برای کسانی که جویای کار با درآمد عالی و جایگاه اجتماعی بسیار مناسب
                    در
                    ایران هستند توصیه می شود</p>
            </div>
            <div className="flex justify-center	">
                <Courses/>
            </div>
        </main>
    )
}

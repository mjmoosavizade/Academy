import {Banner} from "@/app/components/Banner";
import Courses from "@/app/components/Courses"
import React from "react";

export default function Home() {
    return (
        <main className="px-0 mx-auto bg-white">
            <Banner/>
            <p className="mt-12 mb-12 text-3xl text-center text-black">
                دوره های ما
            </p>
            <Courses />
        </main>
    )
}

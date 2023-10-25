import React from 'react';
import {notFound} from "next/navigation";
import getFormattedDate from "@/lib/getFormattedDate";
import Link from 'next/link';


export function generateMetadata({params}: { params: { postId: string } }) {

    return {
        title: "course",
    }
}

export default async function Post({params}: { params: { postId: string } }) {

    return (
        <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
            <h1 className="text-3xl mt-4 mb-0">title</h1>
            <p className="mt-0">pubDate</p>
            <article>
                <section />
                <p>
                    <Link href="/">back to home</Link>
                </p>
            </article>
        </main>
    );
}


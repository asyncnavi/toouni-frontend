'use client';
import React from 'react';

import { IconArrowRight } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import withoutAuth from '@/hoc/without-auth';

const Home = () => {
    const router = useRouter();
    return (
        <div className="pattern-design w-full border-black border-b px-4 bg-amber-400 py-2 min-h-[100vh]">
            <Image src="/assets/logo.png" alt="ds" width="150" height="150" />
            <h1 className="uppercase max-w-[800px] font-bold  xs:text-4xl xs:leading-relaxed  md:text-6xl md:leading-relaxed ">
                Where students{' '}
                <span className="bg-blue-400 rounded">unite</span>,{' '}
                <span className="bg-green-400 rounded">share</span>,{' '}
                <span className="bg-red-400 rounded">thrive</span> together in a
                vibrant online community.
            </h1>

            <div className="flex gap-2 mt-4">
                <button
                    onClick={() => router.push('/login')}
                    className="border-2 border-black text-2xl p-2 flex items-center gap-2 shadow-[8px_8px_black]"
                >
                    Let{"'"}s get started
                    <IconArrowRight />
                </button>
            </div>
            <div className="bg-black text-white fixed bottom-0 left-0 right-0 p-2">
                <div className="flex gap-3 flex-wrap">
                    <Link className="text-sm underline" href="/">
                        About
                    </Link>
                    <Link className="text-sm underline" href="/">
                        Support Us
                    </Link>
                    <Link className="text-sm underline" href="/">
                        Privacy
                    </Link>
                    <Link className="text-sm underline" href="/">
                        Terms
                    </Link>
                    <Link className="text-sm underline" href="/">
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default withoutAuth(Home);

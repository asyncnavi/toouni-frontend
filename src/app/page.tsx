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
        <div className="white-pattern bg-white bg-patte w-full border-black border-b min-h-[100vh] font-['Inconsolata']">
            <header className="lg:container mx-auto w-full flex items-center p-4 ">
                <Link href="/">
                    <h1 className="text-4xl font-bold bg-white rounded-xl border">
                        toouni<span className="text-amber-500">;</span>
                    </h1>
                </Link>
            </header>
            <div className="sm:container w-full grid grid-cols-1 lg:grid-cols-2 items-center px-4 mt-20">
                <div className="">
                    <Image
                        src="/assets/mockup-left.png"
                        width={400}
                        height={400}
                        alt="Helo Helo"
                    />
                </div>
                <div className="flex items-start justify-start flex-col space-y-4 w-full">
                    <h1 className="text-5xl sm:6xl md:8xl lg:text-8xl font-bold break-words w-full max-w-[800px]">
                        Let{"'"}s{' '}
                        <span className="text-blue-400 rounded">unite</span>,{' '}
                        <span className="text-green-400 rounded">share</span>,{' '}
                        <span className="text-red-400 rounded">thrive</span>
                        <br />
                        together.
                    </h1>
                    <button
                        onClick={() => router.push('/identify')}
                        className="border-2 rounded-md bg-amber-500 border-black text-2xl p-2 flex items-center gap-2 shadow-[8px_8px_black] hover:shadow-none"
                    >
                        Let{"'"}s Get started
                        <IconArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};
export default withoutAuth(Home);

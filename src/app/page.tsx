'use client';
import React from 'react';

import { IconArrowRight, IconMenu } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

import withoutAuth from '@/hoc/without-auth';

const Home = () => {
    const router = useRouter();
    return (
        <div className=" bg-yellow-300 w-full border-black border-b min-h-[100vh] font-['Inconsolata']">
            <header className="w-full flex items-center ">
                <div className="border  border-black flex-1 p-4 text-xl cursor-pointer font-bold font-['Anton_SC']">
                    TooUNI
                </div>
                <div className="hidden md:block border  border-black flex-1 p-4 text-xl cursor-pointer">
                    About
                </div>
                <div className="hidden md:block border  border-black flex-1 p-4 text-xl">
                    FAQ
                </div>
                <div className="hidden md:block border  border-black flex-1 p-4 text-xl cursor-pointer">
                    PRIVACY
                </div>
                <div className="hidden md:block border  border-black flex-1 p-4 text-xl cursor-pointer">
                    TERMS
                </div>
                <div className="hidden md:block border  border-black flex-1 p-4 text-xl cursor-pointer">
                    CONTACT
                </div>
                <div className="md:hidden border  border-black flex-1 p-4 text-xl cursor-pointer">
                    <IconMenu />
                </div>
            </header>
            <h1 className="uppercase max-w-[1000px] font-bold  xs:text-4xl xs:leading-relaxed  md:text-8xl  px-4">
                Where students{' '}
                <span className="bg-blue-400 rounded">unite</span>,{' '}
                <span className="bg-green-400 rounded">share</span>,{' '}
                <span className="bg-red-400 rounded">thrive</span> together in a
                vibrant online community.
            </h1>

            <div className="flex gap-2 mt-4 px-4">
                <button
                    onClick={() => router.push('/login')}
                    className="border-2 border-black text-2xl p-2 flex items-center gap-2 shadow-[8px_8px_black] hover:shadow-none"
                >
                    Let{"'"}s get started
                    <IconArrowRight />
                </button>
            </div>
        </div>
    );
};
export default withoutAuth(Home);

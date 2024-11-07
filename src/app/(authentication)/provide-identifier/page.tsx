'use client';

import React from 'react';

import { IconArrowRight } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

import { TextField } from '@/ui';
import Logo from '@/ui/logo';

const IdentifyUserPage = () => {
    const router = useRouter();
    return (
        <div className="sm:container mx-auto">
            <Logo />
            <div className="w-full max-w-[400px] mx-auto">
                <h1 className="text-4xl sm:6xl  font-bold break-words w-full max-w-[800px] mt-20">
                    Email/Username.
                </h1>
                <TextField placeholder="Enter your email or username." />
                <button
                    onClick={() => router.push('/with-password')}
                    className="w-full border-2 rounded-md bg-amber-500 justify-center border-black text-2xl p-2 flex items-center gap-2 shadow-[8px_8px_black] hover:shadow-none"
                >
                    Continue
                    <IconArrowRight />
                </button>
            </div>
        </div>
    );
};

export default IdentifyUserPage;

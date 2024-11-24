'use client';

import React from 'react';

import { IconArrowRight } from '@tabler/icons-react';
import { useSearchParams } from 'next/navigation';

import { TextField } from '@/ui';

const Page = () => {
    const searchParams = useSearchParams();
    const source = searchParams.get('source');

    return (
        <>
            {source == 'identifier-check' && (
                <div className="bg-indigo-200 border border-black p-1 rounded">
                    You don{"'"}t have an account with this email or username.
                    So let{"'"}s create a new one.
                </div>
            )}
            <TextField
                label="Username"
                type="text"
                placeholder="Please choose a username."
            />

            <TextField
                label="Name"
                type="text"
                placeholder="Enter your name."
            />

            <TextField
                label="Password"
                type="password"
                placeholder="Enter your password."
            />
            <button className="w-full border-2 rounded-md bg-amber-500 justify-center border-black text-xl p-2 flex items-center gap-2 shadow-[8px_8px_black] hover:shadow-none">
                Continue
                <IconArrowRight />
            </button>
        </>
    );
};

export default Page;

'use client';

import React from 'react';

import { IconArrowRight } from '@tabler/icons-react';

import { TextField } from '@/ui';
import Logo from '@/ui/logo';

const IdentifyUserPage = () => {
    return (
        <div className="sm:container mx-auto">
            <Logo />
            <div className="w-full max-w-[400px] mx-auto">
                <h1 className="text-2xl   font-bold break-words w-full max-w-[800px] mt-20">
                    Username
                </h1>
                <TextField
                    type="text"
                    placeholder="Please choose a username."
                />
                <h1 className="text-2xl font-bold break-words w-full max-w-[800px]">
                    Name
                </h1>
                <TextField type="password" placeholder="Enter your name." />
                <h1 className="text-2xl font-bold break-words w-full max-w-[800px]">
                    Password
                </h1>
                <TextField type="password" placeholder="Enter your password." />
                <button className="w-full border-2 rounded-md bg-amber-500 justify-center border-black text-2xl p-2 flex items-center gap-2 shadow-[8px_8px_black] hover:shadow-none">
                    Continue
                    <IconArrowRight />
                </button>
            </div>
        </div>
    );
};

export default IdentifyUserPage;

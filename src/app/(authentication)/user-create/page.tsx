'use client';

import React from 'react';

import { IconArrowRight } from '@tabler/icons-react';

import { TextField } from '@/ui';

const Page = () => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
};

export default Page;

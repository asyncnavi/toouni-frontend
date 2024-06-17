'use client';
import React from 'react';

import Image from 'next/image';

import withoutAuth from '@/hoc/without-auth';

function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="white-pattern w-full border-black border-b px-4 bg-white py-2 min-h-[100vh]">
            <Image src="/assets/logo.png" alt="ds" width="150" height="150" />

            <div className="w-[90%] max-w-[400px] border border-black mx-auto mt-20 rounded p-2 shadow-[8px_8px_black] bg-white">
                {children}
            </div>
        </div>
    );
}

export default withoutAuth(AuthLayout);

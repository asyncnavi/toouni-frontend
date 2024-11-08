'use client';

import React, { ReactNode } from 'react';

import { IconArrowLeft } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';
import LoadingBar from '@/ui/loading-bar';
import Logo from '@/ui/logo';
import Toast from '@/ui/toast';

interface AuthLayoutProps {
    children: ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
    const { status, error } = useSelector((state: RootState) => state.auth);
    const router = useRouter();

    return (
        <>
            {error && <Toast title={error} variant="danger" />}
            <LoadingBar loading={status === 'pending'} />
            <div className="white-pattern w-full border-black border-b px-4 bg-white py-2 min-h-[100vh] font-['Inconsolata']">
                <div className="sm:container mx-auto">
                    <Logo />
                    <div className="w-full max-w-[400px] mx-auto mt-20">
                        <div className="flex gap-4 items-center mb-5">
                            <button
                                onClick={() => router.back()}
                                className="mb-2 border-2 rounded-md bg-white shadow-[4px_4px_black] text-black justify-center border-black text-xs p-1 flex items-center gap-2 hover:shadow-none"
                            >
                                <IconArrowLeft />
                            </button>
                            <h1 className="text-2xl font-bold break-words w-full max-w-[800px]">
                                Create New Account
                            </h1>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default AuthLayout;

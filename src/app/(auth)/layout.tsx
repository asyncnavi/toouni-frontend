'use client';
import React from 'react';

import Image from 'next/image';
import { useSelector } from 'react-redux';

import withoutAuth from '@/hoc/without-auth';
import { RootState } from '@/store';
import LoadingBar from '@/ui/loading-bar';
import Toast from '@/ui/toast';

function AuthLayout({ children }: { children: React.ReactNode }) {
    const { status, error } = useSelector((state: RootState) => state.auth);
    return (
        <React.Fragment>
            {error && <Toast title={error} variant="danger" />}

            <LoadingBar loading={status === 'pending'} />
            <div className="white-pattern w-full border-black border-b px-4 bg-white py-2 min-h-[100vh] font-['Inconsolata']">
                <Image
                    src="/assets/logo.png"
                    alt="ds"
                    width="150"
                    height="150"
                />

                <div className="w-[95%] max-w-[400px] border border-black mx-auto mt-20 rounded p-2 shadow-[8px_8px_black] bg-white">
                    {children}
                </div>
            </div>
        </React.Fragment>
    );
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default withoutAuth(AuthLayout);

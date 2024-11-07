'use client';
import React from 'react';

import { useSelector } from 'react-redux';

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
                {children}
            </div>
        </React.Fragment>
    );
}

export default AuthLayout;

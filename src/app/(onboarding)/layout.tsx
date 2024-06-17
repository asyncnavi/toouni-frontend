'use client';
import React, { FC } from 'react';

import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';

const OnboardingLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
    const { user, hasProfile } = useSelector((state: RootState) => state.auth);
    const router = useRouter();
    if (hasProfile) {
        router.push('/app');
    }
    if (!user) {
        router.push('/login');
    }

    return <>{children}</>;
};

export default OnboardingLayout;

'use client';
import { ReactNode, useEffect } from 'react';

import '@/styles/index.css';
import { Quicksand } from 'next/font/google';
import { Provider } from 'react-redux';

import { store, useAppDispatch } from '@/store';
import { initializeSession } from '@/store/auth/thunks';

const inter = Quicksand({ subsets: ['latin'] });

const AuthInitilizer = ({ children }: { children: ReactNode }) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(initializeSession());
    }, []);
    return <>{children}</>;
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Provider store={store}>
                    <AuthInitilizer>{children}</AuthInitilizer>
                </Provider>
            </body>
        </html>
    );
}

'use client';
import { ReactNode, useEffect } from 'react';

import '@/styles/index.css';
import { Provider } from 'react-redux';

import { store, useAppDispatch } from '@/store';
import { initializeSession } from '@/store/auth/initliaze-session';

const AuthInitializer = ({ children }: { children: ReactNode }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(initializeSession());
    });

    return <>{children}</>;
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Provider store={store}>
                    <AuthInitializer>{children}</AuthInitializer>
                </Provider>
            </body>
        </html>
    );
}

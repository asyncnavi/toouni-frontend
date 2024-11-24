'use client';
import { ReactNode } from 'react';

import '@/styles/index.css';
import { Quicksand } from 'next/font/google';
import { Provider } from 'react-redux';

import { store } from '@/store';

const inter = Quicksand({ subsets: ['latin'] });

// TODO : Create Auth Initilizer wrapper
export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Provider store={store}>{children}</Provider>
            </body>
        </html>
    );
}

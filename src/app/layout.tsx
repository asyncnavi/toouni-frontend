'use client';
import { Quicksand } from 'next/font/google';

import '@/styles/index.css';
import AuthProvider from '@/providers/auth';

const inter = Quicksand({ subsets: ['latin'] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthProvider>{children}</AuthProvider>
            </body>
        </html>
    );
}

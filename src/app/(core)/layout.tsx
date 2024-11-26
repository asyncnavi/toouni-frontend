'use client';
import React from 'react';

import { Inter } from 'next/font/google';

import Header from '@/components/core/header';
import Navigation from '@/components/core/navigation';

const inter = Inter({ subsets: ['latin'] });

export default function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="md:bg-gray-200 w-full">
                    <Header />
                    <div className=" min-h-screen flex flex-col md:max-w-[1280px] md:mx-auto ">
                        <main className="flex-1 ">{children}</main>
                        <Navigation />
                    </div>
                </div>
            </body>
        </html>
    );
}

import React from 'react';

import {
    IconBulb,
    IconFloatCenter,
    IconTicket,
    IconUserCircle,
} from '@tabler/icons-react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavigationData = [
    {
        id: 'ideas-nav',
        label: 'Ideas',
        icon: <IconBulb />,
        href: '/app',
    },

    {
        id: 'events-nav',
        label: 'Events',
        icon: <IconTicket />,
        href: '/events',
    },
    {
        id: 'post-nav',
        label: 'Posts',
        icon: <IconFloatCenter />,
        href: '/posts',
    },
    {
        id: 'profile-nav',
        label: 'Profile',
        icon: <IconUserCircle />,
        href: '/profile',
    },
];

const MainNavigation = () => {
    const pathname = usePathname();

    return (
        <footer className="xs:w-full md:rounded-none md:w-[600px] md:-mb-2  md:mx-auto md:bg-black md:text-white md:border-white md:bottom-1 bg-white border-t-2 border-t-black px-2 py-4  flex justify-center sticky bottom-0 z-10 md:py-0 md:px-0">
            {NavigationData.map((nav) => {
                return (
                    <Link
                        key={nav.id}
                        href={nav.href}
                        className={clsx(
                            'md:border-0 md:rounded-none p-2 flex justify-center gap-1 items-center w-full  rounded',
                            pathname === nav.href &&
                                ' text-white bg-amber-400 border border-black ',
                        )}
                    >
                        {nav.label}
                        {nav.icon}
                    </Link>
                );
            })}
        </footer>
    );
};

export default MainNavigation;

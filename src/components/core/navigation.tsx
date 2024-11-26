import { IconBulb, IconTicket, IconUserCircle } from '@tabler/icons-react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavigationData = [
    {
        id: 'ideas-nav',
        label: 'Discuss',
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
        id: 'profile-nav',
        label: 'Profile',
        icon: <IconUserCircle />,
        href: '/profile',
    },
];

const Navigation = () => {
    const pathname = usePathname();

    return (
        <footer className="w-full flex fixed z-10 bottom-0 left-0 bg-white border-t-2 border-t-black">
            <div className="w-full max-w-[600px] mx-auto flex py-2 px-1 gap-2">
                {NavigationData.map((nav) => {
                    return (
                        <Link
                            key={nav.id}
                            href={nav.href}
                            className={clsx(
                                'flex w-full items-center gap-2 justify-center py-2 rounded border-2 transition .3s ease-linear',
                                pathname === nav.href
                                    ? 'bg-amber-400 border-black'
                                    : 'border-white',
                            )}
                        >
                            {nav.label}
                            {nav.icon}
                        </Link>
                    );
                })}
            </div>
        </footer>
    );
};

export default Navigation;

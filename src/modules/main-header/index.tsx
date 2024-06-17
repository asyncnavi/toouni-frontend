import React from 'react';

import { IconBell, IconMessageCircle2 } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

import { useAppDispatch } from '@/store';
import { logout } from '@/store/auth/thunks';

const MainHeader = () => {
    const dispatch = useAppDispatch();
    const logoutUser = () => {
        dispatch(logout());
    };
    return (
        <header className="bg-amber-400  py-4 px-2 sticky top-0 z-10  border-black border-b ">
            <div className=" flex items-center justify-between md:max-w-[1280px] mx-auto">
                <Link href="/">
                    <Image
                        src="/assets/logo.png"
                        alt="ds"
                        width="80"
                        height="80"
                    />
                </Link>
                <div className="flex gap-2">
                    <div className="bg-green-400 rounded-full w-[30px] h-[30px] flex justify-center items-center shadow-[2px_2px_#000;]">
                        <IconBell size={24} />
                    </div>
                    <div
                        onClick={logoutUser}
                        className="bg-red-400 rounded-full w-[30px] h-[30px] flex justify-center items-center shadow-[2px_2px_#000;]"
                    >
                        <IconMessageCircle2 size={32} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default MainHeader;

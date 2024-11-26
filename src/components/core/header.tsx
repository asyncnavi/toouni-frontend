import React from 'react';

import { IconBell, IconMessageCircle2, IconPlus } from '@tabler/icons-react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className={`bg-white border-b py-4 px-2 sticky top-0 z-10   `}>
            <div className=" flex items-center justify-between md:max-w-[1280px] mx-auto">
                <Link href="/">
                    <h1 className="text-2xl font-bold">
                        toouni<span className="text-amber-500">;</span>
                    </h1>
                </Link>
                <div className="flex gap-2">
                    <div className="flex gap-1 items-center border border-black w-max p-2  shadow-[4px_4px_#5eead4] rounded-2xl">
                        <div className="flex items-center">Create</div>

                        <IconPlus size={18} />
                    </div>
                    <div className="flex gap-1 items-center border border-black w-max p-2  shadow-[4px_4px_#c7d2fe] rounded-2xl">
                        <IconBell size={18} />
                    </div>
                    <div className="flex gap-1 items-center border border-black w-max p-2  shadow-[4px_4px_#fecaca] rounded-2xl">
                        <IconMessageCircle2 size={18} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

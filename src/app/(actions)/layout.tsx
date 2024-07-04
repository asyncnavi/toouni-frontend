'use client';
import { FC } from 'react';

import { IconX } from '@tabler/icons-react';

const EventActionLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <div className="w-full border-b py-4 sticky top-0 bg-white">
                <div className="flex justify-between w-full max-w-[600px] mx-auto items-center px-2">
                    <h1 className="uppercase font-bold">Create event</h1>
                    <div className="bg-green-400 rounded-full w-[30px] h-[30px] flex justify-center items-center shadow-[2px_2px_#000;]">
                        <IconX size={24} />
                    </div>
                </div>
            </div>
            {children}
        </div>
    );
};
export default EventActionLayout;

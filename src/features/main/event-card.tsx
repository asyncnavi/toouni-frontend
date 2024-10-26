import React, { FC } from 'react';

import { IconArrowRight } from '@tabler/icons-react';
import { clsx } from 'clsx';

type EventCardProps = {
    title: string;
    description: string;
    color: string;
};

const colorClasses: { [key: string]: string } = {
    teal: 'bg-teal-200',
    indigo: 'bg-indigo-200',
    orange: 'bg-orange-200',
    cyan: 'bg-cyan-200',
    pink: 'bg-pink-200',
};

const EventCard: FC<EventCardProps> = ({ color, title, description }) => {
    const generatedBg = colorClasses[color] || 'bg-gray-200';
    return (
        <div className={clsx('border border-black  rounded p-0', generatedBg)}>
            <div className="p-2 space-y-4 ">
                <h1 className="font-bold text-2xl uppercase">{title}</h1>
                <p>{description}</p>
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <div className="flex flex-col bg-white w-max p-2 items-center rounded-lg ">
                            <span className="text-3xl">18</span>
                            <span>October</span>
                        </div>
                        <div className="flex flex-col bg-white w-max p-2 items-start rounded-lg ">
                            <span className="text-xs">@</span>
                            <span className="text-3xl">9 AM</span>
                        </div>
                    </div>

                    <div className="flex flex-col bg-black text-white w-max p-2 items-end rounded-lg shadow-[4px_4px_white]">
                        <span className="text-3xl">Details</span>
                        <IconArrowRight size={18} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;

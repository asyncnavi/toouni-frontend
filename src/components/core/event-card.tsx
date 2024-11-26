import React, { FC } from 'react';

import { IconArrowRight, IconLocationPin } from '@tabler/icons-react';
import { clsx } from 'clsx';

type EventCardProps = {
    title: string;
    description: string;
    color: string;
    date: string;
    time: string;
};

const colorClasses: { [key: string]: string } = {
    teal: 'bg-teal-200',
    indigo: 'bg-indigo-200',
    orange: 'bg-orange-200',
    cyan: 'bg-cyan-200',
    pink: 'bg-pink-200',
};

const EventCard: FC<EventCardProps> = ({
    color,
    title,
    description,
    date,
    time,
}) => {
    const generatedBg = colorClasses[color] || 'bg-gray-200';
    return (
        <div className={clsx('border border-black  rounded p-0', generatedBg)}>
            <div className="p-2 space-y-4 ">
                <div className="border-2 border-black bg-red-400 rounded w-max p-1 flex gap-2 items-center">
                    <IconLocationPin size={18} />
                    Chandigarh University
                </div>
                <h1 className="font-bold text-2xl uppercase">{title}</h1>
                <p>{description}</p>

                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <div className="flex flex-col bg-white w-max p-2 items-center rounded-lg ">
                            <span className="text-3xl">
                                {new Date(date).getDate()}
                            </span>
                            <span>
                                {new Date(date).toLocaleString('default', {
                                    month: 'long',
                                })}
                            </span>
                        </div>
                        <div className="flex flex-col bg-white w-max p-2 items-start rounded-lg ">
                            <span className="text-xs">@</span>
                            <span className="text-3xl">9 AM</span>
                        </div>
                    </div>

                    <div className="flex flex-col bg-black text-white w-max p-1 items-end rounded-lg shadow-[4px_4px_white] cursor-pointer">
                        <span className="text-2xl">Details</span>
                        <IconArrowRight size={32} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;

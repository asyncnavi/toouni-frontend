'use client';

import React from 'react';

import { events } from '@/app/(main-app)/events/data';
import EventCard from '@/features/main/event-card';

const Page = () => {
    return (
        <div className="px-2">
            <div className="flex flex-col gap-1 mx-auto justify-center max-w-[600px] my-4 ">
                <div className="space-y-4">
                    {events.map((event) => {
                        return (
                            <EventCard
                                title={event.title}
                                description={event.description}
                                color={event.color as string}
                                key={event.id}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Page;

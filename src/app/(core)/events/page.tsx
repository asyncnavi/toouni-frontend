'use client';

import React from 'react';

import EventCard from '@/components/core/event-card';

import { events } from './data';

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
                                date={event.date}
                                time={event.time}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Page;

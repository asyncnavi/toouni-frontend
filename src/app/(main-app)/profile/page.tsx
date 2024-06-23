'use client';

import React from 'react';

import {
    IconArrowRight,
    IconBell,
    IconLogout2,
    IconPaint,
    IconPencil,
    IconShield,
    IconUser,
} from '@tabler/icons-react';
import Image from 'next/image';
import { useSelector } from 'react-redux';

import { useGetProfileQuery } from '@/api/profile';
import { RootState } from '@/store';
import LoadingBar from '@/ui/loading-bar';

const Page = () => {
    const { user } = useSelector((state: RootState) => state.auth);

    const { data, isLoading } = useGetProfileQuery({ id: user?.id ?? '' });

    return (
        <React.Fragment>
            <LoadingBar isLoading={isLoading} />
            <div className="flex flex-col gap-1 mx-auto justify-center w-full h-[120px]  white-pattern "></div>
            <Image
                src="https://randomuser.me/api/portraits/men/3.jpg"
                alt="profile image"
                width="100"
                height="100"
                className="border-amber-500 border-2 rounded-full -mt-10 ml-2"
            />
            <div className="ml-2 space-y-1">
                <h1 className="font-bold">{data?.name}</h1>
                <h2>@{data?.username}</h2>
                <p className="text-gray-400 text-sm">{data?.bio}</p>
                <div className="border border-black rounded-md text-xs p-1 bg-teal-200 w-max">
                    {data?.university_or_college}
                </div>
            </div>
            <div className="flex flex-col my-2">
                <div className="py-2 px-1 border-y flex gap-2 justify-between cursor-pointer">
                    <div className="flex gap-2">
                        <IconPencil />
                        Edit profile
                    </div>
                    <IconArrowRight />
                </div>
                <div className="py-2 px-1 border-y flex gap-2 justify-between cursor-pointer">
                    <div className="flex gap-2">
                        <IconPaint />
                        Preferences
                    </div>
                    <IconArrowRight />
                </div>
                <div className="py-2 px-1 border-y flex gap-2 justify-between cursor-pointer">
                    <div className="flex gap-2">
                        <IconBell />
                        Notifications
                    </div>
                    <IconArrowRight />
                </div>
                <div className="py-2 px-1 border-y flex gap-2 justify-between cursor-pointer">
                    <div className="flex gap-2">
                        <IconUser />
                        Account
                    </div>
                    <IconArrowRight />
                </div>

                <div className="py-2 px-1 border-y flex gap-2 justify-between cursor-pointer">
                    <div className="flex gap-2">
                        <IconShield />
                        Privacy
                    </div>
                    <IconArrowRight />
                </div>
                <div className="py-2 px-1 border-y flex gap-2 justify-between cursor-pointer">
                    <div className="flex gap-2 text-red-500">
                        <IconLogout2 />
                        Logout
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Page;

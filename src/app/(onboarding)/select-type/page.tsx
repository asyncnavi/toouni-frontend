'use client';

import { useState } from 'react';

import {
    IconArrowRight,
    IconUser,
    IconUsersGroup,
    IconX,
} from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

import { Button } from '@/ui';

const SelectTypePage = () => {
    const [profileType, setProfileType] = useState<string>('student');
    const router = useRouter();
    const handleSubmit = () => {
        router.push(`/create-profile?profile_type=${profileType}`);
    };

    return (
        <div>
            <div className="w-full border-b py-4 sticky top-0 bg-white">
                <div className="flex justify-between w-full max-w-[600px] mx-auto items-center px-2">
                    <h1 className="uppercase font-bold">
                        Student/Organization(Club)
                    </h1>
                    <div className="bg-green-400 rounded-full w-[30px] h-[30px] flex justify-center items-center shadow-[2px_2px_#000;]">
                        <IconX size={24} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-1 mx-auto justify-center max-w-[600px] my-4 px-2 space-y-5">
                <h2>Are you a student or organization/club ? </h2>
                <div className="flex gap-2 ">
                    <div
                        className={`${profileType === 'student' && 'border-black'} border-2 p-2 rounded-lg cursor-pointer w-full`}
                        onClick={() => setProfileType('student')}
                    >
                        <IconUser />
                        Student
                    </div>
                    <div
                        className={`${profileType === 'organization' && 'border-black'} border-2 p-2 rounded-lg cursor-pointer w-full`}
                        onClick={() => setProfileType('organization')}
                    >
                        <IconUsersGroup />
                        Organization/Club
                    </div>
                </div>
                <Button
                    label="Continue"
                    rightIcon={<IconArrowRight />}
                    onClick={handleSubmit}
                />
            </div>
        </div>
    );
};

export default SelectTypePage;

import React, { FC } from 'react';

import {
    IconArrowRight,
    IconBubble,
    IconHeart,
    IconShare,
} from '@tabler/icons-react';
import Image from 'next/image';

type IdeaCardProps = {
    profile_pic: string;
    username: string;
    idea: string;
};

const IdeaCard: FC<IdeaCardProps> = ({ profile_pic, username, idea }) => {
    return (
        <div className="bg-white rounded-md mx-auto max-w-[600px] w-full flex flex-col px-2 py-4 justify-between border border-black gap-2 my-4 shadow-[8px_8px_white]">
            <p className="text-xl">{idea}</p>

            <div className="flex gap-1">
                <Image
                    alt=""
                    className="rounded-full "
                    src={profile_pic}
                    width="30"
                    height="30"
                />
                <div className="flex flex-col ">
                    <h4 className="font-semibold text-sm">{username}</h4>
                    <h5 className="text-xs">
                        Chandigarh University | 2 hour ago
                    </h5>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <small className="text-xs text-gray-400">
                    {' '}
                    33 people joined.
                </small>
                <button className="flex p-1 items-center gap-1 w-max border border-amber-400 rounded cursor-pointer">
                    <span className="text-xs text-amber-400 ">
                        Join discussion.
                    </span>
                    <IconArrowRight size={12} className="text-amber-400" />
                </button>
            </div>
        </div>
    );
};

export default IdeaCard;

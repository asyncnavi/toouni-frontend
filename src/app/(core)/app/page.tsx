'use client';

import React from 'react';

import IdeaCard from '@/components/core/idea-card';
import MockIdeas from '@/mock/ideas';

const Page = () => {
    return (
        <div className="px-2">
            {MockIdeas.map((v) => {
                return (
                    <IdeaCard
                        key={v.id}
                        username={v.username}
                        profile_pic={v.profile_pic}
                        idea={v.joke}
                    />
                );
            })}
        </div>
    );
};

export default Page;

'use client';

import React from 'react';

import withAuth from '@/hoc/with-auth';
import MockIdeas from '@/mock/ideas';
import IdeaCard from '@/modules/idea-card';

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

export default withAuth(Page);

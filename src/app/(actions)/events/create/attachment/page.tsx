'use client';
import React, { useState } from 'react';

import { useSearchParams } from 'next/navigation';

import UploadButton from '@/ui/upload-button';

const CreateAttachment = () => {
    const params = useSearchParams();
    const [] = useState<File | null>(null);
    const event_id = params.get('id');

    return (
        <div className="flex flex-col gap-1 mx-auto justify-center max-w-[600px] my-4 px-2">
            <h3>Add poster of event</h3>
            <UploadButton
                label="Upload a poster"
                helperText="Any type image JPEG, PNG, JPEG OR SVG"
                onChange={(file) => console.log(file)}
            />
        </div>
    );
};

export default CreateAttachment;

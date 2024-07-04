import { useState, useCallback } from 'react';

import { supabase } from '@/lib/supabase';

type UploadingStatus = 'idle' | 'uploading' | 'success' | 'error';

interface UseUploadDocumentResult {
    status: UploadingStatus;
    error: string | null;
    url: string | null;
    uploadDocument: (file: File) => Promise<void>;
}

const useUploadDocument = ({
    bucket,
}: {
    bucket: string;
}): UseUploadDocumentResult => {
    const [status, setStatus] = useState<UploadingStatus>('idle');
    const [error, setError] = useState<string | null>(null);
    const [url, setUrl] = useState<string | null>(null);

    const uploadDocument = useCallback(async (file: File) => {
        setStatus('uploading');
        try {
            const { data, error } = await supabase.storage
                .from(bucket)
                .upload(file.name, file, {});

            if (error) {
                setStatus('error');
                setError(error.message);
            }
            if (data) {
                console.log(data);

                const { data: path } = supabase.storage
                    .from(bucket)
                    .getPublicUrl(data.path);
                console.log(path);
                setStatus('success');
                setUrl(path.publicUrl);
            }
        } catch (err: unknown) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            setError(`${err.message}`);
        }
        setStatus('success');
    }, []);

    return { status, error, url, uploadDocument };
};

export default useUploadDocument;
